import './schedule.scss'
import { ScheduleItemType } from '../../types/schedule'
import scheduleJson  from '../../json/scheduleData.json'
import { ScheduleItem } from './components/scheduleItem'
import { generateUniqueId } from '../../utils/functions'

const scheduleData = scheduleJson as ScheduleItemType[]

export default function Schedule() {
  return (
    <section id="schedule-2025" className='schedule-2025'>
      <h2 className="schedule-title-2025">Programação Palestras</h2>
      <div>
        <div className="schedule-header-2025">
          <div className="schedule-time-2025">Hora</div>
          <div className="schedule-event-2025">Atividade</div>
        </div>
        {scheduleData.map((item: ScheduleItemType) => (
          <ScheduleItem key={`${generateUniqueId()}`} {...item} />
        ))}
      </div>
    </section>
  )
}
