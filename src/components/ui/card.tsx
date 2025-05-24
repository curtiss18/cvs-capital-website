import { cn } from "@/lib/utils"
import { HTMLAttributes } from "react"

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  padding?: "sm" | "md" | "lg" | "xl"
  hover?: boolean
}

export function Card({ 
  className, 
  padding = "lg",
  hover = true,
  children, 
  ...props 
}: CardProps) {
  const paddings = {
    sm: "p-4",
    md: "p-6", 
    lg: "p-8",
    xl: "p-12"
  }

  return (
    <div
      className={cn(
        "bg-white rounded-lg shadow-lg border border-sage-200 transition-shadow",
        paddings[padding],
        hover && "hover:shadow-xl",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
