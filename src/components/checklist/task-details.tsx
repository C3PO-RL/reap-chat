"use client";

import {
  CalendarClock,
  FileText,
  User,
  Users,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import type { Task } from "@/types/index";

interface TaskDetailsProps {
  selectedTask: Task | null;
  onToggleCompletion: (taskId: string) => void;
}

export function TaskDetails({
  selectedTask,
  onToggleCompletion,
}: TaskDetailsProps) {
  return (
    <div className="h-full overflow-auto border-l border-gray-200">
      {selectedTask ? (
        <Card className="border-0 shadow-none h-full">
          <CardHeader className="pb-2">
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-lg">{selectedTask.title}</CardTitle>
                <CardDescription>Task details and requirements</CardDescription>
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
            {selectedTask.id === "resident-sign" ? (
              // Content specific to "resident needs to sign release" task
              <>
                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-gray-700">
                    Description
                  </h3>
                  <p className="text-sm text-gray-600">
                    The resident and their spouse need to sign all release forms
                    before we can proceed with the admission process. These
                    documents are required for legal and insurance purposes.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-gray-700">
                    Required Signatures
                  </h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <User className="h-4 w-4 text-gray-500" />
                      <span>John Doe (Resident)</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <User className="h-4 w-4 text-gray-500" />
                      <span>Jane Doe (Spouse)</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-gray-700">
                    Documents
                  </h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <FileText className="h-4 w-4 text-gray-500" />
                      <span>HIPAA Authorization Form</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <FileText className="h-4 w-4 text-gray-500" />
                      <span>Financial Responsibility Agreement</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <FileText className="h-4 w-4 text-gray-500" />
                      <span>Medical Records Release</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-gray-700">
                    Timeline
                  </h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <CalendarClock className="h-4 w-4 text-gray-500" />
                      <span>Due by: April 23, 2025</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Users className="h-4 w-4 text-gray-500" />
                      <span>Assigned to: Josh Thompson</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-gray-700">Notes</h3>
                  <p className="text-sm text-gray-600">
                    Resident has signed all forms during the initial meeting.
                    Still waiting for spouse to come in and sign the forms.
                    Expected to complete by next week.
                  </p>
                </div>
              </>
            ) : selectedTask.id === "medicaid-number" ? (
              // Content specific to "Check Medicaid number" task
              <>
                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-gray-700">
                    Description
                  </h3>
                  <p className="text-sm text-gray-600">
                    Verify the resident&#39;s Medicaid number in the system and
                    ensure it matches with the documentation provided. This is
                    critical for billing and insurance purposes.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-gray-700">
                    Medicaid Information
                  </h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <FileText className="h-4 w-4 text-gray-500" />
                      <span>Medicaid ID: XXXX-XXX-XXXXX</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CalendarClock className="h-4 w-4 text-gray-500" />
                      <span>Effective Date: 01/15/2025</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-gray-700">
                    Verification Steps
                  </h3>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2 text-sm">
                      <div className="mt-1 flex-shrink-0">1.</div>
                      <span>
                        Check the Medicaid card provided by the resident
                      </span>
                    </div>
                    <div className="flex items-start gap-2 text-sm">
                      <div className="mt-1 flex-shrink-0">2.</div>
                      <span>
                        Verify the number in the state Medicaid portal
                      </span>
                    </div>
                    <div className="flex items-start gap-2 text-sm">
                      <div className="mt-1 flex-shrink-0">3.</div>
                      <span>
                        Confirm eligibility status and coverage details
                      </span>
                    </div>
                    <div className="flex items-start gap-2 text-sm">
                      <div className="mt-1 flex-shrink-0">4.</div>
                      <span>
                        Document verification in the resident&#39;s file
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-gray-700">
                    Timeline
                  </h3>
                  <div className="flex items-center gap-2 text-sm">
                    <CalendarClock className="h-4 w-4 text-red-500" />
                    <span className="text-red-500">Due by: April 23, 2025</span>
                  </div>
                </div>
              </>
            ) : selectedTask.id === "upload-bank-statement" ? (
              // Content specific to "Upload bank statement" task
              <>
                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-gray-700">
                    Description
                  </h3>
                  <p className="text-sm text-gray-600">
                    Upload the resident&#39;s bank statements for the last three
                    months. These documents are required for financial
                    assessment and determining eligibility for assistance
                    programs.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-gray-700">
                    Required Documents
                  </h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <FileText className="h-4 w-4 text-gray-500" />
                      <span>Bank statements (last 3 months)</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <FileText className="h-4 w-4 text-gray-500" />
                      <span>Passport or other identification</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <FileText className="h-4 w-4 text-gray-500" />
                      <span>Signed financial disclosure form</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-gray-700">
                    Subtasks
                  </h3>
                  <div className="space-y-2">
                    {selectedTask.subtasks?.map((subtask) => (
                      <div
                        key={subtask.id}
                        className="flex items-center gap-2 text-sm"
                      >
                        <div
                          className="flex items-center"
                          onClick={(e) => {
                            e.stopPropagation();
                            onToggleCompletion(subtask.id);
                          }}
                        >
                          <Checkbox
                            id={`detail-${subtask.id}`}
                            checked={subtask.completed}
                            className={cn(
                              subtask.completed
                                ? "data-[state=checked]:bg-green-600 data-[state=checked]:border-green-600"
                                : ""
                            )}
                            onCheckedChange={() => {}}
                          />
                        </div>
                        <label
                          htmlFor={`detail-${subtask.id}`}
                          className={cn(
                            "text-sm",
                            subtask.completed
                              ? "text-gray-500 line-through"
                              : "text-gray-900"
                          )}
                          onClick={(e) => {
                            e.stopPropagation();
                            onToggleCompletion(subtask.id);
                          }}
                        >
                          {subtask.title}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-gray-700">
                    Timeline
                  </h3>
                  <div className="flex items-center gap-2 text-sm">
                    <CalendarClock className="h-4 w-4 text-red-500" />
                    <span className="text-red-500">Due by: April 23, 2025</span>
                  </div>
                </div>
              </>
            ) : (
              // Generic content for other tasks
              <div className="flex flex-col items-center justify-center h-64 text-center">
                <AlertCircle className="h-12 w-12 text-gray-300 mb-4" />
                <h3 className="text-lg font-medium text-gray-500">
                  Task details
                </h3>
                <p className="text-sm text-gray-400 max-w-xs mt-2">
                  View information and requirements for this task.
                </p>
              </div>
            )}
          </CardContent>
          <CardFooter className="flex justify-between border-t pt-4 mt-auto">
            <Button
              variant="outline"
              onClick={() =>
                selectedTask && onToggleCompletion(selectedTask.id)
              }
            >
              {selectedTask.completed
                ? "Mark as Incomplete"
                : "Mark as Complete"}
            </Button>
            <Button className="bg-green-600 hover:bg-green-700">
              Contact Ruby
            </Button>
          </CardFooter>
        </Card>
      ) : (
        // No task selected state
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

// Import cn
import { cn } from "@/lib/utils";
