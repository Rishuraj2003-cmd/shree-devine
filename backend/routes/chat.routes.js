const router = require("express").Router();
const { chatWithAI } = require("../controllers/chat.controller");

router.post("/", chatWithAI);

module.exports = router;
