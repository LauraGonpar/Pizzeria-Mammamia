import "./CardPizza.css";
const CardPizza = ({ desc, name, ingredients, price, img }) => {
  return (
    <div className="container">
      <div className="card">
        <img src={img} alt={name} className="card-image" />
        <h3 className="card-title">{name}</h3>
        <div className="card-content">
          <p className="card-ingredients">
            <strong>Ingredientes:</strong>
          </p>
          <ul className="card-ingredients-list">
            {ingredients.map((ingredient, index) => (
              <li key={index} className="ingredient-item">
                🍕 {ingredient}
              </li>
            ))}
          </ul>
        </div>
        <div className="card-price">
          <p>Precio: ${price}</p>
        </div>
        <div className="card-buttons">
          <button className="btn btn-view">Ver Más 👀</button>
          <button className="btn btn-add">Añadir 🛒</button>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;
