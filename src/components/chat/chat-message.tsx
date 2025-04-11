"use client";
import type { Attachment, Message } from "@/types/index";
import { formatDate } from "@/lib/utils";
import Image from "next/image";
import { Download, File } from "lucide-react";
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
          "flex items-center gap-2 mb-2  w-full max-w-[90%]",
          isCurrentUser && "flex-row-reverse justify-between "
        )}
      >
        <div>
          {!isCurrentUser && (
            <Image
              src={message.sender.avatar || "images/sender-avatar.png"}
              alt={message.sender.name}
              width={32}
              height={32}
              className="rounded-full"
            />
          )}
        </div>
        <div
          className={cn(
            "flex flex-row justify-between items-center w-full",
            isCurrentUser && "text-right flex-row-reverse flex "
          )}
        >
          <p className="text-sm font-medium text-[#344054] text-center">
            {!isCurrentUser ? message.sender.name : "You"}
          </p>
          <p className="text-xs text-gray-500 text-center">
            {formatDate(message.timestamp)}
          </p>
        </div>
      </div>

      <div
        className={cn(
          "max-w-[90%] rounded-lg p-3 border border-gray-200",
          isCurrentUser
            ? "bg-[#FFFFFF] text-[#475467] ml-10 rounded-tr-none"
            : "bg-[#F5F5F2] text-[#475467] mr-10 rounded-tl-none ml-10"
        )}
      >
        <p className="whitespace-pre-line text-[#475467]">{message.content}</p>

        {message.attachments && message.attachments.length > 0 && (
          <div className="mt-2 space-y-2">
            {message.attachments.map((attachment: Attachment) => (
              <div
                key={attachment.id}
                className={cn(
                  "flex items-center gap-2 p-2 rounded-md w-3/4 h-[72px]",
                  "bg-white border border-gray-200"
                )}
              >
                <File />
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
                    "hover:text-gray-700 cursor-pointer",
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
