"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  Settings,
  BarChart3,
  CreditCard,
  Bell,
  Shield,
  ChevronLeft,
  ChevronRight,
  LogOut,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { useAuth } from "@/lib/hooks/use-auth";

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Analytics", href: "/dashboard/analytics", icon: BarChart3 },
  { name: "Team", href: "/team", icon: Users },
  { name: "Billing", href: "/settings/billing", icon: CreditCard },
  { name: "Notifications", href: "/settings/notifications", icon: Bell },
  { name: "Security", href: "/settings/security", icon: Shield },
];

export function Sidebar() {
  const pathname = usePathname();
  const { user, signOut } = useAuth();
  const [collapsed, setCollapsed] = useState(false);

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");

  return (
    <aside
      className={cn(
        "fixed left-0 top-16 z-30 h-[calc(100vh-4rem)] border-r border-border bg-card transition-all duration-200 flex flex-col",
        collapsed ? "w-16" : "w-64"
      )}
      aria-label="Dashboard navigation"
    >
      <nav className="flex-1 p-4 space-y-1 overflow-y-auto" role="navigation">
        <ul role="list" className="space-y-1">
          {navigation.map((item) => {
            const active = isActive(item.href);
            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                    active
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
                    collapsed && "justify-center"
                  )}
                  aria-current={active ? "page" : undefined}
                  title={collapsed ? item.name : undefined}
                >
                  <item.icon className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
                  {!collapsed && <span>{item.name}</span>}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="mt-8 pt-6 border-t border-border" role="separator" aria-label="User menu">
          <div className={cn("flex items-center gap-3 px-2", collapsed && "justify-center")}>
            <div className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              {user?.image ? (
                <img
                  src={user.image}
                  alt=""
                  className="h-9 w-9 rounded-full"
                  aria-hidden="true"
                />
              ) : (
                <span className="text-primary font-medium text-sm">
                  {user?.name?.charAt(0)?.toUpperCase() || user?.email?.charAt(0)?.toUpperCase()}
                </span>
              )}
            </div>
            {!collapsed && (
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium truncate">{user?.name}</p>
                <p className="text-xs text-muted-foreground truncate">{user?.email}</p>
              </div>
            )}
          </div>

          <Button
            variant="ghost"
            className={cn(
              "mt-3 w-full justify-start gap-2",
              collapsed && "justify-center px-2"
            )}
            onClick={() => signOut({ callbackUrl: "/" })}
          >
            <LogOut className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
            {!collapsed && <span>Sign out</span>}
          </Button>
        </div>
      </nav>

      <Button
        variant="ghost"
        size="icon"
        className="absolute -right-2 top-1/2 -translate-y-1/2 border-r-0 rounded-r-none"
        onClick={() => setCollapsed(!collapsed)}
        aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        aria-expanded={!collapsed}
      >
        {collapsed ? <ChevronRight className="h-5 w-5" /> : <ChevronLeft className="h-5 w-5" />}
      </Button>
    </aside>
  );
}
