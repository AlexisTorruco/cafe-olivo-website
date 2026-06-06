"use client";

import { useState } from "react";
import type { MenuExtra, MenuItem } from "@/data/menuData";
import { menuExtras } from "@/data/menuData";

type ProductModalProps = {
  product: MenuItem;
  onClose: () => void;
  onAddToCart: (item: {
    cartId: string;
    productId: number;
    name: string;
    price: number;
    quantity: number;
    extras: MenuExtra[];
  }) => void;
};

export default function ProductModal({
  product,
  onClose,
  onAddToCart,
}: ProductModalProps) {
  const [selectedExtras, setSelectedExtras] = useState<MenuExtra[]>([]);

  const availableExtras = menuExtras.filter(
    (extra) => extra.group === product.extraGroup,
  );

  const extrasTotal = selectedExtras.reduce(
    (total, extra) => total + extra.price,
    0,
  );

  const total = product.price + extrasTotal;

  const toggleExtra = (extra: MenuExtra) => {
    const alreadySelected = selectedExtras.some((item) => item.id === extra.id);

    if (alreadySelected) {
      setSelectedExtras(selectedExtras.filter((item) => item.id !== extra.id));
    } else {
      setSelectedExtras([...selectedExtras, extra]);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 px-4">
      <div className="max-h-[85vh] w-full max-w-md overflow-y-auto rounded-3xl bg-white p-5 shadow-2xl md:p-6">
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <p className="mb-2 text-sm font-bold uppercase tracking-[0.3em] text-[#4F6F2A]">
              Personalizar
            </p>

            <h2 className="text-2xl font-extrabold text-[#1F3D1B] md:text-3xl">
              {product.name}
            </h2>

            <p className="mt-2 text-gray-600">Base: ${product.price}</p>
          </div>

          <button
            onClick={onClose}
            className="rounded-full bg-[#F7F1E3] px-4 py-2 font-bold text-[#1F3D1B]"
          >
            ✕
          </button>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-bold text-[#1F3D1B]">
            Extras disponibles
          </h3>

          <div className="grid gap-3">
            {availableExtras.map((extra) => {
              const isSelected = selectedExtras.some(
                (item) => item.id === extra.id,
              );

              return (
                <button
                  key={extra.id}
                  onClick={() => toggleExtra(extra)}
                  className={`flex items-center justify-between rounded-2xl border px-4 py-2.5 text-left transition ${
                    isSelected
                      ? "border-[#1F3D1B] bg-[#F7F1E3]"
                      : "border-gray-200 bg-white hover:border-[#4F6F2A] hover:bg-[#F7F1E3]"
                  }`}
                >
                  <span className="font-semibold text-[#1F3D1B]">
                    {extra.name}
                  </span>

                  <span className="font-bold text-[#4F6F2A]">
                    +${extra.price}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-6 rounded-2xl bg-[#F7F1E3] p-4">
          <div className="flex justify-between text-sm text-gray-600">
            <span>Producto</span>
            <span>${product.price}</span>
          </div>

          <div className="mt-2 flex justify-between text-sm text-gray-600">
            <span>Extras</span>
            <span>${extrasTotal}</span>
          </div>

          <div className="mt-3 border-t border-[#1F3D1B]/20 pt-3">
            <div className="flex justify-between text-lg font-bold text-[#1F3D1B]">
              <span>Total</span>
              <span>${total}</span>
            </div>
          </div>
        </div>

        <button
          onClick={() =>
            onAddToCart({
              cartId: crypto.randomUUID(),
              productId: product.id,
              name: product.name,
              price: total,
              quantity: 1,
              extras: selectedExtras,
            })
          }
          className="mt-5 w-full rounded-full bg-[#1F3D1B] px-6 py-3.5 font-bold text-white transition hover:bg-[#4F6F2A]"
        >
          Agregar al pedido
        </button>
      </div>
    </div>
  );
}
