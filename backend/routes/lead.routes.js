const router = require("express").Router();
const { createLead } = require("../controllers/lead.controller");

router.post("/", createLead);

module.exports = router;
