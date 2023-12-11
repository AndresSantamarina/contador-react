const Contador = () => {
  let numero = 10;

  return (
    <article className="text-center">
      <h2>Contador</h2>
      <h3>{numero}</h3>
      <button className="btn btn-outline-success" onClick={() => numero++}>
        +1
      </button>
    </article>
  );
};

export default Contador;
