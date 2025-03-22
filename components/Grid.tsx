// import { gridItems } from '@/data'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'

const Grid = () => {
  return (
    <section id="about">
      <BentoGrid className="w-full py-20">
        {[
          { title: 'Project 1', description: 'Description for project 1', id: 1 },
          { title: 'Project 2', description: 'Description for project 2', id: 2 },
          { title: 'Project 3', description: 'Description for project 3', id: 3 },
          { title: 'Project 4', description: 'Description for project 4', id: 4 },
        ].map((item) => (
          <BentoGridItem
            key={item.id}
            title={item.title}
            description={item.description}
          />
        ))}
      </BentoGrid>
    </section>
  )
}

export default Grid
