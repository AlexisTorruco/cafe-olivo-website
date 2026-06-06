"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type CartExtra = {
  id: number;
  name: string;
  price: number;
};

export type CartItem = {
  cartId: string;
  productId: number;
  name: string;
  price: number;
  quantity: number;
  extras: CartExtra[];
};

type CartContextType = {
  cartItems: CartItem[];
  cartQuantity: number;
  cartTotal: number;
  hasMounted: boolean;
  addToCart: (item: CartItem) => void;
  increaseQuantity: (cartId: string) => void;
  decreaseQuantity: (cartId: string) => void;
  removeItemFromCart: (cartId: string) => void;
  clearCart: () => void;
  sendOrderToWhatsApp: () => void;
};

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    const savedCart = localStorage.getItem("olivo-cart");

    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }

    setHasMounted(true);
  }, []);

  useEffect(() => {
    if (!hasMounted) return;

    localStorage.setItem("olivo-cart", JSON.stringify(cartItems));
  }, [cartItems, hasMounted]);

  const addToCart = (item: CartItem) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const increaseQuantity = (cartId: string) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.cartId === cartId
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      ),
    );
  };

  const decreaseQuantity = (cartId: string) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.cartId === cartId
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  const removeItemFromCart = (cartId: string) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.cartId !== cartId),
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const cartQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const sendOrderToWhatsApp = () => {
    const phoneNumber = "529171081821";

    const orderDetails = cartItems
      .map((item) => {
        const extrasText =
          item.extras.length > 0
            ? `\n   Extras:\n${item.extras
                .map((extra) => `   - ${extra.name} (+$${extra.price})`)
                .join("\n")}`
            : "";

        return `• ${item.name} x${item.quantity}${extrasText}\n   Total: $${
          item.price * item.quantity
        } MXN`;
      })
      .join("\n\n");

    const message = `Hola Café Olivo

Quiero realizar el siguiente pedido:

${orderDetails}

Subtotal productos: $${cartTotal} MXN

Gracias.`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message,
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartQuantity,
        cartTotal,
        hasMounted,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeItemFromCart,
        clearCart,
        sendOrderToWhatsApp,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart debe usarse dentro de CartProvider");
  }

  return context;
}
