"use client";

import { useState } from "react";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { useCart } from "@/context/CartContext";
import {
  menuCategories,
  menuItems,
  type MenuCategory,
  type MenuItem,
} from "@/data/menuData";
import ProductModal from "@/components/menu/ProductModal";

export default function MenuPage() {
  const { addToCart } = useCart();

  const [selectedProduct, setSelectedProduct] = useState<MenuItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [selectedCategory, setSelectedCategory] =
    useState<MenuCategory>("Desayunos");

  const filteredItems = menuItems.filter(
    (item) => item.category === selectedCategory,
  );

  const handleAddToCart = (item: {
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
  }) => {
    addToCart(item);
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

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

      <Footer />
    </main>
  );
}
