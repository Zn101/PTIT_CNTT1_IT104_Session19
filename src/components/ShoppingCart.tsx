import React, { useMemo } from "react";

export default function ShoppingCart() {
  const cartItems = [
    { id: 1, name: "San phan A", price: 100000, quantity: 2 },
    { id: 2, name: "San pham B", price: 200000, quantity: 1 },
  ];

  const cartTotals = useMemo(() => {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }, [cartItems]);

  return (
    <div>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - quantity: {item.quantity} - {item.price}
          </li>
        ))}
      </ul>
      <h2>Total: {cartTotals.toLocaleString()}đ</h2>
    </div>
  );
}

