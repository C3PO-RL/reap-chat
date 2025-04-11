export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export interface Case {
  id: string;
  caseId: string;
  patientName: string;
  avatar?: string;
}

export interface Task {
  id: string;
  title: string;
  completed: boolean;
  dueDate?: string;
  hasComments?: boolean;
  commentCount?: number;
  parentId?: string;
  subtasks?: Task[];
}

export interface Message {
  id: string;
  sender: User;
  content: string;
  timestamp: string;
  attachments?: Attachment[];
}

export interface Attachment {
  id: string;
  name: string;
  type: string;
  size: string;
  url: string;
}

export type TabType =
  | "Checklist"
  | "Resident Information"
  | "Contacts"
  | "Admission Information"
  | "Financial Information"
  | "Documents";
