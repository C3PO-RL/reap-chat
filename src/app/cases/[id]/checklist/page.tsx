'use client';
import { CaseHeader } from "@/components/case/case-header";
import { CaseTabs } from "@/components/case/case-tabs";
import { Checklist } from "@/components/checklist/checklist";
import { FloatingChat } from "@/components/chat/floating-chat";
import type { Case, Message, Task, User } from "@/types/index";

// Mock data
const caseData: Case = {
  id: "1",
  caseId: "123456-45",
  patientName: "John Doe",
  avatar: "/images/avatar.png",
};

// Updated tasks with parent-child relationships
const initialTasks: Task[] = [
  {
    id: "medicaid-number",
    title: "Check Medicaid number",
    completed: false,
    dueDate: "23.04",
  },
  {
    id: "resident-sign",
    title: "The resident needs to sign release",
    completed: false,
    hasComments: true,
    commentCount: 1,
  },
  {
    id: "upload-bank-statement",
    title: "Upload bank statement",
    completed: false,
    dueDate: "23.04",
    subtasks: [
      {
        id: "passport-document",
        title: "Passport document is needed",
        completed: false,
        parentId: "upload-bank-statement",
      },
      {
        id: "sign-statement",
        title: "Sign statement",
        completed: true,
        parentId: "upload-bank-statement",
      },
    ],
  },
  {
    id: "medicaid-number-completed",
    title: "Check Medicaid number",
    completed: true,
  },
  {
    id: "follow-up-dof",
    title: "Follow up with DOF",
    completed: true,
  },
  {
    id: "id-documents",
    title: "ID Documents",
    completed: true,
  },
];

const currentUser: User = {
  id: "1",
  name: "Olivia",
  email: "olivia@untitledui.com",
  avatar: "/placeholder.svg?height=32&width=32",
};

const ruby: User = {
  id: "2",
  name: "Ruby",
  email: "ruby@example.com",
  avatar: "/placeholder.svg?height=32&width=32",
};

const messages: Message[] = [
  {
    id: "1",
    sender: ruby,
    content:
      "Hey Josh, we need the resident to sign all releases. Since resident is married their spouse will also need to sign.",
    timestamp: "2025-01-16T11:30:00",
  },
  {
    id: "2",
    sender: ruby,
    content: "You can download them here:",
    timestamp: "2025-01-16T11:32:00",
    attachments: [
      {
        id: "1",
        name: "downloadableRelease.pdf",
        type: "pdf",
        size: "200 KB",
        url: "#",
      },
    ],
  },
  {
    id: "3",
    sender: ruby,
    content: "Please provide any updates here:",
    timestamp: "2025-01-16T11:33:00",
  },
  {
    id: "4",
    sender: currentUser,
    content: "Resident signed. Waiting for wife to come in next week.",
    timestamp: "2025-01-16T10:45:00",
  },
  {
    id: "5",
    sender: ruby,
    content:
      "Hey we still need resident's wife to sign the releases. Can you please follow up with her?",
    timestamp: "2025-01-17T11:30:00",
  },
  {
    id: "6",
    sender: ruby,
    content: "Please provide any updates here.",
    timestamp: "2025-01-17T11:32:00",
  },
];

export default function CaseChecklistPage() {
  return (
    <div className="flex flex-col h-screen">
      <CaseHeader caseData={caseData} />
      <CaseTabs caseId={caseData.id} activeTab="Checklist" />
      <div className="flex-1 overflow-hidden">
        <Checklist initialTasks={initialTasks} />
      </div>

      <FloatingChat
        messages={messages}
        currentUser={currentUser}
        recipient={ruby}
      />
    </div>
  );
}
