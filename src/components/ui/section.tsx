import { cn } from "@/lib/utils"
import { HTMLAttributes } from "react"

interface SectionProps extends HTMLAttributes<HTMLElement> {
  variant?: "default" | "sage" | "cream"
  padding?: "sm" | "md" | "lg" | "xl"
  wave?: "top" | "bottom" | "both" | "none"
}

export function Section({ 
  className, 
  variant = "default", 
  padding = "lg",
  wave = "none",
  children, 
  ...props 
}: SectionProps) {
  const variants = {
    default: "bg-white",
    sage: "bg-sage-400 text-white",
    cream: "bg-cream-100"
  }

  const paddings = {
    sm: "py-8",
    md: "py-12",
    lg: "py-16 lg:py-24",
    xl: "py-24 lg:py-32"
  }

  const waveColor = variant === "sage" ? "%238FA68E" : variant === "cream" ? "%23f8f6f3" : "%23ffffff"

  return (
    <section
      className={cn(
        "relative",
        variants[variant],
        paddings[padding],
        className
      )}
      {...props}
    >
      {(wave === "top" || wave === "both") && (
        <div 
          className="absolute -top-12 left-0 w-full h-24 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 100'><path fill='${waveColor}' d='M0,0 C300,80 900,80 1200,0 L1200,100 L0,100 Z'/></svg>")`,
            backgroundSize: "cover"
          }}
        />
      )}
      
      {children}

      {(wave === "bottom" || wave === "both") && (
        <div 
          className="absolute -bottom-12 left-0 w-full h-24 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 100'><path fill='${waveColor}' d='M0,100 C300,20 900,20 1200,100 L1200,0 L0,0 Z'/></svg>")`,
            backgroundSize: "cover"
          }}
        />
      )}
    </section>
  )
}
