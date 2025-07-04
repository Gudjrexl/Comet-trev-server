const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./database/db'); 
const PORT = process.env.PORT || 3000;
const otpphoneRouter = require('./apitrev/otpphone');
const userdetails = require("./apitrev/userdetails");
const chatinfo = require("./apitrev/chatacessinfo");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

connectDB();
app.use("/", otpphoneRouter); 
app.use("/profiledata", userdetails);
app.use("/chatinf", chatinfo);

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
