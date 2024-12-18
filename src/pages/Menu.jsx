import React from 'react';
import '../styles/menu.css'

function Menu() {
  const pizzaMenu = [
    {
      name: 'Margherita',
      ingredients: 'Tomato sauce, Mozzarella, Basil',
      price: 90
    },
    {
      name: 'Hawaii',
      ingredients: 'Tomato sauce, Mozzarella, Ham, Pineapple',
      price: 95
    },
    {
      name: 'Pepperoni',
      ingredients: 'Tomato sauce, Mozzarella, Pepperoni',
      price: 100
    },
    {
      name: 'Quattro Formaggi',
      ingredients: 'Tomato sauce, Mozzarella, Gorgonzola, Parmesan, Ricotta',
      price: 110
    }
  ];

  return (
    <div className="menu-page">
      <section>
        <h2>Our Pizza Menu</h2>
        <div className="menu-grid">
          {pizzaMenu.map((pizza, index) => (
            <article key={index} className="menu-item">
              <h3>{pizza.name}</h3>
              <p className="ingredients">{pizza.ingredients}</p>
              <p className="price">{pizza.price} kr</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Menu;
