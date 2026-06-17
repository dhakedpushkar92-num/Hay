'use client';

import { useEffect, useState } from 'react';
import { FiDownload, FiTrash2 } from 'react-icons/fi';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

interface ChatHistoryProps {
  messages: Message[];
}

export default function ChatHistory({ messages }: ChatHistoryProps) {
  const [isOpen, setIsOpen] = useState(false);

  const exportChat = () => {
    const chatText = messages
      .map(
        (msg) =>
          `[${msg.timestamp.toLocaleTimeString()}] ${msg.sender === 'user' ? 'You' : 'AI'}: ${msg.text}`
      )
      .join('\n\n');

    const element = document.createElement('a');
    element.setAttribute(
      'href',
      'data:text/plain;charset=utf-8,' + encodeURIComponent(chatText)
    );
    element.setAttribute('download', `chat-${Date.now()}.txt`);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="flex gap-2">
      <button
        onClick={exportChat}
        disabled={messages.length === 0}
        className="btn-secondary disabled:opacity-50 flex items-center gap-2"
        title="Download chat"
      >
        <FiDownload className="w-4 h-4" />
        <span className="hidden md:inline">Export</span>
      </button>
    </div>
  );
}
