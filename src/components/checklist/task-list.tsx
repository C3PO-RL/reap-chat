"use client";
import type { Task } from "@/types/index";
import type React from "react";

import { Checkbox } from "@/components/ui/checkbox";
import { MessageSquare, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

interface TaskListProps {
  tasks: Task[];
  onTaskSelect: (taskId: string | null) => void;
  selectedTaskId: string | null;
  onToggleCompletion: (taskId: string) => void;
}

export function TaskList({
  tasks,
  onTaskSelect,
  selectedTaskId,
  onToggleCompletion,
}: TaskListProps) {
  return (
    <div className="space-y-2">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          isSelected={task.id === selectedTaskId}
          onSelect={() =>
            onTaskSelect(task.id === selectedTaskId ? null : task.id)
          }
          onToggleCompletion={onToggleCompletion}
        />
      ))}
    </div>
  );
}

interface TaskItemProps {
  task: Task;
  isSelected: boolean;
  onSelect: () => void;
  onToggleCompletion: (taskId: string) => void;
}

function TaskItem({
  task,
  isSelected,
  onSelect,
  onToggleCompletion,
}: TaskItemProps) {
  const handleCheckboxChange = (e: React.MouseEvent) => {
    e.stopPropagation();
    onToggleCompletion(task.id);
  };

  return (
    <div
      className={cn(
        isSelected && !task.completed
          ? "p-4 ml-6 cursor-pointer"
          : "border rounded-lg p-4 transition-all ml-6 mr-6 cursor-pointer",
        task.completed
          ? "bg-gray-50 border-gray-200"
          : "bg-white border-gray-200",
        isSelected && !task.completed
          ? "bg-[#F5F5F2] border-l border-t border-b rounded-l-lg rounded-r-[-12px]"
          : ""
      )}
      onClick={onSelect}
    >
      <div className="flex items-start gap-3">
        <div onClick={handleCheckboxChange}>
          <Checkbox
            id={`task-${task.id}`}
            checked={task.completed}
            className={
              task.completed
                ? "data-[state=checked]:bg-green-600 data-[state=checked]:border-green-600"
                : ""
            }
            onCheckedChange={() => {}}
          />
        </div>
        <div className="flex-1 min-w-0 flex flex-row justify-between">
          <label
            htmlFor={`task-${task.id}`}
            className={cn(
              "text-sm font-medium cursor-pointer",
              task.completed ? "text-gray-500 line-through" : "text-gray-900"
            )}
            onClick={(e) => e.stopPropagation()}
          >
            {task.title}
          </label>

          {task.hasComments && (
            <div className="flex items-center gap-1 mt-1 bg-[#D3E5E3] rounded-full px-2 py-1">
              <MessageSquare className="h-4 w-4 text-green-600" />
              <span className="text-xs text-green-600">
                {task.commentCount}
              </span>
            </div>
          )}
        </div>

        {task.dueDate && (
          <div className="flex items-center gap-1 text-xs text-red-500 bg-[#FFEEEE] rounded-full px-2 py-1">
            <Calendar className="h-4 w-4" />
            <span>{task.dueDate}</span>
          </div>
        )}
      </div>

      {task.subtasks && task.subtasks.length > 0 && !task.completed && (
        <div className="ml-8 mt-4 space-y-2">
          {task.subtasks.map((subtask) => (
            <div key={subtask.id} className="flex items-start gap-3">
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  onToggleCompletion(subtask.id);
                }}
              >
                <Checkbox
                  id={`task-${subtask.id}`}
                  checked={subtask.completed}
                  className={
                    subtask.completed
                      ? "data-[state=checked]:bg-green-600 data-[state=checked]:border-green-600"
                      : ""
                  }
                  onCheckedChange={() => {}}
                />
              </div>
              <label
                htmlFor={`task-${subtask.id}`}
                className={cn(
                  "text-sm",
                  subtask.completed
                    ? "text-gray-500 line-through"
                    : "text-gray-900"
                )}
                onClick={(e) => e.stopPropagation()}
              >
                {subtask.title}
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
