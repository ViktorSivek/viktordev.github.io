'use client'

import { useState, useRef, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Section } from '@/components/ui/Section'
import MagicButton from '@/components/ui/MagicButton'
import { FaEnvelope } from 'react-icons/fa6'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { motion } from 'framer-motion'
import { CodeEditorDemo } from '@/components/animate-ui/components/code-editor-demo'
import { Mail, MapPin } from 'lucide-react'

const ContactSection = () => {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(
    null
  )
  const formRef = useRef<HTMLFormElement>(null)

  // Initialize EmailJS
  useEffect(() => {
    // Initialize EmailJS with your public key
    emailjs.init({
      publicKey: process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY || '',
    })
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Use the sendForm method to send the email
      const result = await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID || '',
        process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID || '',
        '#contact-form'
      )

      // Email sent successfully
      setSubmitStatus('success')
      setEmail('')
      setMessage('')
    } catch (error) {
      console.error('Email error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus(null), 3000)
    }
  }

  return (
    <Section id="contact" className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
        <SectionHeader subtitle="Get in touch" title="Contact me" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center mt-12 md:mt-16">
          {/* Left Side: Contact Info & Form */}
          <div className="flex flex-col h-full justify-center md:text-left text-center">
            <div className="mb-2">
              <h3 className="text-2xl font-bold text-white bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 mb-4">
                Let&apos;s Work Together
              </h3>
              <p className="text-gray-300 mb-6">
                I&apos;m currently available for freelance work and exciting new
                opportunities. Whether you have a project in mind or just want
                to connect, I&apos;d love to hear from you!
              </p>

              {/* Contact Information */}
              <div className="mb-6">
                <div className="flex flex-wrap gap-6 md:justify-start justify-center">
                  <div className="flex items-center">
                    <Mail className="mr-2 h-5 w-5 text-gray-400" />
                    <div>
                      <p className="text-sm font-medium text-white">Email</p>
                      <a
                        href="mailto:viktor.sivek@gmail.com"
                        className="text-sm text-gray-400 hover:text-purple-400 transition-colors"
                      >
                        viktorsivek@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <MapPin className="mr-2 h-5 w-5 text-gray-400" />
                    <div>
                      <p className="text-sm font-medium text-white">Location</p>
                      <p className="text-sm text-gray-400">
                        Prague, Czech Republic
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mb-4">
                <div className="flex space-x-5 md:justify-start justify-center">
                  <motion.a
                    href="https://github.com/ViktorSivek"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-gray-800 hover:bg-gray-700 transition-colors rounded-full w-14 h-14 flex items-center justify-center z-20"
                    aria-label="GitHub Profile"
                  >
                    <FontAwesomeIcon
                      icon={faGithub}
                      className="text-white text-3xl"
                    />
                  </motion.a>
                  <motion.a
                    href="https://www.linkedin.com/in/viktor-sivek/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-blue-600 hover:bg-blue-500 transition-colors rounded-full w-14 h-14 flex items-center justify-center z-20"
                    aria-label="LinkedIn Profile"
                  >
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      className="text-white text-3xl"
                    />
                  </motion.a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="space-y-4"
              id="contact-form"
            >
              {/* Hidden fields for EmailJS template */}
              <input
                type="hidden"
                name="from_name"
                value="Website Contact Form"
              />
              <input type="hidden" name="name" value="Website Visitor" />
              <input
                type="hidden"
                name="title"
                value="New Contact Form Submission"
              />
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-white md:text-left text-left"
                >
                  Your Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  required
                  className="w-full rounded-lg border border-gray-700 bg-gray-900/50 px-4 py-3 text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-all"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-white md:text-left text-left"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Your message..."
                  required
                  rows={4}
                  className="w-full rounded-lg border border-gray-700 bg-gray-900/50 px-4 py-3 text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-all"
                />
              </div>

              <div className="md:text-left text-center -mt-8">
                <MagicButton
                  title={isSubmitting ? 'Sending...' : 'Send Message'}
                  icon={<FaEnvelope />}
                  position="right"
                  otherClasses={`${isSubmitting ? 'opacity-70 pointer-events-none' : ''}`}
                  handleClick={
                    isSubmitting
                      ? undefined
                      : () => {
                          const form = document.getElementById(
                            'contact-form'
                          ) as HTMLFormElement
                          if (form) form.requestSubmit()
                        }
                  }
                />
              </div>

              {submitStatus === 'success' && (
                <div className="rounded-md bg-green-900/30 p-3 text-sm text-green-400">
                  Message sent successfully!
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="rounded-md bg-red-900/30 p-3 text-sm text-red-400">
                  Failed to send message. Please try again.
                </div>
              )}
            </form>
          </div>

          {/* Right Side: Code Editor */}
          <div className="h-full flex items-center justify-center">
            <CodeEditorDemo />
          </div>
        </div>
      </div>
    </Section>
  )
}

export default ContactSection
