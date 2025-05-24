import { cn } from "@/lib/utils"
import { TextareaHTMLAttributes, forwardRef, useId } from "react"

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
  helperText?: string
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, helperText, id, ...props }, ref) => {
    const generatedId = useId()
    const textareaId = id || generatedId
    
    return (
      <div className="space-y-2">
        {label && (
          <label 
            htmlFor={textareaId}
            className="block text-sm font-medium text-neutral-700"
          >
            {label}
            {props.required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}
        <textarea
          id={textareaId}
          className={cn(
            "flex min-h-[120px] w-full rounded-md border border-sage-200 bg-white px-3 py-2 text-sm",
            "placeholder:text-neutral-400",
            "focus:outline-none focus:ring-2 focus:ring-sage-400 focus:border-transparent",
            "disabled:cursor-not-allowed disabled:opacity-50 resize-vertical",
            error && "border-red-500 focus:ring-red-400",
            className
          )}
          ref={ref}
          {...props}
        />
        {error && (
          <p className="text-sm text-red-600" role="alert">
            {error}
          </p>
        )}
        {helperText && !error && (
          <p className="text-sm text-neutral-500">
            {helperText}
          </p>
        )}
      </div>
    )
  }
)

Textarea.displayName = "Textarea"

export { Textarea }
