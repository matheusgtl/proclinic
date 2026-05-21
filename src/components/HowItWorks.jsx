import { motion } from 'framer-motion'
import { FiCheck, FiX } from 'react-icons/fi'

const fits = [
  'Sua agenda oscila entre cheia e vazia sem previsibilidade',
  'A maior parte dos seus pacientes novos vem de indicação passiva',
  'Você já tentou contratar marketing ou agência e não viu resultado',
  'Sua recepção não tem script nem processo definido para converter leads',
  'Você não sabe seu custo de aquisição por paciente',
  'Você sente que trabalha mais do que ganha',
  'Você quer crescer mas não tem tempo para cuidar do comercial',
]

const notFits = [
  'Você está abrindo o consultório agora e ainda não tem operação estabelecida',
  'Você quer só uma agência para gerenciar redes sociais',
  'Você busca resultados em 30 dias sem envolver a equipe na implementação',
  'Você não está disposto a fazer parte do processo: o ProClinic trabalha com você, não para você',
]

export default function HowItWorks() {
  return (
    <section id="para-quem-e" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-mint-300">
            Para quem é
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-5xl">
            O ProClinic é para você se você se reconhece aqui.
          </h2>
          <p className="mt-4 text-base text-white/65 md:text-lg">
            Atendemos médicos e dentistas que têm uma prática estabelecida,
            atendem bem seus pacientes, mas não têm controle sobre a parte
            comercial da operação.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55 }}
            className="glass rounded-3xl p-7"
          >
            <div className="flex items-center gap-3">
              <span
                className="grid h-10 w-10 place-items-center rounded-2xl text-white"
                style={{ background: 'linear-gradient(135deg,#43d3b8,#1fb89a)' }}
              >
                <FiCheck size={18} />
              </span>
              <h3 className="text-lg font-semibold text-white">
                Você está no perfil certo se
              </h3>
            </div>
            <ul className="mt-5 space-y-3">
              {fits.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-white/85">
                  <span
                    className="mt-0.5 grid h-5 w-5 flex-none place-items-center rounded-full text-[10px] text-white"
                    style={{ background: 'linear-gradient(135deg,#43d3b8,#1fb89a)' }}
                  >
                    <FiCheck size={11} />
                  </span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="glass rounded-3xl p-7"
          >
            <div className="flex items-center gap-3">
              <span
                className="grid h-10 w-10 place-items-center rounded-2xl text-white"
                style={{ background: 'linear-gradient(135deg,#0a2547,#0563c2)' }}
              >
                <FiX size={18} />
              </span>
              <h3 className="text-lg font-semibold text-white">
                O ProClinic não é para você se
              </h3>
            </div>
            <ul className="mt-5 space-y-3">
              {notFits.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-white/65">
                  <span className="mt-0.5 grid h-5 w-5 flex-none place-items-center rounded-full bg-white/10 text-[10px] text-white/70">
                    <FiX size={11} />
                  </span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
