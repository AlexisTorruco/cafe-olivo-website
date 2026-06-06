import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import Link from "next/link";

const weeklyPromotions = [
  {
    day: "Martes",
    title: "Chilaquiles con huevo",
    price: "$100",
    description: "Una promo perfecta para iniciar el día con sabor.",
  },
  {
    day: "Miércoles",
    title: "Ensalada Olivo + Soda Italiana",
    price: "$160",
    description: "Ligero, fresco y con bebida incluida.",
  },
  {
    day: "Jueves",
    title: "Frappé 2x1",
    price: "2x1",
    description: "Ideal para compartir algo dulce y bien frío.",
  },
  {
    day: "Viernes",
    title: "Tacos de pollo pastor + Coca-Cola",
    price: "$145",
    description: "Promo con sabor mexicano para cerrar la semana.",
  },
  {
    day: "Sábado",
    title: "Smoothie",
    price: "$65",
    description: "Refrescante, natural y perfecto para el calor.",
  },
  {
    day: "Domingo",
    title: "Wrap de pollo + Limonada fresa",
    price: "$130",
    description: "Una opción completa, fresca y deliciosa.",
  },
];

const studentOptions = [
  "Chilaquiles con pollo o huevo",
  "Sándwich de jamón",
  "Wrap de pollo",
  "Ensalada César",
  "Tacos de pollo pastor",
];

const alliances = [
  {
    name: "RA Calisthenics Center",
    description:
      "Beneficios para miembros enfocados en energía, bienestar y alimentación balanceada.",
  },
  {
    name: "Studio-Angh",
    description:
      "Alianza pensada para quienes buscan cuidar su cuerpo y disfrutar opciones frescas.",
  },
];

export default function PromotionsPage() {
  return (
    <main className="bg-[#F7F1E3]">
      <Navbar />

      <section className="px-4 py-16 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-[#4F6F2A]">
              Promociones
            </p>

            <h1 className="text-4xl font-extrabold text-[#1F3D1B] md:text-6xl">
              Promos para disfrutar más Olivo
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Conoce nuestras promociones semanales, beneficios para estudiantes
              y alianzas especiales.
            </p>
          </div>

          {/* PROMOS SEMANALES */}
          <section className="mb-16">
            <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="mb-2 text-sm font-bold uppercase tracking-[0.3em] text-[#4F6F2A]">
                  Semana
                </p>
                <h2 className="text-3xl font-extrabold text-[#1F3D1B] md:text-5xl">
                  Promociones de la semana
                </h2>
              </div>

              <Link
                href="/menu"
                className="w-fit rounded-full bg-[#1F3D1B] px-6 py-3 font-bold text-white transition hover:bg-[#4F6F2A]"
              >
                Ver menú
              </Link>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {weeklyPromotions.map((promo) => (
                <article
                  key={promo.day}
                  className="rounded-3xl bg-white p-6 shadow-md transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <span className="rounded-full bg-[#4F6F2A] px-4 py-2 text-sm font-bold text-white">
                    {promo.day}
                  </span>

                  <h3 className="mt-5 text-2xl font-extrabold text-[#1F3D1B]">
                    {promo.title}
                  </h3>

                  <p className="mt-3 text-gray-600">{promo.description}</p>

                  <p className="mt-6 text-3xl font-extrabold text-[#4F6F2A]">
                    {promo.price}
                  </p>
                </article>
              ))}
            </div>
          </section>

          {/* PROMO ESTUDIANTES */}
          <section className="mb-16 rounded-[2rem] bg-[#1F3D1B] p-6 text-white md:p-10">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-white/70">
                  Estudiantes
                </p>

                <h2 className="text-3xl font-extrabold md:text-5xl">
                  Menú estudiantil
                </h2>

                <p className="mt-4 text-5xl font-extrabold text-[#C9D63B]">
                  $100 MXN
                </p>

                <p className="mt-4 text-white/80">
                  Elige una opción de comida y acompáñala con café americano o
                  agua de jamaica.
                </p>

                <p className="mt-4 rounded-2xl bg-white/10 p-4 font-bold">
                  Aplica presentando credencial estudiantil vigente.
                </p>
              </div>

              <div className="rounded-3xl bg-white p-6 text-[#1F3D1B]">
                <h3 className="mb-4 text-2xl font-extrabold">
                  Opciones disponibles
                </h3>

                <ul className="grid gap-3">
                  {studentOptions.map((option) => (
                    <li
                      key={option}
                      className="rounded-2xl bg-[#F7F1E3] px-4 py-3 font-bold"
                    >
                      {option}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 rounded-2xl border border-[#E8E0CC] p-4">
                  <p className="font-bold">Bebida incluida:</p>
                  <p className="mt-1 text-gray-600">
                    Café americano o agua de jamaica.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ALIANZAS */}
          <section className="mb-16">
            <div className="mb-8 text-center">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-[#4F6F2A]">
                Convenios
              </p>

              <h2 className="text-3xl font-extrabold text-[#1F3D1B] md:text-5xl">
                Alianzas Olivo
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-gray-600">
                Beneficios especiales para miembros de nuestros aliados.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {alliances.map((alliance) => (
                <article
                  key={alliance.name}
                  className="rounded-3xl bg-white p-8 shadow-md"
                >
                  <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-[#4F6F2A]">
                    Aliado
                  </p>

                  <h3 className="text-3xl font-extrabold text-[#1F3D1B]">
                    {alliance.name}
                  </h3>

                  <p className="mt-4 text-gray-600">{alliance.description}</p>

                  <p className="mt-6 rounded-2xl bg-[#F7F1E3] p-4 font-bold text-[#1F3D1B]">
                    Presenta tu membresía o credencial de aliado para conocer
                    los beneficios disponibles.
                  </p>
                </article>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="rounded-[2rem] bg-white p-8 text-center shadow-md">
            <h2 className="text-3xl font-extrabold text-[#1F3D1B] md:text-5xl">
              ¿Listo para pedir?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Explora el menú digital, arma tu pedido y envíalo directo por
              WhatsApp.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/menu"
                className="rounded-full bg-[#1F3D1B] px-8 py-4 font-bold text-white transition hover:bg-[#4F6F2A]"
              >
                Ver menú digital
              </Link>

              <a
                href="https://wa.me/529171081821"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border-2 border-[#1F3D1B] px-8 py-4 font-bold text-[#1F3D1B] transition hover:bg-[#1F3D1B] hover:text-white"
              >
                Escribir por WhatsApp
              </a>
            </div>
          </section>
        </div>
      </section>

      <Footer />
    </main>
  );
}
