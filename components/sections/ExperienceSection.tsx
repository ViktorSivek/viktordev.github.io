'use client'

import { SectionHeader } from '@/components/ui/SectionHeader'
import { Section } from '@/components/ui/Section'
import { timelineExperiences } from '@/data'
import Image from 'next/image'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

// Define the Experience type
interface Experience {
  title: string
  company_name: string
  icon: string
  iconBg: string
  date: string
  points: string[]
}

// Type the ExperienceCard props
interface ExperienceCardProps {
  experience: Experience
}

const ExperienceCard = ({ experience }: ExperienceCardProps) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background:
          'linear-gradient(to bottom right, rgba(17, 24, 39, 0.8), rgba(3, 7, 18, 0.8))' /* from-gray-900/80 to-gray-950/80 */,
        color: '#fff',
        border: '1px solid rgba(75, 85, 99, 0.2)' /* border-gray-800 */,
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
        borderRadius: '1rem' /* rounded-2xl */,
        backdropFilter: 'blur(8px)',
        padding: '24px',
      }}
      contentArrowStyle={{ borderRight: '7px solid rgba(17, 24, 39, 0.8)' }}
      date={experience.date}
      dateClassName="text-gray-400 text-sm font-medium"
      iconStyle={{
        background: `linear-gradient(135deg, ${experience.iconBg === '#383E56' ? 'rgba(56, 62, 86, 0.8)' : 'rgba(230, 222, 221, 0.8)'}, ${experience.iconBg === '#383E56' ? 'rgba(76, 82, 106, 0.9)' : 'rgba(250, 242, 241, 0.9)'})`,
        boxShadow: '0 0 0 4px rgba(255, 255, 255, 0.1)',
      }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <Image
            src={experience.icon}
            alt={experience.company_name}
            width={32}
            height={32}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
          {experience.title}
        </h3>
        <p
          className="text-gray-300 text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <div className="mt-5">
        <ul className="space-y-3">
          {experience.points.map((point: string, index: number) => (
            <li
              key={`experience-point-${index}`}
              className="text-gray-300 text-[14px] pl-1 tracking-wider flex items-start"
            >
              <span className="text-purple-400 mr-2 mt-1">•</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </VerticalTimelineElement>
  )
}

const ExperienceSection = () => {
  return (
    <Section id="experience" className="relative">
      <SectionHeader subtitle="Work History" title="Experiences" />

      <div className="mt-10 flex flex-col">
        <VerticalTimeline lineColor="rgba(156, 163, 175, 0.3)">
          {timelineExperiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </Section>
  )
}

export default ExperienceSection
