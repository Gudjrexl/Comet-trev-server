const express = require("express");
const {saveudersetail} = require("../models/userdetail");
const router = express.Router();
router.post("/profiles",saveudersetail);

module.exports = router;
