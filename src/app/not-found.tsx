import Link from "next/link";
import { FileQuestion } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
      <div className="space-y-6 max-w-md">
        <FileQuestion className="h-24 w-24 text-gray-300 mx-auto" />
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">404</h1>
        <h2 className="text-xl font-semibold text-gray-700">Page Not Found</h2>
        <p className="text-gray-500">
          The page you are looking for doesn&apos;t exist or has been moved.
          Please check the URL or navigate back to the homepage.
        </p>
        <div className="pt-4">
          <Button asChild>
            <Link href="/">Return to Home</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
