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
        background: 'rgba(17, 17, 17, 0.8)',
        color: '#fff',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
        borderRadius: '16px',
      }}
      contentArrowStyle={{ borderRight: '7px solid rgba(17, 17, 17, 0.8)' }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
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
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p
          className="text-gray-300 text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point: string, index: number) => (
          <li
            key={`experience-point-${index}`}
            className="text-gray-300 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  )
}

const ExperienceSection = () => {
  return (
    <Section id="experience" className="relative">
      <SectionHeader subtitle="Work History" title="Experiences" />

      <div className="mt-10 flex flex-col">
        <VerticalTimeline lineColor="rgba(255, 255, 255, 0.2)">
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
