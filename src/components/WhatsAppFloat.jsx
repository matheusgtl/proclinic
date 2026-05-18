import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'

const WHATSAPP_NUMBER = '5511999990000'
const WHATSAPP_MSG = encodeURIComponent(
  'Olá! Vim pelo site da ProClinic e quero pedir o Diagnóstico gratuito da minha clínica.',
)
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`

export default function WhatsAppFloat() {
  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer noopener"
      aria-label="Falar pelo WhatsApp"
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.2, duration: 0.5, ease: 'easeOut' }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full text-white"
      style={{
        background: 'linear-gradient(135deg,#25d366 0%,#128c7e 100%)',
        boxShadow:
          '0 18px 40px -10px rgba(37,211,102,0.6), inset 0 1px 0 rgba(255,255,255,0.35)',
        border: '1px solid rgba(255,255,255,0.25)',
      }}
    >
      <span
        className="absolute inset-0 rounded-full"
        style={{
          boxShadow: '0 0 0 0 rgba(37,211,102,0.6)',
          animation: 'pulseWa 2.2s ease-out infinite',
        }}
      />
      <FaWhatsapp size={26} />
      <style>{`
        @keyframes pulseWa {
          0% { box-shadow: 0 0 0 0 rgba(37,211,102,0.55); }
          70% { box-shadow: 0 0 0 18px rgba(37,211,102,0); }
          100% { box-shadow: 0 0 0 0 rgba(37,211,102,0); }
        }
      `}</style>
    </motion.a>
  )
}
