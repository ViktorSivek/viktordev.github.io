'use client'

import { SectionHeader } from '@/components/ui/SectionHeader'
import { Section } from '@/components/ui/Section'
import MagicButton from '@/components/ui/MagicButton'
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa6'
import { socialMedia } from '@/data'
import Image from 'next/image'

const ContactSection = () => {
  return (
    <Section id="contact">
      <SectionHeader subtitle="Get In Touch" title="Contact Me" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="text-white/80">
          <h3 className="text-2xl font-bold mb-4 text-white">Let's Work Together</h3>
          <p className="text-lg mb-6">
            I'm currently available for freelance work and exciting new opportunities. Whether you have a project in mind or just want to connect, I'd love to hear from you!
          </p>
          <p className="text-lg mb-8">
            Feel free to reach out through any of the channels below, and I'll get back to you as soon as possible.
          </p>
          
          <div className="flex flex-col space-y-4">
            <MagicButton
              title="Send me an email"
              icon={<FaEnvelope />}
              position="right"
            />
            
            <div className="flex space-x-6 mt-8">
              {socialMedia.map((item) => (
                <div key={item.id} className="w-12 h-12 relative cursor-pointer hover:scale-110 transition-transform">
                  <Image src={item.img} alt="Social media" fill />
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="bg-white/5 p-8 rounded-3xl backdrop-blur-sm">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-white mb-2">Name</label>
              <input 
                type="text" 
                id="name" 
                className="w-full p-3 bg-white/10 rounded-lg border border-white/20 text-white"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-white mb-2">Email</label>
              <input 
                type="email" 
                id="email" 
                className="w-full p-3 bg-white/10 rounded-lg border border-white/20 text-white"
                placeholder="Your email"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-white mb-2">Message</label>
              <textarea 
                id="message" 
                rows={5}
                className="w-full p-3 bg-white/10 rounded-lg border border-white/20 text-white"
                placeholder="Your message"
              ></textarea>
            </div>
            <MagicButton
              title="Send Message"
              icon={<FaEnvelope />}
              position="right"
            />
          </form>
        </div>
      </div>
    </Section>
  )
}

export default ContactSection
