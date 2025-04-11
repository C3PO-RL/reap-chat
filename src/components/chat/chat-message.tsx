"use client";
import type { Attachment, Message } from "@/types/index";
import { formatDate } from "@/lib/utils";
import Image from "next/image";
import { Download } from "lucide-react";
import { cn } from "@/lib/utils";

interface ChatMessageProps {
  message: Message;
  isCurrentUser: boolean;
}

export function ChatMessage({ message, isCurrentUser }: ChatMessageProps) {
  return (
    <div className={cn("flex flex-col", isCurrentUser && "items-end")}>
      <div
        className={cn(
          "flex items-center gap-2 mb-2",
          isCurrentUser && "flex-row-reverse"
        )}
      >
        <Image
          src={message.sender.avatar || "/placeholder.svg?height=32&width=32"}
          alt={message.sender.name}
          width={32}
          height={32}
          className="rounded-full"
        />
        <div className={cn(isCurrentUser && "text-right")}>
          <p className="text-sm font-medium">{message.sender.name}</p>
          <p className="text-xs text-gray-500">
            {formatDate(message.timestamp)}
          </p>
        </div>
      </div>

      <div
        className={cn(
          "max-w-[80%] rounded-lg p-3",
          isCurrentUser
            ? "bg-green-600 text-white ml-10 rounded-tr-none"
            : "bg-gray-100 text-gray-800 mr-10 rounded-tl-none ml-10"
        )}
      >
        <p className="whitespace-pre-line">{message.content}</p>

        {message.attachments && message.attachments.length > 0 && (
          <div className="mt-2 space-y-2">
            {message.attachments.map((attachment: Attachment) => (
              <div
                key={attachment.id}
                className={cn(
                  "flex items-center gap-2 p-2 rounded-md",
                  isCurrentUser
                    ? "bg-green-700 text-white"
                    : "bg-white border border-gray-200"
                )}
              >
                <div
                  className={cn(
                    "flex-shrink-0 w-8 h-8 rounded flex items-center justify-center",
                    isCurrentUser ? "bg-green-800" : "bg-gray-200"
                  )}
                >
                  <span className="text-xs uppercase">{attachment.type}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">
                    {attachment.name}
                  </p>
                  <p
                    className={cn(
                      "text-xs",
                      isCurrentUser ? "text-green-200" : "text-gray-500"
                    )}
                  >
                    {attachment.size}
                  </p>
                </div>
                <button
                  className={cn(
                    "hover:text-gray-700",
                    isCurrentUser ? "text-white" : "text-gray-500"
                  )}
                >
                  <Download className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
