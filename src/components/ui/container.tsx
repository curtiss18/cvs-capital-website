import { cn } from "@/lib/utils"
import { HTMLAttributes } from "react"

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg" | "xl"
}

export function Container({ className, size = "lg", children, ...props }: ContainerProps) {
  const sizes = {
    sm: "max-w-4xl",
    md: "max-w-5xl", 
    lg: "max-w-7xl",
    xl: "max-w-8xl"
  }

  return (
    <div
      className={cn(
        "mx-auto px-4 sm:px-6 lg:px-8",
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
