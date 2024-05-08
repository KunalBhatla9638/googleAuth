const express = require("express")
const {welcome, registerUser} = require("../controllers/userControllers")

const router = express();

router.get("/", welcome);
router.post("/register", registerUser)

module.exports = router