"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";

export default function CartFloatingButton() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCartMinimized, setIsCartMinimized] = useState(false);

  const {
    cartItems,
    cartQuantity,
    cartTotal,
    hasMounted,
    increaseQuantity,
    decreaseQuantity,
    removeItemFromCart,
    clearCart,
    sendOrderToWhatsApp,
  } = useCart();

  if (!hasMounted || cartItems.length === 0) return null;

  return (
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

      {isCartOpen && (
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
    </>
  );
}
