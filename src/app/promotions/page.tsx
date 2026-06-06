"use client";

import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

const weeklyPromotions = [
  {
    id: 1001,
    day: "Martes",
    title: "Chilaquiles con huevo",
    price: 100,
    label: "$100",
    icon: "🍳",
  },
  {
    id: 1002,
    day: "Miércoles",
    title: "Ensalada Olivo + Soda Italiana",
    price: 160,
    label: "$160",
    icon: "🥗",
  },
  {
    id: 1003,
    day: "Jueves",
    title: "Frappé 2x1",
    price: 0,
    label: "Consultar",
    icon: "🥤",
  },
  {
    id: 1004,
    day: "Viernes",
    title: "Tacos de pollo pastor + Coca-Cola",
    price: 145,
    label: "$145",
    icon: "🌮",
  },
  {
    id: 1005,
    day: "Sábado",
    title: "Smoothie",
    price: 65,
    label: "$65",
    icon: "🍓",
  },
  {
    id: 1006,
    day: "Domingo",
    title: "Wrap de pollo + Limonada fresa",
    price: 130,
    label: "$130",
    icon: "🌯",
  },
];

const studentOptions = [
  "Chilaquiles con pollo o huevo",
  "Sándwich de jamón",
  "Wrap de pollo",
  "Ensalada César",
  "Tacos de pollo pastor",
];

const allianceLogos = [
  {
    name: "RA Calisthenics Center",
    image: "/images/colabs/calisthenics-center.png",
  },
  {
    name: "Studio-Angh",
    image: "/images/colabs/studio-angh.png",
  },
];

const workoutCombos = [
  {
    id: 2001,
    type: "Pre Workout",
    name: "Combo energético",
    description: "1 café americano + 1 toast de crema de cacahuate",
    price: 95,
    icon: "⚡",
  },
  {
    id: 2002,
    type: "Pre Workout",
    name: "Combo proteico",
    description: "1 smoothie + 1 avocado toast con 2 huevos",
    price: 150,
    icon: "💪",
  },
  {
    id: 2003,
    type: "Post Workout",
    name: "Combo strong",
    description:
      "1 limonada fresa + sándwich de huevo con tocino y aguacate Olivo",
    price: 160,
    icon: "🔥",
  },
  {
    id: 2004,
    type: "Post Workout",
    name: "Combo tacos",
    description: "1 jamaica piña + 5 tacos al pastor",
    price: 150,
    icon: "🌮",
  },
];

export default function PromotionsPage() {
  const { addToCart } = useCart();

  const addPromoToCart = (promo: {
    id: number;
    title: string;
    price: number;
  }) => {
    if (promo.price <= 0) return;

    addToCart({
      cartId: crypto.randomUUID(),
      productId: promo.id,
      name: promo.title,
      price: promo.price,
      quantity: 1,
      extras: [],
    });
  };

  return (
    <main className="bg-[#F7F1E3]">
      <Navbar />

      <section className="px-4 py-12 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-[#4F6F2A]">
              Promociones
            </p>

            <h1 className="text-4xl font-extrabold text-[#1F3D1B] md:text-6xl">
              Promos Olivo
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Promociones de la semana, estudiantes y beneficios para miembros
              de alianzas.
            </p>
          </div>

          {/* PROMOS SEMANALES */}
          <section className="mb-12">
            <div className="mb-5 flex items-end justify-between gap-4">
              <div>
                <p className="mb-2 text-sm font-bold uppercase tracking-[0.3em] text-[#4F6F2A]">
                  Semana
                </p>
                <h2 className="text-3xl font-extrabold text-[#1F3D1B]">
                  Promos de la semana
                </h2>
              </div>

              <Link
                href="/menu"
                className="hidden rounded-full bg-[#1F3D1B] px-6 py-3 font-bold text-white transition hover:bg-[#4F6F2A] sm:inline-block"
              >
                Ver menú
              </Link>
            </div>

            <div className="flex snap-x gap-4 overflow-x-auto pb-4">
              {weeklyPromotions.map((promo) => (
                <article
                  key={promo.id}
                  className="group min-w-[260px] snap-start overflow-hidden rounded-3xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl md:min-w-[310px]"
                >
                  <div className="flex h-32 items-center justify-center bg-[#1F3D1B] text-6xl transition group-hover:bg-[#4F6F2A]">
                    {promo.icon}
                  </div>

                  <div className="p-5">
                    <span className="rounded-full bg-[#F7F1E3] px-4 py-2 text-sm font-bold text-[#1F3D1B]">
                      {promo.day}
                    </span>

                    <h3 className="mt-5 min-h-[64px] text-2xl font-extrabold text-[#1F3D1B]">
                      {promo.title}
                    </h3>

                    <div className="mt-5 flex items-center justify-between gap-4">
                      <p className="text-3xl font-extrabold text-[#4F6F2A]">
                        {promo.label}
                      </p>

                      {promo.price > 0 ? (
                        <button
                          onClick={() =>
                            addPromoToCart({
                              id: promo.id,
                              title: promo.title,
                              price: promo.price,
                            })
                          }
                          className="rounded-full bg-[#1F3D1B] px-4 py-2 text-sm font-bold text-white transition hover:bg-[#4F6F2A]"
                        >
                          Agregar
                        </button>
                      ) : (
                        <Link
                          href="/menu"
                          className="rounded-full border-2 border-[#1F3D1B] px-4 py-2 text-sm font-bold text-[#1F3D1B] transition hover:bg-[#1F3D1B] hover:text-white"
                        >
                          Ver menú
                        </Link>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* ESTUDIANTES */}
          <section className="mb-8 rounded-[2rem] bg-[#1F3D1B] p-6 text-white shadow-md md:p-8">
            <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <div>
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-white/70">
                  Estudiantes
                </p>

                <h2 className="text-3xl font-extrabold">Menú estudiantil</h2>

                <div className="mt-4 flex items-center gap-4">
                  <p className="text-5xl font-extrabold text-[#C9D63B]">$100</p>

                  <span className="rounded-full bg-white px-4 py-2 text-sm font-bold text-[#1F3D1B]">
                    Credencial vigente
                  </span>
                </div>

                <p className="mt-4 text-white/80">
                  Elige una opción y acompáñala con café americano o jamaica.
                </p>

                <button
                  onClick={() =>
                    addPromoToCart({
                      id: 3001,
                      title: "Menú estudiantil",
                      price: 100,
                    })
                  }
                  className="mt-6 rounded-full bg-white px-6 py-3 font-bold text-[#1F3D1B] transition hover:bg-[#C9D63B]"
                >
                  Agregar promo
                </button>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {studentOptions.map((option) => (
                  <div
                    key={option}
                    className="rounded-2xl bg-white/10 px-4 py-3 text-sm font-bold"
                  >
                    {option}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ALIANZAS */}
          <section className="rounded-[2rem] bg-white p-6 shadow-md md:p-8">
            <div className="mb-8 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-[#4F6F2A]">
                  Alianzas
                </p>

                <h2 className="text-3xl font-extrabold text-[#1F3D1B]">
                  Beneficios para miembros
                </h2>

                <p className="mt-3 max-w-2xl text-gray-600">
                  Presenta tu membresía Olivo o credencial de aliado para
                  acceder a combos especiales.
                </p>
              </div>

              <div className="flex max-w-full gap-3 overflow-x-auto pb-2">
                {allianceLogos.map((logo) => (
                  <div
                    key={logo.name}
                    className="flex h-20 min-w-32 items-center justify-center rounded-2xl bg-[#F7F1E3] p-4 transition hover:-translate-y-1 hover:shadow-md"
                  >
                    <img
                      src={logo.image}
                      alt={logo.name}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {workoutCombos.map((combo) => (
                <article
                  key={combo.id}
                  className="group overflow-hidden rounded-3xl bg-[#F7F1E3] shadow-md transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex h-28 items-center justify-center bg-[#1F3D1B] text-5xl transition group-hover:bg-[#4F6F2A]">
                    {combo.icon}
                  </div>

                  <div className="p-5">
                    <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[#4F6F2A]">
                      {combo.type}
                    </p>

                    <h3 className="text-xl font-extrabold text-[#1F3D1B]">
                      {combo.name}
                    </h3>

                    <p className="mt-2 min-h-[48px] text-sm text-gray-600">
                      {combo.description}
                    </p>

                    <div className="mt-5 flex items-center justify-between gap-3">
                      <p className="text-2xl font-extrabold text-[#4F6F2A]">
                        ${combo.price}
                      </p>

                      <button
                        onClick={() =>
                          addPromoToCart({
                            id: combo.id,
                            title: `${combo.type} - ${combo.name}`,
                            price: combo.price,
                          })
                        }
                        className="rounded-full bg-[#1F3D1B] px-4 py-2 text-sm font-bold text-white transition hover:bg-[#4F6F2A]"
                      >
                        Agregar
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </section>

      <Footer />
    </main>
  );
}
