"use client";

import { toast, type ToastT } from "sonner";

type ToastProps = {
  title: string;
  description?: string;
  action?: {
    label: string;
    onClick: () => void;
  };
  variant?: "default" | "destructive" | "success";
};

export function useToast() {
  const showToast = ({
    title,
    description,
    action,
    variant = "default",
  }: ToastProps) => {
    const options: any = {
      description,
      action: action ? { label: action.label, onClick: action.onClick } : undefined,
    };

    switch (variant) {
      case "destructive":
        return toast.error(title, options);
      case "success":
        return toast.success(title, options);
      default:
        return toast(title, options);
    }
  };

  const dismiss = (toastId?: string | number) => {
    toast.dismiss(toastId);
  };

  return { toast: showToast, dismiss };
}
