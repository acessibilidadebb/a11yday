import './styles.scss'
import scheduleData from './scheduleData.json'
import { ScheduleItem } from './components/scheduleItem'
import { ScheduleProps } from './types'

export default function Schedule({
  setShowSections,
  showSchedule,
  setShowSchedule,
}: ScheduleProps) {
  return (
    <section className={`schedule ${showSchedule ? 'open' : ''}`}>
      <h2 className="schedule-title">Programação</h2>
      <section>
        <header className="schedule-header">
          <div className="schedule-time">Hora</div>
          <div className="schedule-event">Acontecimento</div>
        </header>
        {scheduleData.map((item) => (
          <ScheduleItem key={item.title} {...item} />
        ))}
      </section>
    </section>
  )
}
