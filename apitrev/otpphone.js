const express = require("express");
const router = express.Router();
const {sendOTP} = require("../logichandle/generateotp")
const {saveOTP, verifyOTP} = require("../logichandle/verifyotp");
// POST /api/send-otp
router.post("/submitphone", async (req, res) => {
  const {phone} = req.body;
  if (!phone) {
    return res.status(400).json({ error: "Phone number is required" });
  }

  try {
   const otp = await sendOTP(phone);
    saveOTP(phone, otp);
    res.status(200).json({ success: true}); 

  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.get("/submitphone", (req, res) => {
  const { phone, otp } = req.query;
  if (!phone || !otp) return res.status(400).json({ error: "Missing fields" });

  const isValid = verifyOTP(phone, otp);
  if (isValid) {
    return res.json({ success: true, message: "OTP verified" });
  } else {
    return res.status(401).json({ success: false, message: "Invalid OTP" });
  }
});





module.exports = router;