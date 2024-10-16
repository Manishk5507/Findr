require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userRoutes = require("./routes/users.route");
const findMissingRoutes = require("./routes/findMissing.route");
const reportMissingRoutes = require("./routes/reportMissing.route");
const User = require("./models/user.model");
const cors = require('cors');

const PORT = process.env.PORT || 3001;

app.use(cors({
  origin: process.env.FRONTEND_URL, // Replace with the URL of your frontend
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, // Allow credentials if needed
}));

const path = require("path");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

// Express built-in middleware for parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to Database");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
    process.exit(1); // Exit the process on connection failure
  });

// Middleware for cookies and session management
app.use(cookieParser());
app.use(
  session({
    secret: process.env.SECRET || "dkjfbdfjbdjfdb",
    resave: false,
    saveUninitialized: false,
  })
);

// Passport Configuration
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate())); // Uncommented and configured the LocalStrategy
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    done(err, null);
  }
});

// Test route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// API Routes
app.use("/api/users", userRoutes);
app.use("/api/findMissing", findMissingRoutes);
app.use("/api/reportMissing", reportMissingRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
