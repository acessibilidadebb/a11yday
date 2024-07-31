import './styles.scss'
import scheduleData from './scheduleData.json'
import { ScheduleItem } from './components/scheduleItem'
import { ScheduleProps } from './types'

export default function Schedule({ showSchedule }: ScheduleProps) {
  return (
    <section id="schedule" className={`schedule ${showSchedule ? 'open' : ''}`}>
      <h2 className="schedule-title">Programação</h2>
      <div>
        <div className="schedule-header">
          <div className="schedule-time">Hora</div>
          <div className="schedule-event">Acontecimento</div>
        </div>
        {scheduleData.map((item) => (
          <ScheduleItem key={item.title} {...item} />
        ))}
      </div>
    </section>
  )
}
