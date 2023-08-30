import React from 'react';
import img from "./jhinchroma.jpg"
import title from "./jhinchroma.jpg"
export const VerticalCard = ({ imageSrc, title, description }) => {
  return (
    <div className="vertical-card card">
      <div className="card-image">
        <img src={img} alt={title} />
      </div>
      <div className="card-content">
        <h2>pasta de fideos</h2>
        <p>Cocer la pasta en abundante cantidad de agua, que esté cómoda en la olla, sino aumentan las posibilidades de que la pasta se pegue.
            Agregar la sal después del hervor, esto es para que hierva más rápido, ya que el agua salada hierve a 102 grados y no a 100. También se recomienda tapar la olla mientras esperamos que hierva. Si el agua hierve más rápido, ahorramos energía.
            El famoso chorrito de aceite no es necesario, aunque se puede agregar. En lo personal, se lo agrego solo a la pasta fresca.
            Al agregar la pasta, tapar hasta que rompa el hervor, luego destapar y bajar el fuego.
            ¿Cómo saber cuando está lista? Depende de la pasta: las secas, en el tiempo que dice el paquete, los ñoquis, cuando suben a la superficie, los ravioles, cuando se pone transparente la parte de arriba y se nota el relleno. Lo mejor es probarla.
            Al escurrirla, no eches el conocido “chorrito de agua fría para cortar el hervor”, pone la pasta chiclosa. Es un engaña pichanga, no sé quién popularizó esta teoría.</p>
      </div>
    </div>
  );
}
