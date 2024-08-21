import Button from '../../components/button'
import './participation.scss'
import { ParticipationProps } from './types'
import { generateUniqueId } from '../../utils/functions'

export default function Participation({
  style,
  background = 'watch-background',
  title,
  subtitle,
  buttons = [],
}: ParticipationProps) {
  return (
    <section className={`participation ${background}`} style={style}>
      <div className="participation-content">
        <div className="participation-text">
          <h2>
            <div className="play" /> {title}
          </h2>
          <p>{subtitle}</p>
        </div>
        {!!buttons.length && (
          <div className="buttons">
            {buttons.map((button) => (
              <Button
                key={generateUniqueId()}
                href={button.url}
                size="large"
                title={button.title}
                className="btn"
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
