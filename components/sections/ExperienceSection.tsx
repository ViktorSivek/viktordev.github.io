'use client'

import { SectionHeader } from '@/components/ui/SectionHeader'
import { Section } from '@/components/ui/Section'
import { workExperience } from '@/data'
import { BentoGrid, BentoGridItem } from '@/components/ui/BentoGrid'
import Image from 'next/image'

const ExperienceSection = () => {
  return (
    <Section id="experience">
      <SectionHeader subtitle="Work History" title="Experience" />
      <BentoGrid className="md:auto-rows-[20rem]">
        {workExperience.map((item) => (
          <BentoGridItem
            key={item.id}
            title={item.title}
            description={item.desc}
            className={item.className}
            header={
              <div className="relative w-full h-60">
                {item.thumbnail && (
                  <Image
                    src={item.thumbnail}
                    alt={item.title}
                    fill
                    className="object-cover rounded-t-3xl"
                  />
                )}
              </div>
            }
          />
        ))}
      </BentoGrid>
    </Section>
  )
}

export default ExperienceSection
