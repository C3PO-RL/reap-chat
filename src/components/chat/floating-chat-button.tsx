"use client";

import { MessageSquare, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface FloatingChatButtonProps {
  isOpen: boolean;
  onClick: () => void;
  unreadCount?: number;
}

export function FloatingChatButton({
  isOpen,
  onClick,
  unreadCount = 0,
}: FloatingChatButtonProps) {
  return (
    <Button
      onClick={onClick}
      className={cn(
        "fixed bottom-6 right-6 rounded-full shadow-lg z-50 h-14 w-14 p-0",
        isOpen
          ? "bg-gray-200 hover:bg-gray-300"
          : "bg-green-600 hover:bg-green-700"
      )}
    >
      {isOpen ? (
        <X className="h-6 w-6 text-gray-700" />
      ) : (
        <>
          <MessageSquare className="h-6 w-6" />
          {unreadCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {unreadCount}
            </span>
          )}
        </>
      )}
      <span className="sr-only">{isOpen ? "Close chat" : "Open chat"}</span>
    </Button>
  );
}
