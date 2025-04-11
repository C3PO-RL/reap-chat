"use client";

import { useState } from "react";
import { FloatingChatButton } from "./floating-chat-button";
import { ChatPanel } from "./chat-panel";
import type { Message, User } from "@/types/index";

interface FloatingChatProps {
  messages: Message[];
  currentUser: User;
  recipient: User;
  unreadCount?: number;
}

export function FloatingChat({
  messages,
  currentUser,
  recipient,
  unreadCount = 2,
}: FloatingChatProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [hasUnread, setHasUnread] = useState(unreadCount > 0);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen && hasUnread) {
      setHasUnread(false);
    }
  };

  return (
    <>
      <FloatingChatButton
        isOpen={isOpen}
        onClick={toggleChat}
        unreadCount={hasUnread ? unreadCount : 0}
      />
      <ChatPanel
        messages={messages}
        currentUser={currentUser}
        recipient={recipient}
        isOpen={isOpen}
      />
    </>
  );
}
