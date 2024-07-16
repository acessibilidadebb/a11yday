import './styles.scss'

export default function Sections() {
  return (
    <section className="sections">
      <article className="sections-card">
        <div className="sections-card-cover cover-schedule">
          <h3>Programação</h3>
        </div>
        <p>Programação</p>
      </article>
      <article className="sections-card">
        <div className="sections-card-cover cover-speakers">
          <h3>Palestrantes</h3>
        </div>
        <p>Palestrantes</p>
      </article>
      <article className="sections-card">
        <div className="sections-card-cover cover-frequently-asked">
          <h3>Dúvidas frequentes</h3>
        </div>
        <p>Dúvidas frequentes</p>
      </article>
    </section>
  )
}
