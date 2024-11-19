import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [carts, setCarts] = useState([]);

  // Hàm tính số lượng item trong giỏ hàng
  const getCartCount = () => carts.length;

  // add to cart
  const addToCart = (item) => {
    const itemExits = carts.findIndex((cart) => cart.id === item.id);
    if (itemExits === -1) {
      setCarts([...carts, item]);
    }
  };
  // delete cart
  const deleteToCart = (id) => {
    const update = carts.filter((item) => item.id !== id);
    setCarts(update);
  };
  const total = () => {
    return carts.reduce((sum, item) => {
      const itemTotal = item.price * (item.quantity || 1); // Mặc định quantity là 1 nếu không có
      return sum + itemTotal;
    }, 0);
  };
  const value = {
    carts,
    getCartCount, // Đảm bảo getCartCount được truyền vào context
    addToCart,
    total,
    deleteToCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
