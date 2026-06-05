export default function AboutUs() {
  return (
    <section id="nosotros" className="bg-white px-4 py-20 md:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
        <div className="overflow-hidden rounded-3xl bg-[#F7F1E3] p-4 shadow-xl">
          <img
            src="/images/about/chef-jorge.jpg"
            alt="Chef Jorge Torruco"
            className="h-[420px] w-full rounded-2xl object-cover object-top"
          />
        </div>

        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-[#4F6F2A]">
            Nosotros
          </p>

          <h2 className="mb-6 text-3xl font-extrabold text-[#1F3D1B] md:text-5xl">
            Más que una cafetería, un lugar para disfrutar.
          </h2>

          <p className="mb-6 text-lg leading-relaxed text-gray-600">
            En Cafetería Olivo creemos que una buena comida puede convertirse en
            un gran momento. Nuestro concepto combina sabor, calidad e
            ingredientes frescos en cada platillo.
          </p>

          <h3 className="mb-4 text-2xl font-bold text-[#1F3D1B]">
            Chef Jorge Torruco
          </h3>

          <p className="mb-6 text-lg leading-relaxed text-gray-600">
            Con experiencia en la preparación de alimentos para eventos
            sociales, banquetes y celebraciones especiales, Jorge Torruco
            comparte en Olivo su pasión por la cocina, el servicio y la
            hospitalidad.
          </p>

          <ul className="grid gap-3 text-gray-700 sm:grid-cols-2">
            <li>✓ Bodas</li>
            <li>✓ XV años</li>
            <li>✓ Eventos privados</li>
            <li>✓ Banquetes especiales</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
