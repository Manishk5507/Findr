const express = require("express");
const router = express.Router();
const ReportMissing = require("../models/reportMissing.model");

// Route to add a new missing report
router.post("/add", async (req, res) => {
  try {
    const {
      name,
      age,
      gender,
      height,
      weight,
      hairColor,
      eyeColor,
      whenFound,
      whereFound,
      additionalInfo,
      image,
    } = req.body;

    const newReportMissing = new ReportMissing({
      name,
      age,
      gender,
      height,
      weight,
      hairColor,
      eyeColor,
      whenFound,
      whereFound,
      additionalInfo,
      image,
    });

    const report = await newReportMissing.save();
    res.status(201).json(report);
  } catch (error) {
    res.status(500).json({ message: "Error adding report", error: error.message });
  }
});

// Route to get all reports
router.get("/getAll", async (req, res) => {
  try {
    const reports = await ReportMissing.find();
    res.status(200).json(reports);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving reports", error: error.message });
  }
});

// Route to get a specific report by ID
router.get("/get/:id", async (req, res) => {
  try {
    const report = await ReportMissing.findById(req.params.id);
    if (!report) {
      return res.status(404).json({ message: "Report not found" });
    }
    res.status(200).json(report);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving report", error: error.message });
  }
});

// Route to update a report by ID
router.put("/update/:id", async (req, res) => {
  try {
    const updatedReport = await ReportMissing.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedReport) {
      return res.status(404).json({ message: "Report not found" });
    }

    res.status(200).json(updatedReport);
  } catch (error) {
    res.status(500).json({ message: "Error updating report", error: error.message });
  }
});

// Route to delete a report by ID
router.delete("/delete/:id", async (req, res) => {
  try {
    const deletedReport = await ReportMissing.findByIdAndDelete(req.params.id);
    if (!deletedReport) {
      return res.status(404).json({ message: "Report not found" });
    }
    res.status(200).json({ message: "Report deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting report", error: error.message });
  }
});

module.exports = router;
