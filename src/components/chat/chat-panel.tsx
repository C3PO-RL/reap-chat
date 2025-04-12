"use client";

import type { Message, User } from "@/types/index";
import { ChatMessage } from "./chat-message";
import { ChatInput } from "./chat-input";
import { Send, FileText, ClipboardList, Mic, Plus } from "lucide-react";
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
    <div className="fixed bottom-24 right-6 w-[35%] h-[85%] bg-white rounded-lg shadow-xl flex flex-col z-40 border border-gray-200 overflow-hidden">
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-xl font-semibold text-[#101828]">
          Hello {currentUser.name},
        </h2>
        <p className="text-gray-500">I have a question for you</p>

        <div className="flex gap-2 mt-4">
          <Button
            variant="outline"
            className="flex-1 text-xs text-[#475467] hover:text-[#475467] cursor-pointer"
          >
            <ClipboardList className="h-4 w-4 text-[#1C796E]" />

            <span>Give me recap of this case</span>
          </Button>
          <Button
            variant="outline"
            className="flex-1 text-xs text-[#475467] hover:text-[#475467] cursor-pointer"
          >
            <FileText className="h-4 w-4 text-[#1C796E]" />
            <span>Upload new document</span>
          </Button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto hide-scrollbar p-4 space-y-6">
        {messages.map((message) => (
          <ChatMessage
            key={message.id}
            message={message}
            isCurrentUser={message.sender.id === currentUser.id}
          />
        ))}
      </div>

      <div className="p-4 ">
        <div className="flex items-center gap-2 relative">
          <Button
            variant="ghost"
            size="sm"
            className="rounded-full bg-[#F4F4F6] absolute left-2 top-1/2 transform -translate-y-1/2  cursor-pointer"
          >
            <Plus className="h-5 w-5 text-gray-500" />
          </Button>
          <ChatInput placeholder={`Message ${recipient.name}`} />
          <Button
            size="icon"
            className="rounded-full bg-transparent absolute right-14 top-1/2 transform -translate-y-1/2  cursor-pointer"
          >
            <Send className="h-5 w-5 text-green-500" />
          </Button>
          <Button
            size="icon"
            className="rounded-full bg-transparent hover:bg-green-700 cursor-pointer"
          >
            <Mic className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
