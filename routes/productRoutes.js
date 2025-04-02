const express = require("express")
const verify_token = require('../middleware/verification')
const router = express.Router();

const {saveProducts} = require("../controllers/productController")

module.exports = router;