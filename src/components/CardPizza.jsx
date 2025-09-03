export default function CardPizza({ name, price, ingredients, img }) {
  return (
<article className="card m-2" style={{ width: '18rem' }}>
      <img src={img} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{ingredients.join(', ')}</p>
        <p className="card-text fw-bold">${price.toLocaleString()}</p>
<div className="d-flex gap-2 mt-2 justify-content-center">
  <button className="btn btn-primary btn-sm">Ver más</button>
  <button className="btn btn-success btn-sm">Añadir</button>
</div>
      </div>
    </article>
  );
}
