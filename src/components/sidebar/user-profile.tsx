import { LogOut } from "lucide-react";
import Image from "next/image";

export function UserProfile() {
  return (
    <div className="p-4 border-t border-gray-200">
      <div className="flex items-center gap-3">
        <Image
          src="/images/avatar.png"
          alt="User Avatar"
          width={40}
          height={40}
          className="rounded-full"
        />
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-900 truncate">
            Olivia Rhye
          </p>
          <p className="text-xs text-gray-500 truncate">
            olivia@untitledui.com
          </p>
        </div>
        <button className="text-gray-400 hover:text-gray-500">
          <LogOut className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
