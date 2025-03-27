import { useState, useEffect } from "react";
import CardPizza from "./CardPizza/CardPizza";
import Header from "./Header/Header";
import "./Home.css";

const Home = () => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    const consultarApi = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/pizzas");
        const data = await response.json();
        setPizzas(data);
      } catch (error) {
        console.error("Error al obtener las pizzas:", error);
      }
    };

    consultarApi();
  }, []);

  return (
    <div className="container">
      <div className="header">
        <Header />
      </div>
      <div className="cards">
        {pizzas.length > 0 ? (
          pizzas.map((pizza) => (
            <CardPizza
              key={pizza.id}
              name={pizza.name}
              img={pizza.img}
              ingredients={pizza.ingredients}
              price={pizza.price}
              desc={pizza.desc}
            />
          ))
        ) : (
          <p>Cargando pizzas...</p>
        )}
      </div>
    </div>
  );
};

export default Home;
