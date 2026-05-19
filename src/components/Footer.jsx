const INSTAGRAM_URL = 'https://www.instagram.com/proclinic_oficial/'

const cols = [
  {
    title: 'Navegar',
    items: [
      { label: 'Problema', href: '#problema' },
      { label: 'Como funciona', href: '#features' },
      { label: 'Para quem é', href: '#para-quem-e' },
      { label: 'Resultados', href: '#resultados' },
    ],
  },
  {
    title: 'ProClinic',
    items: [
      { label: 'Sobre', href: '#sobre' },
      { label: 'Fundador', href: '#sobre' },
      { label: 'Missão', href: '#sobre' },
      { label: 'Diagnóstico', href: '#contact' },
    ],
  },
  {
    title: 'Contato',
    items: [
      { label: 'WhatsApp', href: '#contact' },
      { label: 'Instagram · @proclinic_oficial', href: INSTAGRAM_URL, external: true },
      { label: 'Política de Privacidade', href: '#' },
    ],
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
                Estrutura comercial completa para médicos e dentistas.
                Implementação, não consultoria. Receita previsível com método,
                IA, CRM e métricas — implementadas ao lado da sua equipe.
              </p>
            </div>

            {cols.map((c) => (
              <div key={c.title}>
                <p className="text-sm font-semibold text-white">{c.title}</p>
                <ul className="mt-4 space-y-2">
                  {c.items.map((i) => (
                    <li key={i.label}>
                      <a
                        href={i.href}
                        target={i.external ? '_blank' : undefined}
                        rel={i.external ? 'noreferrer noopener' : undefined}
                        className="text-sm text-white/60 transition hover:text-white"
                      >
                        {i.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/50 md:flex-row">
            <p>© 2025 ProClinic · Estrutura Comercial Completa para Médicos e Dentistas</p>
            <p>Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
