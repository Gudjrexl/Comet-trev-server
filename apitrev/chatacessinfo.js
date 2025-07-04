const express = require("express");
const router = express.Router();
const User = require("../database/userdet"); // Mongoose model

router.get("/profilef", async (req, res) => {
  const phone = req.query.number;

  if (!phone) {
    return res.status(400).json({ error: "Phone number is required" });
  }

  try {
    const user = await User.findOne({ phone }).lean();

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Only send name and profilePic
    res.json({
      name: user.name,
      profilePic: user.avatar || "https://example.com/default-avatar.png", // Provide a default avatar if none exists
      isverified: user.isVerified,
    });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
