"use client";
interface ChatInputProps {
  placeholder: string;
}

export function ChatInput({ placeholder }: ChatInputProps) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="flex-1 rounded-lg p-3 border border-[#E5E7EB] bg-transparent focus:outline-none focus:ring-0 text-sm placeholder:text-[#475467] px-14 text-black"
    />
  );
}
