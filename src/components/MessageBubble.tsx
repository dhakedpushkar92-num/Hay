'use client';

import { BiSparkles } from 'react-icons/bi';

interface MessageBubbleProps {
  message: {
    id: string;
    text: string;
    sender: 'user' | 'ai';
    timestamp: Date;
  };
}

export default function MessageBubble({ message }: MessageBubbleProps) {
  const isUser = message.sender === 'user';

  return (
    <div
      className={`flex gap-3 animate-slide-up ${
        isUser ? 'flex-row-reverse' : 'flex-row'
      }`}
    >
      {/* Avatar */}
      <div
        className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
          isUser
            ? 'bg-primary-600'
            : 'bg-gradient-to-br from-primary-500 to-primary-600'
        }`}
      >
        {isUser ? (
          <span className="text-white text-sm font-bold">U</span>
        ) : (
          <BiSparkles className="w-4 h-4 text-white" />
        )}
      </div>

      {/* Message Bubble */}
      <div
        className={`max-w-md px-4 py-3 rounded-lg border ${
          isUser
            ? 'bg-primary-600 border-primary-500 text-white ml-auto'
            : 'bg-dark-card border-dark-border text-gray-100'
        }}`}
      >
        <p className="text-sm leading-relaxed">{message.text}</p>
        <span className="text-xs opacity-70 mt-1 block">
          {message.timestamp.toLocaleTimeString('en-IN', {
            hour: '2-digit',
            minute: '2-digit',
          })}
        </span>
      </div>
    </div>
  );
}
