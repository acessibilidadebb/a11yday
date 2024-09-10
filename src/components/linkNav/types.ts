type AnchorTarget = "_self" | "_blank" | "_parent" | "_top";

export type IconProps = {
  icon?: "back" | "download"
}

export type LinkNavProps = IconProps & {
  title: string
  onClick?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void
  className?: string
  target?: AnchorTarget
  href?: string
  link?: boolean
}
