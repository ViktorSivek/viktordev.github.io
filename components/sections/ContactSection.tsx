'use client'

import { SectionHeader } from '@/components/ui/SectionHeader'
import { Section } from '@/components/ui/Section'
import MagicButton from '@/components/ui/MagicButton'
import { FaEnvelope } from 'react-icons/fa6'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { motion } from 'framer-motion'
import CodeEditorDemo from '@/components/animate-ui/components/code-editor-demo'

const ContactSection = () => {
  return (
    <Section id="contact" className="py-20 md:py-32">
      {' '}
      {/* Increased vertical padding */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
        {' '}
        {/* Centering container */}
        <SectionHeader subtitle="Get in touch" title="Contact me" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start mt-16">
          {/* Left Side: Contact Form & Info */}
          <div className="text-white/80 flex flex-col space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-white">
                Let&apos;s Work Together
              </h3>
              <p className="text-lg mb-6">
                I&apos;m currently available for freelance work and exciting new
                opportunities. Whether you have a project in mind or just want
                to connect, I&apos;d love to hear from you!
              </p>
            </div>

            {/* Contact Form */}
            <form className="space-y-6 bg-black-200 p-6 sm:p-8 rounded-2xl border border-black-300">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-white/90 mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="you@example.com"
                  className="w-full p-3 bg-black-100 rounded-lg border border-neutral-700 text-white placeholder:text-neutral-500 focus:ring-2 focus:ring-purple transition-all"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-white/90 mb-2"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  placeholder="Your message..."
                  className="w-full p-3 bg-black-100 rounded-lg border border-neutral-700 text-white placeholder:text-neutral-500 focus:ring-2 focus:ring-purple transition-all"
                  required
                ></textarea>
              </div>
              <MagicButton
                title="Send Message"
                icon={<FaEnvelope />}
                position="right"
                otherClasses="w-full"
              />
            </form>

            {/* Social Links */}
            <div className="mt-8">
              <p className="text-lg mb-4">Or reach out via social media:</p>
              <div className="flex space-x-4">
                <motion.a
                  href="https://github.com/ViktorSivek"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-neutral-700 hover:bg-neutral-600 transition-colors rounded-full w-12 h-12 flex items-center justify-center z-20"
                  aria-label="GitHub Profile"
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="text-white text-2xl"
                  />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/viktor-sivek/" // Corrected LinkedIn URL
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-blue-600 hover:bg-blue-500 transition-colors rounded-full w-12 h-12 flex items-center justify-center z-20"
                  aria-label="LinkedIn Profile"
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="text-white text-2xl"
                  />
                </motion.a>
              </div>
            </div>
          </div>

          {/* Right Side: Code Editor */}
          <div className="bg-black-200 p-4 sm:p-6 rounded-3xl backdrop-blur-sm h-[480px] md:h-[550px] flex items-center justify-center border border-black-300">
            <CodeEditorDemo />
          </div>
        </div>
      </div>
    </Section>
  )
}

export default ContactSection
