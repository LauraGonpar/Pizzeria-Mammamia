import { pizzas } from "../CardPizza/pizzas";
import { useState } from "react";
import "./Cart.css";

const Cart = () => {
  const [cart, setCart] = useState(pizzas);

  const restarQuantity = (id) => {
    setCart((prevCart) =>
      prevCart
        .map((pizza) =>
          pizza.id === id ? { ...pizza, quantity: pizza.quantity - 1 } : pizza
        )
        .filter((pizza) => pizza.quantity >= 1)
    );
  };
  const sumarQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((pizza) =>
        pizza.id === id ? { ...pizza, quantity: pizza.quantity + 1 } : pizza
      )
    );
  };
  const total = cart.reduce(
    (acc, pizza) => acc + pizza.price * pizza.quantity,
    0
  );

  return (
    <div className="cart-container">
      {cart.length === 0 ? (
        <p>Tu carrito está vacío 😒 Elige la pizza que más te guste</p>
      ) : (
        <>
          <h2>Detalles del pedido:</h2>
          {cart
            .filter((pizza) => pizza.quantity > 0)
            .map((pizza) => (
              <div key={pizza.id} className="cart-item">
                <img className="cart-image" src={pizza.img} alt={pizza.name} />
                <h3>{pizza.name}</h3>
                <div className="cart-details">
                  <p>Precio: ${pizza.price.toLocaleString("es-CL")}</p>

                  <div className="cart-quantity">
                    <button onClick={() => restarQuantity(pizza.id)}>
                      <strong>-</strong>
                    </button>
                    <span>{pizza.quantity}</span>
                    <button onClick={() => sumarQuantity(pizza.id)}>
                      <strong>+</strong>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          <div className="cart-total">
            <h3>Total: ${total.toLocaleString("es-CL")}</h3>
            <button className="pay-btn">Pagar</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
