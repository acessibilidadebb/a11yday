import './styles.scss'
import { ScheduleItemType } from '../../types/schedule'
import scheduleJson  from '../../json/scheduleData.json'
import { ScheduleItem } from './components/scheduleItem'
import { ScheduleProps } from './types'
import { generateUniqueId } from '../../utils/functions'

const scheduleData = scheduleJson as ScheduleItemType[]

export default function Schedule({ showSchedule }: ScheduleProps) {
  return (
    <section id="schedule" className={`schedule ${showSchedule ? 'open' : ''}`}>
      <h2 className="schedule-title">Programação</h2>
      <div>
        <div className="schedule-header">
          <div className="schedule-time">Hora</div>
          <div className="schedule-event">Acontecimento</div>
        </div>
        {scheduleData.map((item: ScheduleItemType) => (
          <ScheduleItem key={`${generateUniqueId()}`} {...item} />
        ))}
      </div>
    </section>
  )
}
