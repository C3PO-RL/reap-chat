import { ChevronRight, Home } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Case } from "@/types/index";

interface CaseHeaderProps {
  caseData: Case;
}

export function CaseHeader({ caseData }: CaseHeaderProps) {
  return (
    <div className="border-b border-gray-200">
      <div className="flex items-center gap-2 px-4 py-2 text-sm text-gray-500">
        <Link href="/" className="hover:text-gray-700">
          <Home className="h-4 w-4" />
        </Link>
        <ChevronRight className="h-4 w-4" />
        <Link href="/cases" className="hover:text-gray-700">
          Cases
        </Link>
        <ChevronRight className="h-4 w-4" />
        <span className="text-gray-900">{caseData.patientName}</span>
      </div>

      <div className="px-4 py-4 flex items-center gap-4">
        <Image
          src={caseData.avatar || "/images/avatar.png"}
          alt={caseData.patientName}
          width={64}
          height={64}
          className="rounded-full"
        />
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">
            {caseData.patientName}
          </h1>
          <p className="text-sm text-gray-500">Case ID: {caseData.caseId}</p>
        </div>
      </div>
    </div>
  );
}
