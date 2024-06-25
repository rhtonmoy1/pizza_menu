import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from './App';
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  // const style = { color: "red", fontSize: "48px", textTransform: "uppercase" };
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Out menu</h2>
      {numPizzas > 0 ? (
        <ul className="pizzas">
          {pizzaData.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
      ) : (
        <p>We're still working with our menu. Please come back later :)</p>
      )}

      {/* <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizzas/spinaci.jpg"
        price={12}
      />

      <Pizza
        name="Pizza Funghi"
        ingredients="Tomato, mozarella, mushrooms, and onion"
        price={12}
        photoName="pizzas/funghi.jpg"
      />

      <Pizza
         name= "Focaccia"
         ingredients= "Bread with italian olive oil and rosemary"
         price= {6}
         photoName= "pizzas/focaccia.jpg"
      />

      <Pizza
        name= "Pizza Margherita"
        ingredients= "Tomato and mozarella"
        price= {10}
        photoName= "pizzas/margherita.jpg"
      />

      <Pizza
        name= "Pizza Salamino"
        ingredients= "Tomato, mozarella, and pepperoni"
        price= {15}
        photoName= "pizzas/salamino.jpg"
      />

      <Pizza
        name= "Pizza Prosciutto"
        ingredients= "Tomato, mozarella, ham, aragula, and burrata cheese"
        price= {18}
        photoName= "pizzas/prosciutto.jpg"
      /> */}
    </main>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  // console.log(isOpen);
  // const DateTime = new Date().toLocaleDateString();

  // let shopStatus;
  // if (isOpen === true) {
  //   shopStatus = `We're open until ${closeHour}:00. Come visit us or order online.`;
  // } else {
  //   shopStatus = `We are currently close. visit us at ${openHour}`;
  // }

  // if(hour >= openHour && hour <= closeHour){
  //   alert("We are currently open");
  // }else{
  //   alert("Sorry we are currently close");
  // }

  return (
    <footer className="footer">
      {isOpen ? (
        <p>We're open until {closeHour}:00. Come visit us or order online.</p>
      ) : (
        <p>We are happy to welcome you between {openHour} to {closeHour}</p>
      )}

      {/* <div className="order">
        {shopStatus}
        <button className="btn">Order</button>
      </div> */}

    </footer>
  );
}

function Pizza(props) {

  if(props.pizzaObj.soldOut) return null;
  return (
    <li className="pizza">
      <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
      <div>
        <h3>{props.pizzaObj.name}</h3>
        <p>{props.pizzaObj.ingredients}</p>
        <span>{props.pizzaObj.price}</span>
      </div>
    </li>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
