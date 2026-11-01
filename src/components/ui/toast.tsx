"use client";

import { Toaster as Sonner } from "sonner";
import { cn } from "@/lib/utils";

export function Toaster() {
  return (
    <Sonner
      theme="system"
      className={cn("group")}
      toastOptions={{
        classNames: {
          toast: "group toast group-[.toast]:bg-background group-[.toast]:border group-[.toast]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      }}
    />
  );
}

export { toast } from "sonner";
