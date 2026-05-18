import { FaInstagram, FaLinkedin, FaYoutube, FaWhatsapp } from 'react-icons/fa'

const cols = [
  {
    title: 'Soluções',
    items: ['Captação', 'Conversão', 'Retorno', 'Branding'],
  },
  {
    title: 'Agência',
    items: ['Sobre nós', 'Método', 'Cases', 'Carreiras'],
  },
  {
    title: 'Conteúdo',
    items: ['Blog', 'Instagram', 'YouTube', 'Diagnóstico gratuito'],
  },
]

export default function Footer() {
  return (
    <footer className="relative pb-10 pt-10">
      <div className="mx-auto max-w-7xl px-5">
        <div className="glass rounded-3xl p-8 md:p-10">
          <div className="grid gap-10 md:grid-cols-[1.4fr_repeat(3,1fr)]">
            <div>
              <div className="flex items-center gap-2.5">
                <img
                  src="/proclinic-logo.png"
                  alt="ProClinic"
                  className="h-10 w-10 rounded-xl object-cover"
                />
                <span className="text-lg font-semibold tracking-tight text-white">
                  Pro<span className="text-brand-300">Clinic</span>
                </span>
              </div>
              <p className="mt-4 max-w-sm text-sm text-white/60">
                A agência de marketing especializada em clínicas. Implantamos
                um sistema de captação, conversão e retorno de pacientes que
                faz a sua clínica faturar mais.
              </p>
              <div className="mt-5 flex gap-3 text-white/70">
                {[FaInstagram, FaLinkedin, FaYoutube, FaWhatsapp].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="grid h-10 w-10 place-items-center rounded-xl glass-soft transition hover:text-white"
                    aria-label="social"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>

            {cols.map((c) => (
              <div key={c.title}>
                <p className="text-sm font-semibold text-white">{c.title}</p>
                <ul className="mt-4 space-y-2">
                  {c.items.map((i) => (
                    <li key={i}>
                      <a
                        href="#"
                        className="text-sm text-white/60 transition hover:text-white"
                      >
                        {i}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/50 md:flex-row">
            <p>© 2026 ProClinic · Agência de marketing para clínicas · CNPJ 00.000.000/0001-00</p>
            <p>Feito com carinho em São Paulo, Brasil.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
