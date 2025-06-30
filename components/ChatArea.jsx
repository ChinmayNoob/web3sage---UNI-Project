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
  const [error, setError] = useState("");
  const [history, setHistory] = useState([
    {
      role: "model",
      parts: "Hi there! I am an AI Chatbot which can provide you guidance regarding Web3 and how you can skill yourself in this sector",
      hidden: false, // visible in UI
    },
  ]);

  const [genAI, setGenAI] = useState(null);
  const [chat, setChat] = useState(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [history]);

  useEffect(() => {
    // Initialize Google Generative AI
    const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY || process.env.NEXT_PUBLIC_API_KEY;
    
    if (!apiKey) {
      setError("API key not found. Please set NEXT_PUBLIC_GEMINI_API_KEY in your environment variables.");
      console.error("Gemini API key not found");
      return;
    }

    try {
      const aiInstance = new GoogleGenerativeAI(apiKey);
      setGenAI(aiInstance);
      setError(""); // Clear any previous errors
    } catch (err) {
      console.error("Error initializing Google Generative AI:", err);
      setError("Failed to initialize AI service");
    }
  }, []);

  useEffect(() => {
    if (genAI && !chat) {
      try {
        const model = genAI.getGenerativeModel({ 
          model: "gemini-1.5-flash", // Updated model name
          generationConfig: {
            maxOutputTokens: 400,
            temperature: 0.7,
          },
        });
        
        const chatSession = model.startChat({
          history: [
            {
              role: "user",
              parts: [{ text: "You are a Web3 expert assistant. Please provide helpful guidance about Web3, blockchain, cryptocurrencies, DeFi, NFTs, and related technologies. Keep your responses informative but concise." }],
            },
            {
              role: "model",
              parts: [{ text: "I understand! I'm here to help you learn about Web3 technologies. I can guide you through blockchain concepts, cryptocurrencies, DeFi protocols, NFTs, smart contracts, and career paths in the Web3 space. What would you like to know?" }],
            },
          ],
        });
        
        setChat(chatSession);
      } catch (err) {
        console.error("Error creating chat session:", err);
        setError("Failed to create chat session");
      }
    }
  }, [genAI]);

  async function chatting() {
    if (!chat) {
      setError("Chat session not initialized. Please refresh the page.");
      return;
    }

    if (!input.trim()) {
      return;
    }

    setLoading(true);
    setError("");
    
    const userMessage = input.trim();
    setHistory((oldHistory) => [
      ...oldHistory,
      {
        role: "user",
        parts: userMessage,
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
      const result = await chat.sendMessage(userMessage);
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
    } catch (err) {
      console.error("Chat error:", err);
      setLoading(false);
      
      let errorMessage = "I'm sorry, I encountered an error while processing your message.";
      
      if (err.message?.includes("API_KEY")) {
        errorMessage = "API key error. Please check your Gemini API key configuration.";
      } else if (err.message?.includes("quota")) {
        errorMessage = "API quota exceeded. Please try again later.";
      } else if (err.message?.includes("blocked")) {
        errorMessage = "Request was blocked. Please try rephrasing your question.";
      }
      
      setHistory((oldHistory) => {
        const newHistory = oldHistory.slice(0, oldHistory.length - 1);
        newHistory.push({
          role: "model",
          parts: errorMessage,
          hidden: false,
        });
        return newHistory;
      });
      
      setError(err.message || "An unexpected error occurred");
    }
  }

  function handleKeyDown(e) {
    if (e.key === "Enter" && !e.shiftKey) {
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
    setError("");
    // Reinitialize chat
    if (genAI) {
      try {
        const model = genAI.getGenerativeModel({ 
          model: "gemini-1.5-flash",
          generationConfig: {
            maxOutputTokens: 400,
            temperature: 0.7,
          },
        });
        
        const chatSession = model.startChat({
          history: [
            {
              role: "user",
              parts: [{ text: "You are a Web3 expert assistant. Please provide helpful guidance about Web3, blockchain, cryptocurrencies, DeFi, NFTs, and related technologies. Keep your responses informative but concise." }],
            },
            {
              role: "model",
              parts: [{ text: "I understand! I'm here to help you learn about Web3 technologies. I can guide you through blockchain concepts, cryptocurrencies, DeFi protocols, NFTs, smart contracts, and career paths in the Web3 space. What would you like to know?" }],
            },
          ],
        });
        
        setChat(chatSession);
      } catch (err) {
        console.error("Error resetting chat:", err);
        setError("Failed to reset chat session");
      }
    }
  }

  return (
    <div className="relative flex flex-col justify-between w-full max-w-3xl min-h-[calc(100vh-200px)] bg-white text-gray-800 rounded-lg shadow-lg mx-auto p-6 border border-gray-200">
      {error && (
        <div className="mb-4 p-3 bg-red-100 border border-red-300 text-red-700 rounded-lg">
          <strong>Error:</strong> {error}
        </div>
      )}
      
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
          disabled={loading || !chat}
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
