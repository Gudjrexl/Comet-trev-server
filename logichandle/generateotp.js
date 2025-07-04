require('dotenv').config();
const twilio = require('twilio');



// Twilio config
const accountSid = 'ACb416b0415e53c70e4438cd185f549ef5'; // your Twilio Account SID
const authToken = 'a6952f6e88fe8487c57d60ae90c16f14';              // your Twilio Auth Token
const twilioPhone = '+17078819033';                     // your Twilio phone number

const client = twilio(accountSid, authToken);

// Function to generate 6-digit OTP
function generateOTP() {
    const Genotp =Math.floor(100000 + Math.random() * 900000).toString();
    return Genotp;
}

// Send OTP to a phone number
async function sendOTP(phoneNumber) {
    const otp = generateOTP();
    try {
        const message = await client.messages.create({
            body: `Your OTP is: ${otp}`,
            from: twilioPhone,
            to: phoneNumber
        });

        console.log("✅ OTP Sent:", message.sid);
        return { success: true, otp }; 
    } catch (error) {
        console.error("❌ Failed to send OTP:", error.message);
        return { success: false, error: error.message };
    }
}


module.exports = { sendOTP };
