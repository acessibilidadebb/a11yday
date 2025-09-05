import Button from '../../components/button'
import './participation.scss'
import { ParticipationProps } from './types'
import { generateUniqueId } from '../../utils/functions'

export default function Participation({
  style,
  background = 'watch-background',
  title,
  subtitle,
  subtitleHtml,
  buttons = [],
  afterButtonText,
  alignButtons
}: ParticipationProps) {
  return (
    <section className={`participation ${background}`} style={style}>
      <div className="participation-content">
        <div className="participation-text">
          <h2>
            <div className="play" /> {title}
          </h2>
          {subtitle && <p>{subtitle}</p>}
          {subtitleHtml && subtitleHtml.length > 0 && (
            <div className="participation-subtitle">
              {subtitleHtml.map((line, index) => (
                <div className="subtitle-line" key={index} dangerouslySetInnerHTML={{ __html: line }} />
              ))}
            </div>
          )}
        </div>
        <div className="buttons-container">
          {!!buttons.length && (
            <div className={`buttons ${alignButtons}`}>
              {buttons.map((button) => (
                <Button
                  key={generateUniqueId()}
                  href={button.url}
                  size="large"
                  title={button.title}
                  className="btn"
                  disabled={button.disabled}
                />
              ))}
            </div>
          )}
          {!!afterButtonText && (
            <div className="after-button-text">
              <p>{afterButtonText}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
