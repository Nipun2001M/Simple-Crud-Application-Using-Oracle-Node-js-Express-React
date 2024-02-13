

const express = require("express");
const router = express.Router();
const Addstudent=require('../controllers/addstudent')


router.post("/user",Addstudent.addstudent)



module.exports = router;