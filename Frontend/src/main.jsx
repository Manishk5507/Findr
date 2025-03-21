import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Components/LandingPage/About.jsx";
import ReportPage from "./Components/Report/ReportMissing.jsx";
import RulesPage from "./Components/Rules/RulesPage.jsx";
import Register from "./Components/Register/Register.jsx";
import Cases from "./Components/Cases/Cases.jsx";
import Navbar from "./Components/Navbar.jsx";
import Footer from "./Components/Footer.jsx";
import FindMissing from "./Components/Find/FindMissing.jsx";
import Profile from "./Components/Register/Profile.jsx";
import Login from "./Components/Register/Login.jsx";
import Loader from "./Components/Loader.jsx";
import { AuthProvider  } from "./context/AuthContext.jsx";
import PrivateRoute from "./Components/PrivateRoutes/privateRoute.jsx";



createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/aboutUs" element={<About />} />
          <Route path="/report-the-missing" element={<ReportPage />} />
          <Route path="/find-the-missing" element={<FindMissing />} />
          <Route path="/rules" element={<RulesPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cases" element={<Cases />} />
          
           {/* Use PrivateRoute directly in the Routes */}
           <Route path="/profile" element={<PrivateRoute element={<Profile />} path={"/login"} />} />

          <Route path="/loader" element={<Loader />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>
);
