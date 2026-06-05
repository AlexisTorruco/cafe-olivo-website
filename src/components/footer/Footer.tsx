import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaFacebook,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#1F3D1B] px-4 py-12 text-white md:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">
        <div>
          <h2 className="mb-4 text-2xl font-extrabold">Olivo</h2>
          <p className="max-w-[220px] text-sm leading-relaxed text-white/80">
            Café restaurante con sabor, calidad e ingredientes frescos en cada
            platillo.
          </p>
        </div>

        <div>
          <h3 className="mb-4 font-bold uppercase tracking-wide">Contacto</h3>

          <div className="flex flex-col gap-3">
            <a
              href="https://wa.me/529171081821"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-base font-medium text-white transition hover:text-green-300"
            >
              <FaWhatsapp size={22} />
              Hacer pedido
            </a>

            <a
              href="https://www.instagram.com/olivo.ht/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-base text-white transition hover:text-pink-300"
            >
              <FaInstagram size={22} />
              Instagram
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=61568863451063"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-base text-white transition hover:text-blue-300"
            >
              <FaFacebook size={22} />
              Facebook
            </a>
          </div>
        </div>

        <div>
          <h3 className="mb-4 font-bold uppercase tracking-wide">Horario</h3>

          <p className="text-base text-white/80">Martes a domingo</p>

          <p className="mt-2 text-base text-white/80">8:00 AM - 4:30 PM</p>
        </div>

        <div id="ubicacion">
          <h3 className="mb-4 font-bold uppercase tracking-wide">Ubicación</h3>

          <a
            href="https://www.google.com/maps/place/Olivo+cafeter%C3%ADa/@17.835181,-93.395229,20.25z/data=!4m15!1m8!3m7!1s0x85ec22c95f347fa3:0x6d50258c0f54a849!2sPedro+C.+Colorado+147,+Centro,+86400+Huimanguillo,+Tab.!3b1!8m2!3d17.8351947!4d-93.3952194!16s%2Fg%2F11c291rtyh!3m5!1s0x85ec23000612f68f:0xc05f7ce6c6d3930a!8m2!3d17.835146!4d-93.3952067!16s%2Fg%2F11wy05rg3d"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/map-preview.png"
              alt="Ubicación Cafetería Olivo"
              className="mb-4 h-36 w-full rounded-xl object-cover transition hover:opacity-90"
            />
          </a>

          {/* <p className="mb-3 text-sm text-white/80">
            Pedro C. Colorado #147
            <br />
            Huimanguillo, Tabasco
          </p> */}

          <a
            href="https://www.google.com/maps/place/Olivo+cafeter%C3%ADa/@17.835181,-93.395229,20.25z/data=!4m15!1m8!3m7!1s0x85ec22c95f347fa3:0x6d50258c0f54a849!2sPedro+C.+Colorado+147,+Centro,+86400+Huimanguillo,+Tab.!3b1!8m2!3d17.8351947!4d-93.3952194!16s%2Fg%2F11c291rtyh!3m5!1s0x85ec23000612f68f:0xc05f7ce6c6d3930a!8m2!3d17.835146!4d-93.3952067!16s%2Fg%2F11wy05rg3d"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full border border-white px-4 py-2 text-sm font-bold transition hover:bg-white hover:text-[#1F3D1B]"
          >
            Cómo llegar
          </a>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-4 border-t border-white/20 pt-6 text-sm text-white/70 md:flex-row md:items-center md:justify-between">
        <p>
          © {new Date().getFullYear()} Cafetería Olivo. Todos los derechos
          reservados.
        </p>

        {/* <div className="flex gap-4">
          <a href="#" className="hover:text-white">
            Instagram
          </a>
          <a href="#" className="hover:text-white">
            Facebook
          </a>
        </div> */}
      </div>
    </footer>
  );
}
