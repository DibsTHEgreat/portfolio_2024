import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'

const AboutMe = () => {
  return (
    <section>
        <BentoGrid>
            {[{ title:'Title1', description:'Desc1', id:1}].map((item) => (
                <BentoGridItem 
                    id={item.id}
                    key={item.id}
                    title={item.title}
                    description={item.description}
                />
            ))}
        </BentoGrid>
    </section>
  )
}

export default AboutMe