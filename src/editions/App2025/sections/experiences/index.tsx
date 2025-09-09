import './schedule.scss'
import experiencesJson  from '../../json/experiencesData.json'
import { ScheduleProps } from './types'
import { generateUniqueId } from '../../utils/functions'
import { ExperienceItemType } from '../../types/experience'
import { ExperienceItem } from './components/experienceItem'

const experiencesData = experiencesJson as ExperienceItemType[]

export default function Experiences({ showExperiences }: ScheduleProps) {
  return (
    <section id="schedule" className={`schedule ${showExperiences ? 'open' : ''}`}>
      <h2 className="schedule-title">Programação Vivências</h2>
      <div>
        {experiencesData.map((item: ExperienceItemType) => (
          <ExperienceItem key={`${generateUniqueId()}`} {...item} />
        ))}
      </div>
    </section>
  )
}
