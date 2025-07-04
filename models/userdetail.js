const User = require("../database/userdet");
const { generateUID, generateFourLetterCode } = require("../models/genrateunique");


const saveudersetail = async (req,res) => {
  try {
        const { phone, name, avatar, about, status } = req.body;
        if (!phone || !name) {
      return res.status(400).json({ success: false, message: "Missing required fields" });
    }


    let user = await User.findOne({ phone });


 if (user) {
      // ✅ User exists: return as-is (do not update uid or ucode)
      return res.status(200).json({ success: true, user, message: "User already exists" });
    }

    else {
      // ✅ User does not exist: create a new user
      const uid = generateUID(phone); // Generate a unique UID based on phone
      const ucode = generateFourLetterCode(); // Generate a unique 4-letter code
      user = new User({
        phone,
        uid,
        ucode,
        name,
        avatar,
        about,
        status
      });



      await user.save();
      return res.status(201).json({ success: true, message: "User created successfully" });
    }


  }
  
  
  catch (error) {
    console.error("Error saving user details:", error);
    return { success: false, message: "Failed to save user details" };
  }
}



module.exports = {
  saveudersetail
};