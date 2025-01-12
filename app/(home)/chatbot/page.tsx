import ChatArea from "@/components/ChatArea";
import { FaRobot } from "react-icons/fa6";


export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center bg-gray-100 p-4">
            <div className="w-full max-w-4xl">
                <div className="text-4xl md:text-4xl font-semibold text-gray-800 text-center mb-2 font-Canopee flex items-center justify-center space-x-2">
                    <FaRobot className="text-blue-800" size={35} />
                    <span>Chatbot</span>
                </div>

                <ChatArea />
            </div>
        </div>
    );
}