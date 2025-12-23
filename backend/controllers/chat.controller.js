const OpenAI = require("openai");
const freeBotReply = require("../utils/freeBot");

let openai = null;

// OPTIONAL: Only initialize OpenAI if key exists
if (process.env.OPENAI_API_KEY) {
  openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });
}

exports.chatWithAI = async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.json({ reply: "Please type a message 😊" });
    }

    // 🟢 TRY OPENAI FIRST (if available)
    if (openai) {
      try {
        const completion = await openai.chat.completions.create({
          model: "gpt-4o-mini",
          messages: [
            {
              role: "system",
              content:
                "You are a polite real estate assistant for Shree Devine Pvt. Ltd.",
            },
            { role: "user", content: message },
          ],
        });

        return res.json({
          reply: completion.choices[0].message.content,
        });

      } catch (aiError) {
        console.log("⚠️ AI failed, switching to free bot");
      }
    }

    // 🟢 FALLBACK FREE BOT (NO COST)
    const reply = freeBotReply(message);
    return res.json({ reply });

  } catch (error) {
    console.error("CHAT ERROR ❌", error.message);

    return res.json({
      reply:
        "🤖 I’m having trouble right now, but our team is happy to help you directly!",
    });
  }
};
