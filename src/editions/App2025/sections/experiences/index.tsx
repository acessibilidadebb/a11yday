import './experiences.scss'
import experiencesJson  from '../../json/experiencesData.json'
import { generateUniqueId } from '../../utils/functions'
import { ExperienceItemType } from '../../types/experience'
import { ExperienceItem } from './components/experienceItem'

const experiencesData = experiencesJson as ExperienceItemType[]

export default function Experiences() {
  return (
    <section id="experiences" className='experiences'>
      <h2 className="experiences-title">Programação Vivências</h2>
      <div>
        {experiencesData.map((item: ExperienceItemType) => (
          <ExperienceItem key={`${generateUniqueId()}`} {...item} />
        ))}
      </div>
    </section>
  )
}
