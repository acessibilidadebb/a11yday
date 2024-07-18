import scheduleData from './scheduleData.json'
import { ScheduleItem } from './components/scheduleItem'
import { ScheduleProps } from './types'
import './styles.scss'

export default function Schedule({
  setShowSections,
  showSchedule,
  setShowSchedule,
}: ScheduleProps) {
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
