import './styles.scss'
import { WatchProps } from './types'

export default function Watch({style}: WatchProps) {
  return (
    <section className="watch" style={style}>
      <div>
        <h2>
          <div className="play" /> Assista à transmissão ao vivo!
        </h2>
        <p>Nossa transmissão conta com tradução ao vivo em Libras</p>
      </div>
      <div className="buttons">
        <a href="#" className="btn">
          Pelo Teams
        </a>
        <a href="#" className="btn">
          Pelo Youtube
        </a>
      </div>
    </section>
  )
}
