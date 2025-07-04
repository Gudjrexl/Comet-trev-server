const otpMap = new Map();

function saveOTP(phone, otp) {
  otpMap.set(phone, otp);
  console.log("OTP saved for phone:", phone, "OTP:", otp);
  setTimeout(() => otpMap.delete(phone), 5 * 60 * 1000); // expire in 5 mins
}

function verifyOTP(phone, otp) {
   const stored = otpMap.get(phone);
  console.log("Stored OTP:", stored, "Received OTP:", otp);
    console.log("OTP saved for phone:", phone, "OTP:", otp);

  return stored === otp;
}

module.exports = { saveOTP, verifyOTP };