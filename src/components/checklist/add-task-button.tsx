import { Plus } from "lucide-react";

export function AddTaskButton() {
  return (
    <button className="w-full border border-dashed border-gray-300 rounded-lg p-4 flex items-center justify-center gap-2 text-sm text-gray-500 hover:bg-gray-50 transition-colors">
      <Plus className="h-4 w-4" />
      <span>Add new checklist item</span>
    </button>
  );
}
