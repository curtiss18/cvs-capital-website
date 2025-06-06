"use client"

import { useState } from "react"
import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import emailjs from "emailjs-com"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectOption } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { CheckCircle, AlertCircle, Send } from "lucide-react"

// Form validation schema
const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  investmentGoals: z.array(z.string()).max(3, "Please select up to 3 investment goals").optional(),
  portfolioSize: z.string().optional(),
  hearAbout: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters")
})

type ContactFormData = z.infer<typeof contactFormSchema>

// Investment goals options
const investmentGoalsOptions = [
  { value: "estate-planning", label: "Estate Planning" },
  { value: "retirement-planning", label: "Retirement Planning" },
  { value: "401k-rollover", label: "401K Rollover" },
  { value: "roth-ira-conversion", label: "Roth IRA Conversion" },
  { value: "education-funding", label: "Education Funding" },
  { value: "tax-optimization", label: "Tax Optimization" },
  { value: "income-generation", label: "Income Generation" },
  { value: "alternative-investments", label: "Alternative Investments" }
]

// Portfolio size options
const portfolioSizeOptions: SelectOption[] = [
  { value: "under-100k", label: "Under $100,000" },
  { value: "100k-500k", label: "$100,000 - $500,000" },
  { value: "500k-1m", label: "$500,000 - $1,000,000" },
  { value: "1m-5m", label: "$1,000,000 - $5,000,000" },
  { value: "over-5m", label: "Over $5,000,000" },
  { value: "prefer-not-to-say", label: "Prefer not to say" }
]

// How did you hear about us options
const hearAboutOptions: SelectOption[] = [
  { value: "google", label: "Google Search" },
  { value: "referral-friend", label: "Referral from Friend/Family" },
  { value: "referral-client", label: "Current Client Referral" },
  { value: "social-media", label: "Social Media" },
  { value: "other", label: "Other" }
]

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [submitMessage, setSubmitMessage] = useState('')

  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
    reset
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      investmentGoals: []
    }
  })

  const selectedGoals = watch("investmentGoals") || []

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')
    
    try {
      // EmailJS configuration
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'your_service_id'
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'your_template_id'
      const autoResponseTemplateId = process.env.NEXT_PUBLIC_EMAILJS_AUTO_RESPONSE_TEMPLATE_ID || 'your_auto_response_template_id'
      const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID || 'your_user_id'

      // Format investment goals for email
      const investmentGoalsFormatted = data.investmentGoals && data.investmentGoals.length > 0
        ? data.investmentGoals.map(goal => {
            const option = investmentGoalsOptions.find(opt => opt.value === goal)
            return option?.label || goal
          }).join(', ')
        : 'Not specified'

      // Format portfolio size for email
      const portfolioSizeFormatted = data.portfolioSize 
        ? portfolioSizeOptions.find(opt => opt.value === data.portfolioSize)?.label || data.portfolioSize
        : 'Not specified'

      // Format how they heard about us for email
      const hearAboutFormatted = data.hearAbout
        ? hearAboutOptions.find(opt => opt.value === data.hearAbout)?.label || data.hearAbout
        : 'Not specified'

      // Prepare email data
      const emailData = {
        // to_email is configured in EmailJS template, not sent from here
        from_name: data.name,
        from_email: data.email,
        phone: data.phone,
        investment_goals: investmentGoalsFormatted,
        portfolio_size: portfolioSizeFormatted,
        hear_about: hearAboutFormatted,
        message: data.message,
        date_time: new Date().toLocaleString('en-US', {
          timeZone: 'America/Los_Angeles',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        })
      }

      // Send internal notification email
      await emailjs.send(serviceId, templateId, emailData, userId)
      
      // Send auto-response email
      await emailjs.send(serviceId, autoResponseTemplateId, {
        to_name: data.name,
        to_email: data.email,
        from_name: data.name,
        from_email: data.email,
        phone: data.phone,
        investment_goals: investmentGoalsFormatted,
        portfolio_size: portfolioSizeFormatted,
        hear_about: hearAboutFormatted,
        message: data.message,
        date_time: new Date().toLocaleString('en-US', {
          timeZone: 'America/Los_Angeles',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        })
      }, userId)

      setSubmitStatus('success')
      setSubmitMessage('Thank you for your message! We will contact you within one business day.')
      reset()
      
    } catch (error) {
      console.error('Error sending email:', error)
      setSubmitStatus('error')
      setSubmitMessage('There was an error sending your message. Please try again or contact us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Section variant="default" padding="xl" id="contact-form" className="scroll-mt-32">
      <Container>
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-light text-neutral-800 mb-6">
              Contact Us
            </h2>
            <p className="text-xl text-neutral-600 leading-relaxed">
              Ready to discuss your financial goals? Schedule a consultation with our experienced team.
            </p>
          </div>

          <Card padding="xl">
            {submitStatus === 'success' ? (
              <div className="text-center py-8">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-medium text-neutral-800 mb-2">Message Sent!</h3>
                <p className="text-neutral-600 mb-6">{submitMessage}</p>
                <Button 
                  onClick={() => setSubmitStatus('idle')}
                  className="bg-sage-600 hover:bg-sage-700 text-white"
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <Input
                    label="Full Name"
                    placeholder="Enter your full name"
                    required
                    error={errors.name?.message}
                    {...register("name")}
                  />
                  <Input
                    label="Email Address"
                    type="email"
                    placeholder="Enter your email"
                    required
                    error={errors.email?.message}
                    {...register("email")}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <Input
                    label="Phone Number"
                    type="tel"
                    placeholder="(555) 123-4567"
                    required
                    error={errors.phone?.message}
                    {...register("phone")}
                  />
                  <Select
                    label="How did you hear about us?"
                    placeholder="Select an option"
                    options={hearAboutOptions}
                    error={errors.hearAbout?.message}
                    {...register("hearAbout")}
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-neutral-700">
                    Investment Goals
                  </label>
                  <p className="text-sm text-neutral-500">Select up to 3 goals</p>
                  <div className="grid md:grid-cols-2 gap-3">
                    <Controller
                      name="investmentGoals"
                      control={control}
                      render={({ field }) => (
                        <>
                          {investmentGoalsOptions.map((option) => (
                            <Checkbox
                              key={option.value}
                              label={option.label}
                              checked={field.value?.includes(option.value)}
                              disabled={
                                !field.value?.includes(option.value) && 
                                selectedGoals.length >= 3
                              }
                              onChange={(e) => {
                                const checked = e.target.checked
                                const currentValues = field.value || []
                                
                                if (checked) {
                                  field.onChange([...currentValues, option.value])
                                } else {
                                  field.onChange(currentValues.filter(v => v !== option.value))
                                }
                              }}
                            />
                          ))}
                        </>
                      )}
                    />
                  </div>
                  {errors.investmentGoals && (
                    <p className="text-sm text-red-600" role="alert">
                      {errors.investmentGoals.message}
                    </p>
                  )}
                </div>

                <Select
                  label="Investment Portfolio Size"
                  placeholder="Select range"
                  options={portfolioSizeOptions}
                  error={errors.portfolioSize?.message}
                  {...register("portfolioSize")}
                />

                <Textarea
                  label="Message"
                  placeholder="Tell us about your financial goals and how we can help you..."
                  required
                  rows={5}
                  error={errors.message?.message}
                  {...register("message")}
                />

                {submitStatus === 'error' && (
                  <div className="flex items-center p-4 bg-red-50 border border-red-200 rounded-md text-red-700">
                    <AlertCircle className="h-5 w-5 mr-2" />
                    {submitMessage}
                  </div>
                )}

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-sage-600 hover:bg-sage-700 text-white"
                >
                  {isSubmitting ? (
                    "Sending Message..."
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            )}
          </Card>
        </div>
      </Container>
    </Section>
  )
}
