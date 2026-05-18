import { motion } from 'framer-motion'
import { Button } from 'antd'
import { FaWhatsapp } from 'react-icons/fa'
import { FiMail, FiMapPin, FiPhoneCall } from 'react-icons/fi'

const WHATSAPP_NUMBER = '5511999990000'
const WHATSAPP_MSG = encodeURIComponent(
  'Olá! Vim pelo site da ProClinic e quero pedir o Diagnóstico gratuito da minha clínica.',
)
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="glass-strong relative overflow-hidden rounded-[32px] p-8 md:p-14"
        >
          <div
            className="pointer-events-none absolute -top-32 -right-24 h-72 w-72 rounded-full opacity-60 blur-3xl"
            style={{
              background: 'radial-gradient(circle,#43d3b8,transparent 65%)',
            }}
          />
          <div
            className="pointer-events-none absolute -bottom-32 -left-24 h-72 w-72 rounded-full opacity-60 blur-3xl"
            style={{
              background: 'radial-gradient(circle,#1f8dff,transparent 65%)',
            }}
          />

          <div className="relative grid items-center gap-10 md:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-mint-300">
                Vamos conversar
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-5xl">
                Peça o seu Diagnóstico gratuito.
              </h2>
              <p className="mt-4 text-base text-white/70 md:text-lg">
                Mande uma mensagem no WhatsApp. Em até 5 minutos um especialista
                responde, entende o seu cenário e marca a sua reunião de
                descoberta — sem compromisso.
              </p>

              <ul className="mt-8 space-y-3 text-sm text-white/80">
                <li className="flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-xl glass-soft text-brand-300">
                    <FiPhoneCall />
                  </span>
                  +55 (11) 99999-0000
                </li>
                <li className="flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-xl glass-soft text-brand-300">
                    <FiMail />
                  </span>
                  ola@proclinic.app
                </li>
                <li className="flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-xl glass-soft text-brand-300">
                    <FiMapPin />
                  </span>
                  Av. Paulista, 1000 · São Paulo · SP
                </li>
              </ul>
            </div>

            <div className="flex flex-col items-center justify-center gap-5 text-center">
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
                className="grid h-24 w-24 place-items-center rounded-3xl text-white"
                style={{
                  background:
                    'linear-gradient(135deg, #25d366 0%, #128c7e 100%)',
                  boxShadow: '0 20px 50px -10px rgba(37,211,102,0.55)',
                }}
              >
                <FaWhatsapp size={48} />
              </motion.div>

              <p className="text-sm text-white/65">
                Atendimento humano, segunda a sábado, das 8h às 22h.
              </p>
              <p className="text-sm font-medium text-white">
                Quero meu Diagnóstico
              </p>

              <Button
                size="large"
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer noopener"
                icon={<FaWhatsapp size={20} />}
                className="shine"
                style={{
                  height: 60,
                  paddingInline: 36,
                  fontSize: 17,
                  fontWeight: 600,
                  background:
                    'linear-gradient(135deg, #25d366 0%, #128c7e 100%)',
                  border: '1px solid rgba(255,255,255,0.3)',
                  color: '#fff',
                  borderRadius: 20,
                  boxShadow: '0 18px 44px -12px rgba(37,211,102,0.55)',
                }}
              >
                Falar pelo WhatsApp
              </Button>

              <p className="text-[11px] uppercase tracking-widest text-white/45">
                Resposta em até 5 minutos
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
