import './location.scss'

export default function Location() {
  const Maps = () => {
    return (
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1460.2480091253726!2d-47.87729541138626!3d-15.784725747874436!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a3b046fe4f29f%3A0xb95a1721af602202!2sBanco%20do%20Brasil%20-%20Sede%20I!5e0!3m2!1spt-BR!2sbr!4v1725892789968!5m2!1spt-BR!2sbr"
        width="600"
        height="450"
        className='maps-frame'
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    )
  }
  return (
    <div id="address-and-location" className="location">
      <div className="address">
        <h3 className="address-title">Endereço e Localização</h3>
        <p className="address-details">
          <strong>Local:</strong> Auditório do 14º andar, torre sul, Ed. Banco
          do Brasil
        </p>
        <p className="address-details">
          <strong>Endereço:</strong> Quadra 5, Lote B, SAUN, s/n - Asa Norte,
          Brasília - DF
        </p>
      </div>
      <Maps />
    </div>
  )
}
