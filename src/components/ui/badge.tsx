"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-colors",
  {
    variants: {
      variant: {
        default:
          "bg-material-primary/10 text-material-primary dark:bg-material-primary/20",
        secondary:
          "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200",
        outline:
          "border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300",
        nothing:
          "bg-nothing-black text-nothing-white dark:bg-nothing-white dark:text-nothing-black font-mono uppercase tracking-wider",
        success: "bg-success/10 text-success dark:bg-success/20",
        warning: "bg-warning/10 text-warning dark:bg-warning/20",
        error: "bg-error/10 text-error dark:bg-error/20",
        info: "bg-info/10 text-info dark:bg-info/20",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
