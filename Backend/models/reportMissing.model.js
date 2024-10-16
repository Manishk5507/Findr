const { Schema, model } = require("mongoose");

const ReportMissingSchema = new Schema(
  {
    name: { type: String, default:"" },
    age: { type: Number, default:"" },
    gender: { type: String, default:"" },
    height: { type: Number, default:0 },
    weight: { type: Number, default:0 },
    hairColor: { type: String, default:"" },
    eyeColor: { type: String, default:"" },
    whenFound: { type: Date,required:true },
    whereFound: { type: String, required:true },
    additionalInfo: { type: String, default:"" },
    image: { type: String },
    status: { type: String, default: "Pending" },
    // user: { type: Schema.Types.ObjectId, ref: "User " },
  },
  { timestamps: true }
);

module.exports = model("ReportMissing", ReportMissingSchema);
