import { Search } from "lucide-react";
import { UserProfile } from "./user-profile";
import Image from "next/image";
import Link from "next/link";
import { SidebarNav } from "./sidebar-nav";

export function Sidebar() {
  return (
    <aside className="w-[248px] border-r border-gray-200 flex flex-col h-full">
      <div className="p-4  border-gray-200">
        <Link href="/">
          <Image
            src="/images/logo.svg"
            alt="Reap Logo"
            width={150}
            height={40}
            className="mb-4"
          />
        </Link>
        <div className="relative">
          <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-8 pr-4 py-2 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gray-200 text-black placeholder-gray-400"
          />
        </div>
      </div>
      <div className="flex-1 overflow-auto">
        <SidebarNav />
      </div>
      <UserProfile />
    </aside>
  );
}
