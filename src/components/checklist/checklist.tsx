"use client";

import { useState, useEffect } from "react";
import type { Task } from "@/types/index";
import { TaskList } from "./task-list";
import { TaskDetails } from "./task-details";
import { Progress } from "@/components/ui/progress";
import { AddTaskButton } from "./add-task-button";

interface ChecklistProps {
  initialTasks: Task[];
}

export function Checklist({ initialTasks }: ChecklistProps) {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [selectedTaskId, setSelectedTaskId] = useState<string | null>(null);

  const completedTasks = tasks.filter(
    (task) => task.completed && !task.parentId
  );
  const unfinishedTasks = tasks.filter(
    (task) => !task.completed && !task.parentId
  );
  const progressPercentage = Math.round(
    (completedTasks.length / (completedTasks.length + unfinishedTasks.length)) *
      100
  );

  const handleTaskSelect = (taskId: string | null) => {
    setSelectedTaskId(taskId);
  };

  // Find the selected task, including subtasks
  const findTaskById = (
    taskId: string | null,
    taskList: Task[]
  ): Task | null => {
    if (!taskId) return null;

    for (const task of taskList) {
      if (task.id === taskId) return task;

      if (task.subtasks) {
        const found = findTaskById(taskId, task.subtasks);
        if (found) return found;
      }
    }

    return null;
  };

  const selectedTask = findTaskById(selectedTaskId, tasks);

  // Update the toggleTaskCompletion function to handle parent-child relationships properly
  const toggleTaskCompletion = (taskId: string) => {
    setTasks((currentTasks) => {
      // Create a deep copy of the tasks array to avoid mutating state directly
      const updatedTasks = JSON.parse(JSON.stringify(currentTasks)) as Task[];

      // Helper function to find and update a task in the tree
      const updateTask = (tasks: Task[], id: string): boolean => {
        for (let i = 0; i < tasks.length; i++) {
          const task = tasks[i] || {};
          if (task.id === id) {
            const newCompletedState = !task.completed;
            task.completed = newCompletedState;

            // If the task has subtasks, update all subtasks to match the parent's state
            if (task.subtasks && task.subtasks.length > 0) {
              task.subtasks.forEach((subtask) => {
                subtask.completed = newCompletedState;
              });
            }

            return true;
          }

          if (task.subtasks && updateTask(task.subtasks, id)) {
            // Check if all subtasks are completed
            const allSubtasksCompleted = task.subtasks.every(
              (subtask) => subtask.completed
            );
            task.completed = allSubtasksCompleted;
            return true;
          }
        }
        return false;
      };

      updateTask(updatedTasks, taskId);
      return updatedTasks;
    });
  };

  // Check if all subtasks of a parent are completed and update parent accordingly
  useEffect(() => {
    setTasks((currentTasks) => {
      const updatedTasks = [...currentTasks];

      // Helper function to check and update parent tasks
      const updateParentTasks = (tasks: Task[]): boolean => {
        let updated = false;

        for (const task of tasks) {
          if (task.subtasks && task.subtasks.length > 0) {
            const allSubtasksCompleted = task.subtasks.every(
              (subtask) => subtask.completed
            );

            if (task.completed !== allSubtasksCompleted) {
              task.completed = allSubtasksCompleted;
              updated = true;
            }

            // Recursively check subtasks
            if (updateParentTasks(task.subtasks)) {
              updated = true;
            }
          }
        }

        return updated;
      };

      if (updateParentTasks(updatedTasks)) {
        return [...updatedTasks];
      }

      return currentTasks;
    });
  }, [tasks]);

  return (
    <div className="flex h-full bg-[#FFFFFF] rounded-[12px]">
      {/* Left side: Checklist */}
      <div className="w-1/2 py-6 overflow-auto">
        <h2 className="mx-6 text-xl font-semibold text-gray-900 mb-1">
          Checklist
        </h2>
        <p className="mx-6 text-sm text-[#475467] mb-4">
          Track your progress through the case setup process
        </p>

        <div className="mb-6 px-6">
          <div className="flex justify-between mb-2">
            <span className="text-lg text-black">{progressPercentage}%</span>
          </div>
          <Progress
            value={progressPercentage}
            className="h-2 bg-gray-100"
            indicatorClassName="bg-green-600"
          />
          <div className="flex justify-between mb-2">
            <span className="text-sm text-black">{tasks.length} tasks</span>
            <span className="text-sm text-gray-500">
              {unfinishedTasks.length} tasks to complete
            </span>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-sm font-medium text-[#464A52] mb-2 mx-6">
              Unfinished tasks
            </h3>
            <TaskList
              tasks={unfinishedTasks}
              onTaskSelect={handleTaskSelect}
              selectedTaskId={selectedTaskId}
              onToggleCompletion={toggleTaskCompletion}
            />
          </div>
          <div className="mx-6">
            <AddTaskButton />
          </div>

          {completedTasks.length > 0 && (
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-2 mx-6">
                Finished tasks
              </h3>
              <TaskList
                tasks={completedTasks}
                onTaskSelect={handleTaskSelect}
                selectedTaskId={selectedTaskId}
                onToggleCompletion={toggleTaskCompletion}
              />
            </div>
          )}
        </div>
      </div>

      {/* Right side: Task Details */}
      <div className="w-1/2 h-[97%] ">
        <TaskDetails selectedTask={selectedTask} />
      </div>
    </div>
  );
}
