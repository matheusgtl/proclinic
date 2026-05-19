import { motion } from 'framer-motion'
import { FiAlertCircle, FiCheckCircle } from 'react-icons/fi'

const situations = [
  'Meu consultório está cheio, mas não sobra dinheiro no final do mês',
  'Dependo de indicação para conseguir pacientes novos',
  'Contratei marketing, mas não vi resultado',
  'Não sei quantos pacientes vou ter no mês que vem',
  'Trabalho muito e ganho pouco',
  'Não tenho tempo para cuidar do comercial e ainda atender',
]

export default function Problem() {
  return (
    <section id="problema" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-mint-300">
              O problema
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-5xl">
              Você não foi formado para isso.{' '}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    'linear-gradient(120deg,#6fe7d1,#4ea7ff,#1f8dff)',
                }}
              >
                Nós fomos.
              </span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/70 md:text-lg">
              Médicos e dentistas são preparados para tratar. Não para captar,
              converter, reter e medir. O resultado é sempre o mesmo: agenda
              instável, receita que oscila, dependência total de indicação e a
              sensação de que trabalha mais do que ganha.
            </p>
            <p className="mt-4 text-base text-white/85 md:text-lg">
              <span className="font-semibold text-white">Esse não é um
              problema de qualidade. É um problema de estrutura.</span>
            </p>
          </motion.div>

          <motion.ul
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.07 } },
            }}
            className="space-y-3"
          >
            {situations.map((s) => (
              <motion.li
                key={s}
                variants={{
                  hidden: { opacity: 0, y: 12 },
                  show: { opacity: 1, y: 0 },
                }}
                className="glass flex items-start gap-3 rounded-2xl p-4"
              >
                <FiAlertCircle className="mt-0.5 flex-none text-brand-300" size={20} />
                <p className="text-[15px] leading-relaxed text-white/85">
                  <span className="italic">"{s}"</span>
                </p>
              </motion.li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="glass-strong isolate relative mt-16 overflow-hidden rounded-[28px] p-8 md:p-12"
          style={{ WebkitMaskImage: '-webkit-radial-gradient(white, black)' }}
        >
          <div
            className="pointer-events-none absolute -top-32 -right-24 h-72 w-72 rounded-full opacity-50 blur-3xl"
            style={{
              background: 'radial-gradient(circle,#43d3b8,transparent 65%)',
            }}
          />
          <div className="relative grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-mint-300">
                A solução
              </p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white md:text-4xl">
                Estrutura comercial completa.{' '}
                <span className="text-white/60">Não consultoria.</span>{' '}
                Implementação.
              </h3>
              <p className="mt-4 text-base leading-relaxed text-white/70 md:text-lg">
                O ProClinic não entrega um relatório de diagnóstico nem um plano
                de 90 dias para você executar sozinho. Entramos na operação,
                implementamos ao lado da sua equipe e acompanhamos os
                resultados. O que fica é estrutura funcionando — não dependência
                de uma agência.
              </p>
            </div>

            <div className="glass rounded-3xl p-6">
              <p className="text-[11px] uppercase tracking-widest text-mint-300">
                O que muda com o ProClinic
              </p>
              <ul className="mt-4 space-y-3 text-sm text-white/85">
                {[
                  'Você passa a saber quantos pacientes novos vai ter no mês',
                  'Sua recepção sabe o que dizer e quando',
                  'Seu CRM acompanha cada lead',
                  'Seu conteúdo atrai o paciente certo',
                  'Sua receita para de depender de sorte',
                ].map((i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <FiCheckCircle className="mt-0.5 flex-none text-mint-400" size={18} />
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
