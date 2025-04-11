"use client";

import { cn } from "@/lib/utils";
import type { TabType } from "@/types/index";
import Link from "next/link";

interface CaseTabsProps {
  caseId: string;
  activeTab: TabType;
}

export function CaseTabs({ caseId, activeTab }: CaseTabsProps) {
  const tabs: TabType[] = [
    "Checklist",
    "Resident Information",
    "Contacts",
    "Admission Information",
    "Financial Information",
    "Documents",
  ];

  return (
    <div className="border-b border-gray-200">
      <nav className="flex space-x-8 px-4">
        {tabs.map((tab) => {
          const href = `/cases/${caseId}/${tab
            .toLowerCase()
            .replace(/\s+/g, "-")}`;
          const isActive = activeTab === tab;

          return (
            <Link
              key={tab}
              href={href}
              className={cn(
                "py-4 px-1 border-b-2 text-sm font-medium",
                isActive
                  ? "border-green-600 text-green-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              )}
            >
              {tab}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
