import Button from '../../components/button'
import './styles.scss'
import { WatchProps } from './types'

export default function Watch({ style }: WatchProps) {
  return (
    <section className="watch" style={style}>
      <div className="watch-content">
        <div className="watch-text">
          <h2>
            <div className="play" /> Assista à transmissão ao vivo!
          </h2>
          <p>
            Nossa transmissão conta com intérprete de Libras e Audiodescrição
          </p>
        </div>
        <div className="buttons">
          <Button
            href="https://youtube.com"
            size="large"
            title="YouTube"
            className="btn"
          />
          <Button
            href="https://youtube.com"
            size="large"
            title="YouTube com audiodescrição"
            className="btn"
          />
        </div>
      </div>
    </section>
  )
}
