import { useState } from "react";

const AIChatBot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "assistant", text: "👋 Hi! How can I help you find a property today?" },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input) return;

    const newMessages = [...messages, { role: "user", text: input }];
    setMessages(newMessages);
    setInput("");

    const res = await fetch("http://localhost:3000/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: input }),
    });

    const data = await res.json();

    setMessages([...newMessages, { role: "assistant", text: data.reply }]);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 bg-lime-400 text-black px-5 py-3 rounded-full shadow-xl z-50"
      >
        🤖 AI Chat
      </button>

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-24 right-6 w-96 bg-[#0f1d16] border border-white/10 rounded-2xl flex flex-col z-50">
          <div className="p-4 text-white font-medium border-b border-white/10">
            Shree Devine AI Assistant
          </div>

          <div className="flex-1 p-4 space-y-3 overflow-y-auto text-sm">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`p-3 rounded-xl max-w-[80%] ${
                  m.role === "assistant"
                    ? "bg-white/10 text-white"
                    : "bg-lime-400 text-black ml-auto"
                }`}
              >
                {m.text}
              </div>
            ))}
          </div>

          <div className="p-3 flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 bg-black/30 text-white px-3 py-2 rounded"
            />
            <button
              onClick={sendMessage}
              className="bg-lime-400 text-black px-4 rounded"
            >
              ➤
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AIChatBot;
