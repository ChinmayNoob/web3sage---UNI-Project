"use client";
import { GoogleGenerativeAI } from "@google/generative-ai";
import Markdown from "react-markdown";
import { useState, useEffect, useRef } from "react";
import { BiSend } from "react-icons/bi";
import Image from "next/image";
import { Button } from "./ui/button";
import { Trash } from "lucide-react";
const ChatArea = () => {
  const messagesEndRef = useRef(null);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState([
    {
      role: "model",
      parts: "Hi there! I am an AI Chatbot which can provide you guidance regarding Web3 and how you can skill yourself in this sector",
      hidden: false, // visible in UI
    },

  ]);

  const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_API_KEY);
  const [chat, setChat] = useState(null);
  const model = genAI.getGenerativeModel({ model: "gemini-pro"});

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [history]);

  useEffect(() => {
    if (!chat) {
      setChat(
        model.startChat({
          generationConfig: {
            maxOutputTokens: 400,
          },
        })
      );
    }
  }, [chat, model]);

  async function chatting() {
    setLoading(true);
    setHistory((oldHistory) => [
      ...oldHistory,
      {
        role: "user",
        parts: input,
        hidden: false,
      },
      {
        role: "model",
        parts: "Thinking...",
        hidden: false,
      },
    ]);
    setInput("");
    try {
      const result = await chat.sendMessage(input);
      const response = await result.response;
      const text = response.text();
      setLoading(false);
      setHistory((oldHistory) => {
        const newHistory = oldHistory.slice(0, oldHistory.length - 1);
        newHistory.push({
          role: "model",
          parts: text,
          hidden: false,
        });
        return newHistory;
      });
    } catch {
      setHistory((oldHistory) => {
        const newHistory = oldHistory.slice(0, oldHistory.length - 1);
        newHistory.push({
          role: "model",
          parts: "Oops! Something went wrong.",
          hidden: false,
        });
        return newHistory;
      });
      setLoading(false);
      console.log("error");
      alert("Oops! Something went wrong");
    }
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      chatting();
    }
  }

  function reset() {
    setHistory([
      {
        role: "model",
        parts: "Hi there! I am an AI Chatbot which can provide you guidance regarding Web3 and how you can skill yourself in this sector",
        hidden: false,
      },
    ]);
    setInput("");
    setChat(null);
  }

  return (
    <div className="relative flex flex-col justify-between w-full max-w-3xl min-h-[calc(100vh-200px)] bg-white text-gray-800 rounded-lg shadow-lg mx-auto p-6 border border-gray-200">
    <div className="flex flex-col w-full max-h-[calc(100vh-300px)] overflow-y-auto mb-4 pr-4">
      <div className="flex flex-col space-y-4">
        {history
          .filter((item) => !item.hidden)
          .map((item, index) => (
            <div
              key={index}
              className={`flex ${
                item.role === "model" ? "justify-start" : "justify-end"
              }`}
            >
              <div className="flex items-end space-x-2">
                <div className="flex-shrink-0">
                  <Image
                    alt={item.role}
                    src={
                      item.role === "model"
                        ? "/images/image.png"
                        : "/images/users.png"
                    }
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-gray-600 font-Helvetica">
                    {item.role === "model" ? "Crollo" : "You"}
                  </span>
                  <div
                    className={`p-3 rounded-lg font-TimesNewRoman ${
                      item.role === "model"
                        ? "bg-blue-100 text-gray-800"
                        : "bg-gray-200 text-gray-800"
                    }`}
                  >
                    <Markdown>{item.parts}</Markdown>
                  </div>
                </div>
              </div>
            </div>
          ))}
        <div ref={messagesEndRef} />
      </div>
    </div>

    <div className="flex items-center gap-2">
        <Button
    className="text-white border border-gray-300 rounded-full w-12 h-12 flex items-center justify-center font-bold hover:bg-white hover:text-red-600"
    title="Reset"
    onClick={reset}
    variant="destructive"
    >
    <Trash size={12} />
    </Button>
      <input
        type="text"
        value={input}
        onKeyDown={handleKeyDown}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Start Chatting..."
        className="flex-1 p-3 bg-gray-100 rounded-lg outline-none text-gray-800 border border-gray-300"
      />
<Button
  className={`p-2 rounded-full border border-blue-500 text-white transition ${
    loading
      ? "bg-blue-300 cursor-wait"
      : "bg-blue-500 hover:bg-blue-600"
  } w-10 h-10 flex items-center justify-center`}
  title="Send"
  onClick={chatting}
  disabled={loading}
>
  {loading ? (
    <span className="animate-spin">🔄</span>
  ) : (
    <BiSend size={20} />
  )}
</Button>
    </div>
  </div>
  );
};
export default ChatArea;
