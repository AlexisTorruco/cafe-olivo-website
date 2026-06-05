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
    <section id="menu" className="bg-[#F7F1E3] px-4 py-20 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-[#4F6F2A]">
            Menú
          </p>

          <h2 className="text-3xl font-extrabold text-[#1F3D1B] md:text-5xl">
            Nuestros favoritos
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            Algunos de los platillos y bebidas más pedidos en Olivo.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {featuredMenu.map((item) => (
            <article
              key={item.name}
              className="rounded-3xl bg-white p-6 shadow-md transition hover:-translate-y-2 hover:shadow-xl"
            >
              <img
                src={item.image}
                alt={item.name}
                className="mb-4 h-48 w-full rounded-2xl object-cover"
              />

              <h3 className="mb-3 text-2xl font-bold text-[#1F3D1B]">
                {item.name}
              </h3>

              <p className="mb-4 text-gray-600">{item.description}</p>

              <span className="text-xl font-bold text-[#4F6F2A]">
                {item.price}
              </span>
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
