"use client";

import type React from "react";

import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarNavGroupProps {
  title: string;
  children: React.ReactNode;
  defaultExpanded?: boolean;
}

export function SidebarNavGroup({
  title,
  children,
  defaultExpanded = true,
}: SidebarNavGroupProps) {
  const [expanded, setExpanded] = useState(defaultExpanded);

  return (
    <div className="mb-2">
      <button
        onClick={() => setExpanded(!expanded)}
        className="flex items-center w-full px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md"
      >
        <span className="flex-1 text-left">{title}</span>
        <ChevronRight
          className={cn(
            "h-4 w-4 text-gray-400 transition-transform",
            expanded && "transform rotate-90"
          )}
        />
      </button>
      {expanded && <div className="mt-1 ml-4">{children}</div>}
    </div>
  );
}
