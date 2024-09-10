import { HashLink as Link } from 'react-router-hash-link'
import './linkNav.scss'
import { ReactComponent as IconBack } from '../../assets/chevron-left.svg'
import { ReactComponent as IconDownload } from '../../assets/download-icon.svg'
import { IconProps, LinkNavProps } from './types'

export default function LinkNav({
  title,
  onClick,
  icon,
  className,
  target = '_self',
  href,
  link = false,
}: LinkNavProps) {
  const Icon = ({ icon }: IconProps) => {
    switch (icon) {
      case 'back':
        return <IconBack className="icon" />

      case 'download':
        return <IconDownload className="icon" />

      default:
        return <></>
    }
  }
  if (!!href?.trim()) {
    if (link) {
      return (
        <Link
          to={href}
          className={`link-nav ${className}`}
          target={target}
          onClick={onClick}
          title={title}
          accessibility-label={title}
        >
          <Icon icon={icon} />
          {title}
        </Link>
      )
    } else {
      return (
        <a
          href={href}
          className={`link-nav ${className}`}
          target={target}
          onClick={onClick}
          title={title}
          accessibility-label={title}
        >
          <Icon icon={icon} />
          {title}
        </a>
      )
    }
  } else {
    return (
      <button
        className={`link-nav ${className}`}
        onClick={onClick}
        title={title}
        accessibility-label={title}
      >
        <Icon icon={icon} />
        {title}
      </button>
    )
  }
}
