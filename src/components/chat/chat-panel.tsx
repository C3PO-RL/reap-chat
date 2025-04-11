"use client";

import type { Message, User } from "@/types/index";
import { ChatMessage } from "./chat-message";
import { ChatInput } from "./chat-input";
import { Send, Paperclip } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ChatPanelProps {
  messages: Message[];
  currentUser: User;
  recipient: User;
  isOpen: boolean;
}

export function ChatPanel({
  messages,
  currentUser,
  recipient,
  isOpen,
}: ChatPanelProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed bottom-24 right-6 w-[400px] h-[600px] bg-white rounded-lg shadow-xl flex flex-col z-40 border border-gray-200 overflow-hidden">
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-xl font-semibold text-gray-900">
          Hello {currentUser.name},
        </h2>
        <p className="text-gray-500">I have a question for you</p>

        <div className="flex gap-2 mt-4">
          <Button variant="outline" className="flex-1 text-xs">
            <span>Give me recap of this case</span>
          </Button>
          <Button variant="outline" className="flex-1 text-xs">
            <span>Upload new document</span>
          </Button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-6">
        {messages.map((message) => (
          <ChatMessage
            key={message.id}
            message={message}
            isCurrentUser={message.sender.id === currentUser.id}
          />
        ))}
      </div>

      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="rounded-full">
            <Paperclip className="h-5 w-5 text-gray-500" />
          </Button>
          <ChatInput placeholder={`Message ${recipient.name}`} />
          <Button
            size="icon"
            className="rounded-full bg-green-600 hover:bg-green-700"
          >
            <Send className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
