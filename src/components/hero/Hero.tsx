"use client";

import { useState, useEffect } from "react";

const heroImages = [
  "/images/hero-1.png",
  "/images/hero-2.png",
  "/images/hero-3.png",
];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const changeImage = (nextIndex: number) => {
    setIsFading(true);

    setTimeout(() => {
      setCurrentImage(nextIndex);
      setIsFading(false);
    }, 300);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex =
        currentImage === heroImages.length - 1 ? 0 : currentImage + 1;

      changeImage(nextIndex);
    }, 4000);

    return () => clearInterval(interval);
  }, [currentImage]);

  const nextImage = () => {
    const nextIndex =
      currentImage === heroImages.length - 1 ? 0 : currentImage + 1;

    changeImage(nextIndex);
  };

  const previousImage = () => {
    const previousIndex =
      currentImage === 0 ? heroImages.length - 1 : currentImage - 1;

    changeImage(previousIndex);
  };

  return (
    <section className="bg-[#F7F1E3]">
      <div className="mx-auto grid min-h-[70vh] max-w-7xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:px-8">
        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-[#4F6F2A]">
            Café • Restaurante
          </p>

          <h1 className="mb-6 text-4xl font-extrabold leading-tight text-[#1F3D1B] md:text-6xl">
            Cafetería Olivo
          </h1>

          <p className="mb-8 max-w-xl text-lg text-[#4B5563] md:text-xl">
            Disfruta de un sazón rico y saludable con desayunos, bebidas y
            platillos preparados con amor.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="https://wa.me/529171081821"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#111827] px-6 py-3 text-center font-bold text-white transition hover:bg-[#4F6F2A]"
            >
              Realizar pedido
            </a>

            <a
              href="/menu"
              className="rounded-full border-2 border-[#4F6F2A] px-6 py-3 text-center font-bold text-[#4F6F2A] transition hover:bg-[#4F6F2A] hover:text-white"
            >
              Ver menú
            </a>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-4 shadow-xl">
          <div className="relative overflow-hidden rounded-2xl">
            <img
              src={heroImages[currentImage]}
              alt="Platillo destacado de Cafetería Olivo"
              className={`h-[320px] w-full object-cover transition-all duration-700 ease-in-out md:h-[460px] ${
                isFading ? "scale-105 opacity-0" : "scale-100 opacity-100"
              }`}
            />

            <button
              type="button"
              onClick={previousImage}
              className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-2xl font-bold text-[#1F3D1B] shadow transition hover:bg-white hover:scale-105"
            >
              ‹
            </button>

            <button
              type="button"
              onClick={nextImage}
              className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-2xl font-bold text-[#1F3D1B] shadow transition hover:bg-white hover:scale-105"
            >
              ›
            </button>

            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
              {heroImages.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => changeImage(index)}
                  className={`h-2.5 rounded-full transition-all ${
                    currentImage === index
                      ? "w-8 bg-white"
                      : "w-2.5 bg-white/60 hover:bg-white"
                  }`}
                  aria-label={`Ver imagen ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
