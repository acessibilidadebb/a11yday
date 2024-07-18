import './SvgCaret.scss'

interface SvgCaretProps {
  className: string
}

export const SvgCaret = ({ className }: SvgCaretProps) => (
  <div
    className="caret-container"
    role="img"
    aria-label="Ícone para colapsar conteúdo"
  >
    <svg
      className={className}
      width="4.1481051mm"
      height="2.5755339mm"
      viewBox="0 0 4.1481051 2.5755339"
      version="1.1"
      id="svg5"
    >
      <g id="layer1">
        <path
          id="rect984"
          className="svg-caret"
          d="M 0.50179663,0.18710418 0.18708803,0.50181548 1.759602,2.0743295 2.0737947,2.3885222 2.3885033,2.0743295 3.9610173,0.50181548 3.6463087,0.18710418 2.0743106,1.7596182 Z"
        />
      </g>
    </svg>
  </div>
)
export default SvgCaret
