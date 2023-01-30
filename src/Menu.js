import React from "react";

const Menu = ({ items }) => {
  return (
    <div className="section-center">
      {items.map((menuItem, index) => {
        const { id, title, img, desc, price } = menuItem;
        return (
          <article key={index} className="menu-item">
            <img src={img} alt={title} className="photo" />
            <div className="=item-info">
              <header>
                <h4>{title}</h4>
                <h4 className="price">TL {price}</h4>
              </header>
              <p className="item-text">{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
