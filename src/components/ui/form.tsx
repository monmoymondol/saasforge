import * as React from "react";
import * as Slot from "@radix-ui/react-slot";
import { Controller, ControllerProps, FieldPath, FieldValues, UseFormProps } from "react-hook-form";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";

const Form = React.forwardRef<
  HTMLFormElement,
  UseFormProps<FieldValues> & React.FormHTMLAttributes<HTMLFormElement>
>(({ ...props }, ref) => (
  <form {...props} ref={ref} className={cn("space-y-8", props.className)} />
));
Form.displayName = "Form";

interface FormFieldContextValue<T extends FieldValues> {
  name: FieldPath<T>;
}

const FormFieldContext = React.createContext<FormFieldContextValue<any>>({} as FormFieldContextValue<any>);

const FormField = <T extends FieldValues>({
  ...props
}: ControllerProps<T>) => (
  <Controller {...props} />
);

const FormItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("space-y-2", className)} {...props} />
));
FormItem.displayName = "FormItem";

const FormLabel = React.forwardRef<
  HTMLLabelElement,
  React.LabelHTMLAttributes<HTMLLabelElement>
>(({ className, ...props }, ref) => (
  <Label
    ref={ref}
    className={cn("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70", className)}
    {...props}
  />
));
FormLabel.displayName = "FormLabel";

const FormControl = React.forwardRef<
  React.ElementType,
  React.ComponentPropsWithoutRef<"div"> & { asChild?: boolean }
>(({ className, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "div";
  return (
    <Comp ref={ref} className={cn("", className)} {...props} />
  );
});
FormControl.displayName = "FormControl";

const FormDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
FormDescription.displayName = "FormDescription";

const FormMessage = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-destructive", className)}
    {...props}
  >
    {children}
  </p>
));
FormMessage.displayName = "FormMessage";

export {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormFieldContext,
};
