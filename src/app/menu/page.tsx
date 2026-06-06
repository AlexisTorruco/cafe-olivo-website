"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import {
  menuCategories,
  menuItems,
  type MenuCategory,
  type MenuItem,
} from "@/data/menuData";
import ProductModal from "@/components/menu/ProductModal";

type CartItem = {
  cartId: string;
  productId: number;
  name: string;
  price: number;
  quantity: number;
  extras: {
    id: number;
    name: string;
    price: number;
  }[];
};

export default function MenuPage() {
  const [selectedProduct, setSelectedProduct] = useState<MenuItem | null>(null);

  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const [selectedCategory, setSelectedCategory] =
    useState<MenuCategory>("Desayunos");

  const filteredItems = menuItems.filter(
    (item) => item.category === selectedCategory,
  );

  const handleAddToCart = (item: CartItem) => {
    setCartItems((prevItems) => [...prevItems, item]);
    setIsModalOpen(false);
    setSelectedProduct(null);
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
    setIsCartOpen(false);
    setIsCartMinimized(false);
  };

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

  const cartQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  const [isCartOpen, setIsCartOpen] = useState(false);

  const [isCartMinimized, setIsCartMinimized] = useState(false);

  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  return (
    <main className="bg-[#F7F1E3]">
      <Navbar />

      <section className="px-4 py-16 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-[#4F6F2A]">
              Menú digital
            </p>

            <h1 className="text-4xl font-extrabold text-[#1F3D1B] md:text-6xl">
              Elige tu antojo
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Explora nuestras categorías y descubre tus platillos, bebidas y
              favoritos de Olivo.
            </p>
          </div>

          <div className="mb-12 flex gap-3 overflow-x-auto pb-4">
            {menuCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`whitespace-nowrap rounded-full px-5 py-3 text-sm font-bold transition ${
                  selectedCategory === category
                    ? "bg-[#1F3D1B] text-white"
                    : "bg-white text-[#1F3D1B] hover:bg-[#E8E0CC]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="mb-8">
            <h2 className="text-3xl font-extrabold text-[#1F3D1B]">
              {selectedCategory}
            </h2>
            <p className="mt-2 text-gray-600">
              {filteredItems.length} productos disponibles
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredItems.map((item) => (
              <article
                key={item.id}
                className="overflow-hidden rounded-3xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl"
              >
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-56 w-full object-cover"
                  />
                ) : (
                  <div className="flex h-56 items-center justify-center bg-[#E8E0CC] text-sm font-bold uppercase tracking-[0.2em] text-[#4F6F2A]">
                    Olivo
                  </div>
                )}

                <div className="p-6">
                  <div className="mb-4 flex flex-wrap gap-2">
                    {item.isRecommended && (
                      <span className="rounded-full bg-[#4F6F2A] px-3 py-1 text-xs font-bold text-white">
                        Recomendado
                      </span>
                    )}

                    {item.isFavorite && (
                      <span className="rounded-full bg-[#C9D63B] px-3 py-1 text-xs font-bold text-[#1F3D1B]">
                        Favorito
                      </span>
                    )}

                    {item.isNew && (
                      <span className="rounded-full bg-red-500 px-3 py-1 text-xs font-bold text-white">
                        Nuevo
                      </span>
                    )}
                  </div>

                  <h3 className="mb-3 text-2xl font-extrabold text-[#1F3D1B]">
                    {item.name}
                  </h3>

                  {item.description && (
                    <p className="mb-5 leading-relaxed text-gray-600">
                      {item.description}
                    </p>
                  )}

                  <p className="text-2xl font-extrabold text-[#4F6F2A]">
                    ${item.price}
                  </p>

                  {/* BOTON AGREGAR Y PERSONALIZAR */}

                  <div className="mt-6 flex gap-3">
                    <button
                      onClick={() =>
                        handleAddToCart({
                          cartId: crypto.randomUUID(),
                          productId: item.id,
                          name: item.name,
                          price: item.price,
                          quantity: 1,
                          extras: [],
                        })
                      }
                      className="flex-1 rounded-full border-2 border-[#1F3D1B] py-3 font-bold text-[#1F3D1B] transition hover:bg-[#1F3D1B] hover:text-white"
                    >
                      Agregar
                    </button>

                    {item.extraGroup && (
                      <button
                        onClick={() => {
                          setSelectedProduct(item);
                          setIsModalOpen(true);
                        }}
                        className="flex-1 rounded-full bg-[#1F3D1B] py-3 font-bold text-white transition hover:bg-[#4F6F2A]"
                      >
                        Personalizar
                      </button>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* MODAL EMERGENTE */}

      {isModalOpen && selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => {
            setIsModalOpen(false);
            setSelectedProduct(null);
          }}
          onAddToCart={handleAddToCart}
        />
      )}

      {/* CARRITO FLOTANTE */}

      {hasMounted && cartItems.length > 0 && (
        <>
          {isCartMinimized ? (
            <button
              onClick={() => setIsCartMinimized(false)}
              className="fixed bottom-6 right-6 z-40 flex h-20 w-20 items-center justify-center rounded-full bg-[#1F3D1B] text-white shadow-2xl transition hover:scale-105 hover:bg-[#4F6F2A]"
              aria-label="Abrir carrito"
            >
              <span className="text-3xl">🛒</span>

              <span className="absolute -right-1 -top-1 flex h-7 w-7 items-center justify-center rounded-full bg-[#C9D63B] text-sm font-extrabold text-[#1F3D1B]">
                {cartQuantity}
              </span>
            </button>
          ) : (
            <div className="fixed bottom-6 right-6 z-40 w-[calc(100%-3rem)] max-w-sm rounded-3xl bg-[#1F3D1B] p-5 text-white shadow-2xl md:w-80">
              <div className="mb-3 flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/70">
                    Tu pedido
                  </p>

                  <p className="mt-1 text-xl font-extrabold">
                    {cartQuantity} producto{cartQuantity > 1 ? "s" : ""}
                  </p>

                  <p className="mt-1 text-sm text-white/80">
                    Subtotal: ${cartTotal} MXN
                  </p>
                </div>

                <button
                  onClick={() => setIsCartMinimized(true)}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-xl font-bold text-white transition hover:bg-white/20"
                  aria-label="Minimizar carrito"
                >
                  −
                </button>
              </div>

              <button
                onClick={() => setIsCartOpen(true)}
                className="w-full rounded-full bg-white px-5 py-3 font-bold text-[#1F3D1B] transition hover:bg-[#F7F1E3]"
              >
                Ver pedido
              </button>
            </div>
          )}
        </>
      )}

      {hasMounted && isCartOpen && (
        <div className="fixed inset-0 z-[110] flex justify-end bg-black/60">
          <aside className="h-full w-full max-w-md overflow-y-auto bg-white p-6 shadow-2xl">
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#4F6F2A]">
                  Pedido
                </p>

                <h2 className="mt-2 text-3xl font-extrabold text-[#1F3D1B]">
                  Tu pedido
                </h2>
              </div>

              <button
                onClick={() => setIsCartOpen(false)}
                className="rounded-full bg-[#F7F1E3] px-4 py-2 font-bold text-[#1F3D1B]"
              >
                ✕
              </button>
            </div>

            {/* CONTENIDO DEL CARRITO */}

            <div className="grid gap-4">
              {cartItems.map((item) => (
                <article
                  key={item.cartId}
                  className="rounded-2xl border border-[#E8E0CC] bg-[#F7F1E3] p-4"
                >
                  <div className="flex justify-between gap-4">
                    <div>
                      <h3 className="font-bold text-[#1F3D1B]">{item.name}</h3>

                      <div className="mt-3 flex items-center gap-3">
                        <button
                          onClick={() => decreaseQuantity(item.cartId)}
                          className="flex h-8 w-8 items-center justify-center rounded-full bg-white font-bold text-[#1F3D1B] shadow"
                        >
                          -
                        </button>

                        <span className="font-bold text-[#1F3D1B]">
                          {item.quantity}
                        </span>

                        <button
                          onClick={() => increaseQuantity(item.cartId)}
                          className="flex h-8 w-8 items-center justify-center rounded-full bg-white font-bold text-[#1F3D1B] shadow"
                        >
                          +
                        </button>

                        <button
                          onClick={() => removeItemFromCart(item.cartId)}
                          className="ml-auto text-sm font-bold text-red-500 transition hover:text-red-700"
                        >
                          Eliminar
                        </button>
                      </div>
                    </div>

                    <p className="font-extrabold text-[#4F6F2A]">
                      ${item.price * item.quantity}
                    </p>
                  </div>

                  {item.extras.length > 0 && (
                    <div className="mt-3">
                      <p className="text-sm font-bold text-[#1F3D1B]">
                        Extras:
                      </p>

                      <ul className="mt-1 space-y-1 text-sm text-gray-600">
                        {item.extras.map((extra) => (
                          <li key={extra.id}>
                            + {extra.name} (${extra.price})
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </article>
              ))}
            </div>

            {/* PANEL DE RESUMEN */}
            <div className="mt-6 rounded-2xl bg-[#1F3D1B] p-5 text-white">
              <div className="flex justify-between text-lg font-bold">
                <span>Subtotal</span>
                <span>${cartTotal} MXN</span>
              </div>

              <p className="mt-2 text-sm text-white/80">
                El envío se confirma por WhatsApp según zona y repartidor
                disponible.
              </p>
            </div>

            {/* BOTÓN DE ENVÍO  Y VACÍAR */}

            <button
              onClick={clearCart}
              className="mt-6 w-full rounded-full border-2 border-red-500 px-6 py-3 font-bold text-red-500 transition hover:bg-red-500 hover:text-white"
            >
              Vaciar pedido
            </button>

            <button
              onClick={sendOrderToWhatsApp}
              className="mt-3 w-full rounded-full bg-[#1F3D1B] px-6 py-4 font-bold text-white transition hover:bg-[#4F6F2A]"
            >
              Enviar pedido por WhatsApp
            </button>
          </aside>
        </div>
      )}

      <Footer />
    </main>
  );
}
