import './styles.scss'

export default function Watch() {
  return (
    <section className="watch">
      <div>
        <h2>
          <div className="play" /> Assista a transmissão ao vivo!
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
