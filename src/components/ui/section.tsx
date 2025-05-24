import { cn } from "@/lib/utils"
import { HTMLAttributes } from "react"

interface SectionProps extends HTMLAttributes<HTMLElement> {
  variant?: "default" | "sage" | "cream"
  padding?: "sm" | "md" | "lg" | "xl"
}

export function Section({ 
  className, 
  variant = "default", 
  padding = "lg",
  children, 
  ...props 
}: SectionProps) {
  const variants = {
    default: "bg-white",
    sage: "bg-sage-600 text-white",
    cream: "bg-cream-100"
  }

  const paddings = {
    sm: "py-8",
    md: "py-12",
    lg: "py-16 lg:py-24",
    xl: "py-24 lg:py-32"
  }

  return (
    <section
      className={cn(
        variants[variant],
        paddings[padding],
        className
      )}
      {...props}
    >
      {children}
    </section>
  )
}
