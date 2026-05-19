import { motion } from 'framer-motion'
import { FiBookOpen, FiTrendingUp, FiBriefcase } from 'react-icons/fi'

const highlights = [
  {
    icon: FiBookOpen,
    title: 'Publicitário · MBA FGV',
    detail: '25+ anos em marketing, vendas e operações comerciais',
  },
  {
    icon: FiBriefcase,
    title: 'TAM · Novartis · Merial · Microsules',
    detail: 'Alta exigência comercial e escala antes de empreender',
  },
  {
    icon: FiTrendingUp,
    title: '+200 negócios estruturados · 10M+ views/mês',
    detail: 'Especialista em RevOps e Receita Previsível',
  },
]

export default function Founder() {
  return (
    <section id="sobre" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.05fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-mint-300">
              Como o ProClinic nasceu
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-5xl">
              Tudo começou com uma{' '}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    'linear-gradient(120deg,#6fe7d1,#4ea7ff,#1f8dff)',
                }}
              >
                ligação de amigos.
              </span>
            </h2>
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-white/75 md:text-base">
              <p>
                Um casal que Huilter conhecia há anos pediu ajuda: trabalhavam
                muito, atendiam bem, tinham estrutura — mas a agenda instável
                tornava impossível planejar qualquer coisa.
              </p>
              <p>
                O diagnóstico foi imediato. O problema não era a qualidade do
                atendimento. Era a <span className="text-white">ausência
                completa de estrutura comercial</span>: nenhum processo de
                captação, métricas inexistentes, agendamento dependendo da
                memória da recepcionista, indicação passiva como único canal.
              </p>
              <p>
                A implementação levou alguns meses. O resultado foi uma virada
                — da instabilidade para um fluxo previsível de novos pacientes,
                com agenda controlada e receita que dava para planejar.
              </p>
              <p>
                Ficou claro que esse problema é{' '}
                <span className="text-white">sistemático</span>. Médicos e
                dentistas são formados para tratar. O ProClinic existe para
                estruturar o resto.
              </p>
            </div>

            <div className="glass-soft mt-8 rounded-2xl p-5">
              <p className="text-[11px] uppercase tracking-widest text-mint-300">
                Missão
              </p>
              <p className="mt-2 text-[15px] leading-relaxed text-white/85">
                Transformar a operação comercial de médicos e dentistas em uma
                estrutura previsível, escalável e independente de agências —
                implementando ao lado da equipe, não entregando um plano para
                executar sozinho.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass-strong isolate relative overflow-hidden rounded-[28px] p-7 md:p-9"
            style={{ WebkitMaskImage: '-webkit-radial-gradient(white, black)' }}
          >
            <div
              className="pointer-events-none absolute -top-24 -right-16 h-60 w-60 rounded-full opacity-50 blur-3xl"
              style={{
                background: 'radial-gradient(circle,#1f8dff,transparent 65%)',
              }}
            />

            <div className="relative">
              <p className="text-[11px] uppercase tracking-widest text-white/45">
                Fundador
              </p>

              <div className="mt-5 grid items-start gap-6 sm:grid-cols-[minmax(180px,240px)_1fr]">
                <div
                  className="relative aspect-[3/4] w-full overflow-hidden rounded-3xl"
                  style={{
                    boxShadow:
                      '0 22px 50px -16px rgba(31,141,255,0.5), inset 0 0 0 1px rgba(255,255,255,0.18)',
                  }}
                >
                  <img
                    src="/huilter-ladir.jpg"
                    alt="Huilter Ladir, fundador do ProClinic"
                    className="h-full w-full object-cover"
                  />
                  <div
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3"
                    style={{
                      background:
                        'linear-gradient(180deg, transparent 0%, rgba(4,18,42,0.6) 100%)',
                    }}
                  />
                </div>

                <div>
                  <p className="text-2xl font-semibold leading-tight text-white">
                    Huilter Ladir
                  </p>
                  <p className="mt-1 text-sm text-white/60">
                    Publicitário · MBA FGV · Especialista em RevOps
                  </p>

                  <p className="mt-5 text-[15px] leading-relaxed text-white/75">
                    Empreende em serviços desde os 16 anos. Nos últimos 10
                    anos, construiu canais de conteúdo digital com mais de{' '}
                    <span className="text-white">10 milhões de visualizações
                    mensais</span> — o que o tornou especialista não só em
                    audiência, mas em como converter atenção em receita.
                  </p>
                  <p className="mt-3 text-[15px] leading-relaxed text-white/75">
                    Ao longo da trajetória, impactou{' '}
                    <span className="text-white">mais de 200 negócios</span>{' '}
                    estruturando captação, atendimento, conversão e
                    recorrência — aumentando o LTV e reduzindo o CAC de
                    clínicas, consultórios e empresas de serviços.
                  </p>
                </div>
              </div>

              <ul className="mt-7 space-y-3">
                {highlights.map((h) => (
                  <li key={h.title} className="glass flex items-start gap-3 rounded-2xl p-3">
                    <span
                      className="grid h-9 w-9 flex-none place-items-center rounded-xl text-white"
                      style={{ background: 'linear-gradient(135deg,#1f8dff,#0563c2)' }}
                    >
                      <h.icon size={16} />
                    </span>
                    <div>
                      <p className="text-sm font-medium text-white">{h.title}</p>
                      <p className="text-xs text-white/55">{h.detail}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
