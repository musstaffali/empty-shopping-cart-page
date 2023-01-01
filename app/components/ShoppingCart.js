import React from 'react';

const ShoppingCart = (props) => {
  return (
    <div>
      {props.items.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>{item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ShoppingCart;
