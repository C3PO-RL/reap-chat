import type { ReactNode } from "react";
import { checkResourceExists } from "@/lib/not-found";
import type { Case } from "@/types/index";

// Mock data - in a real app, this would come from a database
const cases: Record<string, Case> = {
  "1": {
    id: "1",
    caseId: "123456-45",
    patientName: "John Doe",
    avatar: "/placeholder.svg?height=64&width=64",
  },
  "2": {
    id: "2",
    caseId: "789012-34",
    patientName: "Jane Smith",
    avatar: "/placeholder.svg?height=64&width=64",
  },
};

interface CaseLayoutProps {
  children: ReactNode;
  params: Promise<{ id: string }>;
}

export default async function CaseLayout({
  children,
  params,
}: CaseLayoutProps) {
  const { id } = await params;

  // Check if the case exists, if not trigger a 404
  checkResourceExists(!!cases[id], `Case with ID ${id} not found`);

  return <>{children}</>;
}
