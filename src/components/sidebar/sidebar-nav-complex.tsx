"use client";

import type React from "react";

import { useState } from "react";
import {
  Home,
  LayoutDashboard,
  Folder,
  CheckSquare,
  BarChart2,
  Users,
  HelpCircle,
  Settings,
  ChevronRight,
  FileText,
  User,
  Building,
  CreditCard,
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface NavItem {
  icon: React.ElementType;
  label: string;
  href?: string;
  active?: boolean;
  children?: NavItem[];
}

export function SidebarNavComplex() {
  const navItems: NavItem[] = [
    { icon: Home, label: "Home", href: "/", active: false },
    {
      icon: LayoutDashboard,
      label: "Dashboard",
      href: "/dashboard",
      active: false,
    },
    {
      icon: Folder,
      label: "Cases",
      active: true,
      children: [
        {
          icon: FileText,
          label: "Active Cases",
          href: "/cases/active",
          active: true,
        },
        {
          icon: FileText,
          label: "Archived Cases",
          href: "/cases/archived",
          active: false,
        },
        {
          icon: FileText,
          label: "Pending Review",
          href: "/cases/pending",
          active: false,
        },
      ],
    },
    {
      icon: CheckSquare,
      label: "Tasks",
      href: "/tasks",
      active: false,
      children: [
        { icon: FileText, label: "My Tasks", href: "/tasks/my", active: false },
        {
          icon: FileText,
          label: "Team Tasks",
          href: "/tasks/team",
          active: false,
        },
      ],
    },
    { icon: BarChart2, label: "Reporting", href: "/reporting", active: false },
    {
      icon: Users,
      label: "Users",
      href: "/users",
      active: false,
      children: [
        { icon: User, label: "Staff", href: "/users/staff", active: false },
        {
          icon: Building,
          label: "Departments",
          href: "/users/departments",
          active: false,
        },
        {
          icon: CreditCard,
          label: "Permissions",
          href: "/users/permissions",
          active: false,
        },
      ],
    },
  ];

  const bottomNavItems: NavItem[] = [
    { icon: HelpCircle, label: "Support", href: "/support", active: false },
    { icon: Settings, label: "Settings", href: "/settings", active: false },
  ];

  return (
    <nav className="py-2">
      <ul className="space-y-1">
        {navItems.map((item) => (
          <NavItemComplex key={item.label} item={item} />
        ))}
      </ul>
      <div className="mt-auto pt-4">
        <ul className="space-y-1">
          {bottomNavItems.map((item) => (
            <NavItemComplex key={item.label} item={item} />
          ))}
        </ul>
      </div>
    </nav>
  );
}

interface NavItemComplexProps {
  item: NavItem;
  level?: number;
}

function NavItemComplex({ item, level = 0 }: NavItemComplexProps) {
  const { icon: Icon, label, href, active, children } = item;
  const [expanded, setExpanded] = useState(active || false);
  const hasChildren = children && children.length > 0;

  const handleClick = () => {
    if (hasChildren) {
      setExpanded(!expanded);
    }
  };

  return (
    <li>
      {href && !hasChildren ? (
        <Link
          href={href}
          className={cn(
            "flex items-center gap-3 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md",
            active && "text-black font-semibold",
            level > 0 && "pl-8"
          )}
        >
          <Icon className="h-5 w-5" />
          <span className="flex-1">{label}</span>
          <ChevronRight
            className={cn(
              "h-4 w-4 text-gray-400 opacity-0 group-hover:opacity-100",
              active && "text-black opacity-100"
            )}
          />
        </Link>
      ) : (
        <>
          <button
            onClick={handleClick}
            className={cn(
              "flex items-center w-full gap-3 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md",
              active && "text-black font-semibold",
              level > 0 && "pl-8"
            )}
          >
            <Icon className="h-5 w-5" />
            <span className="flex-1 text-left">{label}</span>
            {hasChildren && (
              <ChevronRight
                className={cn(
                  "h-4 w-4 text-gray-400 transition-transform",
                  expanded && "transform rotate-90"
                )}
              />
            )}
          </button>
          {expanded && hasChildren && (
            <ul className="mt-1">
              {children.map((child) => (
                <NavItemComplex
                  key={child.label}
                  item={child}
                  level={level + 1}
                />
              ))}
            </ul>
          )}
        </>
      )}
    </li>
  );
}
