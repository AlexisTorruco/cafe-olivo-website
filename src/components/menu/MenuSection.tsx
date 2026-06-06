const featuredMenu = [
  {
    name: "Molletes con cecina",
    description:
      "Pan brioche con frijoles, cecina y queso gratinado, acompañado de pico de gallo y aderezo chipotle.",
    price: "$120",
    image: "/images/menu/molletes-con-cecina.png",
  },
  {
    name: "Molletes con huevos al gusto",
    description:
      "Molletes con huevos al gusto, acompañados de frijoles, queso gratinado, pico de gallo y aderezo chipotle.",
    price: "$155",
    image: "/images/menu/molletes-con-huevo-2.png",
  },
  {
    name: "Frappé de Avellana",
    description: "Cremoso, dulce y perfectamente irresistible.",
    price: "$85",
    image: "/images/menu/frappe-avellana-2.png",
  },
];

export default function MenuSection() {
  return (
    <section
      id="menu"
      className="relative overflow-hidden bg-white px-4 py-24 md:px-8"
    >
      <div className="absolute left-0 top-0 h-5 w-full bg-[#F7F1E3]" />

      <div className="absolute left-1/2 top-5 h-1 w-24 -translate-x-1/2 rounded-full bg-[#4F6F2A]" />

      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-[#4F6F2A]">
            Recomendados
          </p>

          <h2 className="text-3xl font-extrabold text-[#1F3D1B] md:text-5xl">
            Los más vendidos de Olivo
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Una selección de los platillos y bebidas que más disfrutan nuestros
            clientes.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {featuredMenu.map((item) => (
            <article
              key={item.name}
              className="group flex h-full flex-col overflow-hidden rounded-3xl bg-[#F7F1E3] shadow-md transition hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-56 w-full object-cover object-center transition duration-700 group-hover:scale-105"
                />
              </div>

              <div className="flex h-full flex-col p-6">
                <h3 className="mb-3 text-2xl font-extrabold text-[#1F3D1B]">
                  {item.name}
                </h3>

                <p className="mb-5 line-clamp-3 leading-relaxed text-gray-600">
                  {item.description}
                </p>

                <div className="mt-auto flex items-center justify-between gap-4">
                  <span className="text-2xl font-extrabold text-[#4F6F2A]">
                    {item.price}
                  </span>

                  {/* <a
                    href="/menu"
                    className="rounded-full border-2 border-[#1F3D1B] px-5 py-2 text-sm font-bold text-[#1F3D1B] transition hover:bg-[#1F3D1B] hover:text-white"
                  >
                    Ver
                  </a> */}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="/menu"
            className="inline-block rounded-full bg-[#111827] px-8 py-4 font-bold text-white transition hover:bg-[#4F6F2A]"
          >
            Ver menú completo
          </a>
        </div>
      </div>
    </section>
  );
}
