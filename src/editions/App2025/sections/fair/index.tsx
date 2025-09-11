import './fair.scss'
import { FairItemType } from '../../types/fair'
import scheduleJson  from '../../json/fairData.json'
import { FairItem } from './components/fairItem'
import { generateUniqueId } from '../../utils/functions'

const scheduleData = scheduleJson as FairItemType[]

export default function Fair() {
  return (
    <section id="fair" className='fair'>
      <h2 className="fair-title">Programação Feira de tecnologias assistivas</h2>
      <div>
        {scheduleData.map((item: FairItemType) => (
          <FairItem key={`${generateUniqueId()}`} {...item} />
        ))}
      </div>
    </section>
  )
}
