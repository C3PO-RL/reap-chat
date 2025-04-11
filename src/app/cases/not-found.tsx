import Link from "next/link";
import { FileX } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CaseNotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
      <div className="space-y-6 max-w-md">
        <FileX className="h-24 w-24 text-red-200 mx-auto" />
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">
          Case Not Found
        </h1>
        <p className="text-gray-500">
          The case you are looking for doesn&apos;t exist or has been moved.
          Please check the case ID or navigate to the cases overview.
        </p>
        <div className="pt-4">
          <Button asChild>
            <Link href="/cases">View All Cases</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
