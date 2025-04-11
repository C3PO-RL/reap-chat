import type React from "react";
import {
  Home,
  Users,
  Settings,
  ChevronRight,
  ChartColumnIncreasing,
  Layers,
  CopyCheckIcon,
  ChartPie,
  LifeBuoy,
} from "lucide-react";
import Link from "next/link";
import { cn } from "../../lib/utils";

interface NavItem {
  icon: React.ElementType;
  label: string;
  href: string;
  active?: boolean;
}

export function SidebarNav() {
  const navItems: NavItem[] = [
    { icon: Home, label: "Home", href: "/", active: false },
    {
      icon: ChartColumnIncreasing,
      label: "Dashboard",
      href: "/dashboard",
      active: false,
    },
    { icon: Layers, label: "Cases", href: "/cases", active: true },
    { icon: CopyCheckIcon, label: "Tasks", href: "/tasks", active: false },
    { icon: ChartPie, label: "Reporting", href: "/reporting", active: false },
    { icon: Users, label: "Users", href: "/users", active: false },
  ];

  const bottomNavItems: NavItem[] = [
    { icon: LifeBuoy, label: "Support", href: "/support", active: false },
    { icon: Settings, label: "Settings", href: "/settings", active: false },
  ];

  return (
    <nav className="py-2 flex flex-col h-full">
      <ul className="space-y-1">
        {navItems.map((item) => (
          <NavItem key={item.label} {...item} />
        ))}
      </ul>
      <div className="mt-auto pt-4">
        <ul className="space-y-1">
          {bottomNavItems.map((item) => (
            <NavItem key={item.label} {...item} />
          ))}
        </ul>
      </div>
    </nav>
  );
}

function NavItem({ icon: Icon, label, href, active }: NavItem) {
  return (
    <li>
      <Link
        href={href}
        className={cn(
          "flex items-center gap-3 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md",
          active && "text-black font-semibold"
        )}
      >
        <Icon className="h-5 w-5" />
        <span className="flex-1">{label}</span>
        <ChevronRight
          className={cn("h-4 w-4 text-gray-400", active && "text-black")}
        />
      </Link>
    </li>
  );
}
