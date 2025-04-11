"use client";

import { FileText, AlertCircle } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Task } from "@/types/index";

interface TaskDetailsProps {
  selectedTask: Task | null;
}

export function TaskDetails({ selectedTask }: TaskDetailsProps) {
  return (
    <div className="h-full overflow-auto bg-[#F5F5F2] rounded-lg mt-4 mb-4 mr-4 ">
      {selectedTask ? (
        <Card className="border-0 shadow-none h-full bg-[#F5F5F2]">
          <CardHeader className="pb-2">
            <div className="flex justify-between items-start">
              <div className="gap-4 flex flex-col">
                <CardTitle className="text-lg text-[#101828]">
                  {selectedTask.title}
                </CardTitle>
                <CardDescription className="text-[#101828]">
                  Notes
                </CardDescription>
              </div>
              <Badge
                variant="outline"
                className={cn(
                  "border",
                  selectedTask.completed
                    ? "bg-green-50 text-green-700 border-green-200"
                    : "bg-amber-50 text-amber-700 border-amber-200"
                )}
              >
                {selectedTask.completed ? "Completed" : "Pending"}
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <>
              <div className="space-y-2 bg-[#FFFFFF] p-4 rounded-lg">
                <div className="flex flex-col items-start gap-2 text-sm text-[#475467]">
                  <FileText className="h-4 w-4" />
                  The resident&apos;s daughter is going to be the POA and will
                  bring in the bank statements next week.
                </div>
              </div>
              <div className="space-y-2 bg-[#FFFFFF] p-4 rounded-lg">
                <div className="flex flex-col items-start gap-2 text-sm text-[#475467]">
                  <FileText className="h-4 w-4" />
                  The resident&apos;s daughter is going to be the POA and will
                  bring in the bank statements next week.
                </div>
              </div>
              <div className="space-y-2 bg-[#FFFFFF] p-4 rounded-lg">
                <div className="flex flex-col items-start gap-2 text-sm text-[#475467]">
                  <FileText className="h-4 w-4" />
                  The resident&apos;s daughter is going to be the POA and will
                  bring in the bank statements next week.
                </div>
              </div>
            </>
          </CardContent>
        </Card>
      ) : (
        <div className="flex flex-col items-center justify-center h-full text-center p-6">
          <AlertCircle className="h-12 w-12 text-gray-300 mb-4" />
          <h3 className="text-lg font-medium text-gray-500">
            No task selected
          </h3>
          <p className="text-sm text-gray-400 max-w-xs mt-2">
            Select a task from the checklist to view its details and
            requirements.
          </p>
        </div>
      )}
    </div>
  );
}

import { cn } from "@/lib/utils";
