const express = require("express");

const router = express.Router();

const { getAdmin } = require("./controller");

router.get("/", getAdmin);

module.exports = router;
