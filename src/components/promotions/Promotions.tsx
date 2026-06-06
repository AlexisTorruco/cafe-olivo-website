const promotions = [
  {
    title: "Molletes con huevo",
    description: "Sabor que reconforta desde el primer bocado.",
    tag: "Recomendado",
  },
  {
    title: "Pan francés con fresas",
    description: "Clásico, dulce y reconfortante.",
    tag: "Favorito",
  },
  {
    title: "Frappé de avellana",
    description: "Cremoso, dulce y perfectamente irresistible.",
    tag: "Nuevo",
  },
];

export default function Promotions() {
  return (
    <section id="promociones" className="bg-white px-4 py-20 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-[#4F6F2A]">
            Promociones
          </p>

          <h2 className="text-3xl font-extrabold text-[#1F3D1B] md:text-5xl">
            Las mejores ofertas para ti
          </h2>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-4 md:grid md:grid-cols-2 md:gap-6 lg:grid-cols-3">
          {promotions.map((promo) => (
            <article
              key={promo.title}
              className="min-w-[280px] rounded-3xl bg-white p-6 shadow-md transition hover:-translate-y-1 hover:shadow-xl md:min-w-0"
            >
              <span className="mb-4 inline-block rounded-full bg-[#4F6F2A] px-4 py-1 text-sm font-bold text-white">
                {promo.tag}
              </span>

              <h3 className="mb-3 text-2xl font-bold text-[#1F3D1B]">
                {promo.title}
              </h3>

              <p className="text-[#4B5563]">{promo.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
