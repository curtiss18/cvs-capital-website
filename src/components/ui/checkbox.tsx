import { cn } from "@/lib/utils"
import { InputHTMLAttributes, forwardRef, useId } from "react"

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string
  error?: string
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, error, id, ...props }, ref) => {
    const generatedId = useId()
    const checkboxId = id || generatedId
    
    return (
      <div className="flex items-start space-x-3">
        <input
          type="checkbox"
          id={checkboxId}
          className={cn(
            "h-4 w-4 mt-0.5 rounded border-sage-300 text-sage-600",
            "focus:ring-2 focus:ring-sage-400 focus:ring-offset-2",
            "disabled:cursor-not-allowed disabled:opacity-50",
            error && "border-red-500 focus:ring-red-400",
            className
          )}
          ref={ref}
          {...props}
        />
        {label && (
          <label 
            htmlFor={checkboxId}
            className="text-sm text-neutral-700 select-none cursor-pointer"
          >
            {label}
          </label>
        )}
      </div>
    )
  }
)

Checkbox.displayName = "Checkbox"

export { Checkbox }
