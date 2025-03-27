import { useEffect, useState } from "react";
import "./Pizza.css";

const Pizzas = () => {
  const [pizza, setPizza] = useState(null);
  const pizzaId = "p001"; // ID fijo por ahora

  useEffect(() => {
    const fetchPizza = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/pizzas/${pizzaId}`
        );
        const data = await response.json();
        setPizza(data);
      } catch (error) {
        console.error("Error al obtener la pizza:", error);
      }
    };

    fetchPizza();
  }, []);

  if (!pizza) return <p>Cargando pizza...</p>;

  return (
    <div className="pizza-container">
      <img src={pizza.img} alt={pizza.name} className="pizza-image" />
      <h2>{pizza.name}</h2>
      <p>{pizza.desc}</p>
      <h3>Ingredientes:</h3>
      <ul className="pizza-ingredients">
        {pizza.ingredients.map((ingredient, index) => (
          <li key={index}>🍕{ingredient}</li>
        ))}
      </ul>
      <h3>Precio: ${pizza.price.toLocaleString("es-CL")}</h3>
      <button className="btn-add">Añadir al carrito</button>
    </div>
  );
};

export default Pizzas;
