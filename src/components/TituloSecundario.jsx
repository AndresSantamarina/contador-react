const TituloSecundario = (props) => {
  return (
    <article>
      <h2>Práctica con react {props.anioActualProps}</h2>
      <p>
        React es una biblioteca de JavaScript desarrollada por Facebook para
        construir interfaces de usuario interactivas y eficientes en
        aplicaciones web de una sola página. Su enfoque declarativo y su
        arquitectura basada en componentes facilitan la creación de interfaces
        reutilizables y escalables. React ha ganado popularidad debido a su
        rendimiento optimizado y su capacidad para trabajar de manera integrada
        con otras tecnologías, convirtiéndolo en una herramienta fundamental en
        el desarrollo moderno de aplicaciones web. <br />
        Comisión: {props.comision}
      </p>
    </article>
  );
};

export default TituloSecundario;
