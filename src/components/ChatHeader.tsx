import React from "react";

interface ChatHeaderProps {
  className?: string;
}

export const ChatHeader: React.FC<ChatHeaderProps> = ({ className }) => {
  return (
    <div className={`border-b py-4 px-6 ${className || ""}`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-full bg-gradient-to-r from-indigo-500 to-blue-600 flex items-center justify-center">
            <span className="text-white font-semibold text-sm">A</span>
          </div>
          <h1 className="text-xl font-bold logo-text text-center">Atlas AI</h1>
        </div>
      </div>
    </div>
  );
};
