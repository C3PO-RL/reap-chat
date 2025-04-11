"use client";
interface ChatInputProps {
  placeholder: string;
}

export function ChatInput({ placeholder }: ChatInputProps) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="flex-1 border-0 bg-transparent focus:outline-none focus:ring-0 text-sm"
    />
  );
}
