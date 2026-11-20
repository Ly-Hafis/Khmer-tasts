import React, {
  createContext,
  useContext,
  useEffect,
  useState
} from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {

  // Cart Data
  const [cart, setCart] = useState(() => {
    const save = localStorage.getItem("cart");
    return save ? JSON.parse(save) : [];
  });

  // Orders Data
  const [orders, setOrders] = useState(() => {
    return JSON.parse(localStorage.getItem("orders")) || [];
  });

  // Save Cart
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Save Orders
  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(orders));
  }, [orders]);

  // Add to Cart
  const addtoCart = (product, quantity = 1) => {
    const addedQty = Number(quantity) || 1;

    setCart((prevCart) => {
      const exist = prevCart.find(
        (item) => item.id === product.id
      );

      if (exist) {
        return prevCart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: Number(item.quantity || 0) + addedQty
              }
            : item
        );
      }

      return [
        ...prevCart,
        {
          ...product,
          price: Number(product.price),
          quantity: addedQty
        }
      ];
    });
  };

  // Increase Quantity
  const increaseQty = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // Decrease Quantity
  const decreaseQty = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // Remove Item
  const remove = (id) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item.id !== id)
    );
  };

  // Clear Cart
  const clearCart = () => {
    setCart([]);
  };

  // Total Price
  const Totalprice = cart.reduce(
    (total, item) =>
      total + Number(item.price) * Number(item.quantity),
    0
  );

  // Place Order
  const placeOrder = (orderData) => {
    const newOrder = {
      id: Date.now(),
      ...orderData,
      date: new Date().toLocaleString(),
      status: "Pending",
    };

    setOrders((prevOrders) => [...prevOrders, newOrder]);

    clearCart();

    return newOrder;
  };

  // Update Order Status
  const updateOrderStatus = (id, newStatus) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === id
          ? { ...order, status: newStatus }
          : order
      )
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addtoCart,
        increaseQty,
        decreaseQty,
        remove,
        Totalprice,
        orders,
        placeOrder,
        clearCart,
        updateOrderStatus
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom Hook
export const useCart = () => {
  return useContext(CartContext);
};