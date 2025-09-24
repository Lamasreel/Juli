import React, { useState } from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function RomanticPage() {
  const [showHeartsModal, setShowHeartsModal] = useState(false);

  const heartVariants = {
    rest: { scale: 1 },
    beat: {
      scale: [1, 1.18, 1],
      transition: { duration: 0.9, repeat: Infinity, ease: "easeInOut" },
    },
  };

  // Componente de Rosa
  const Rose = ({ size = 80 }) => (
    <motion.svg
      className={`w-${size} h-${size}`}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      animate={{ rotate: [0, 360] }}
      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
    >
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i * 360) / 12;
        return (
          <path
            key={i}
            d="M32 32 C36 20, 50 24, 32 32 C14 24, 28 20, 32 32"
            fill="#F472B6"
            transform={`rotate(${angle} 32 32)`}
          />
        );
      })}
      <circle cx="32" cy="32" r="6" fill="#DB2777" />
    </motion.svg>
  );

  // Corazones flotantes en toda la pantalla
  const ScreenHearts = () => (
    <>
      {Array.from({ length: 100 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-pink-500"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            fontSize: `${Math.random() * 24 + 12}px`,
          }}
          animate={{
            y: ["0%", `${Math.random() * 20 - 10}%`, "0%"],
            x: ["0%", `${Math.random() * 20 - 10}%`, "0%"],
            rotate: [0, 360],
          }}
          transition={{
            duration: 4 + Math.random() * 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 2,
          }}
        >
          ❤️
        </motion.div>
      ))}
    </>
  );

  // Corazones flotantes para el modal
  const FloatingHearts = () => (
    <>
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-pink-500 text-3xl"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{ y: ["0%", "-100%"], opacity: [1, 0] }}
          transition={{ duration: 3 + Math.random() * 2, repeat: Infinity, delay: Math.random() }}
        >
          ❤️
        </motion.div>
      ))}
    </>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-100 via-sky-200 to-indigo-100 flex flex-col items-center justify-center p-6 overflow-hidden">
      {/* Corazones en toda la pantalla */}
      <ScreenHearts />

      {/* Card principal */}
      <div className="relative w-full max-w-4xl rounded-3xl shadow-2xl bg-white/70 backdrop-blur-md border border-white/20 overflow-hidden z-10">
        {/* Fondo con rosas animadas */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -left-10 top-6 opacity-50">
            <Rose size={120} />
          </div>
          <div className="absolute right-8 bottom-6 opacity-40">
            <Rose size={100} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8">
          {/* Lado izquierdo */}
          <div className="flex flex-col justify-center items-start gap-6">
            <motion.h1
              className="text-4xl md:text-5xl font-extrabold tracking-tight text-pink-600 flex items-center gap-3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Heart size={36} />
              Amorchito Juli
            </motion.h1>

            <motion.p
              className="text-lg text-slate-700/90 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25 }}
            >
              Amor, queria no solo escribirte una carta de forma virtual, sino que quise hacerte esta pequeña landing page.
              Gracias por siempre bancarme en todo, tu sonrisa es lo que me mantiene activo y con ganas de seguir trabajando
              despues de una decaida, sos todo lo que quiero hoy y siempre, quiero que empecemos a hacer las cosas bien
              quiero realmente estar con vos para siempre, porque a tu lado sigo sintiendome muy bien.
              Te amo muchisisisisisisisisisimo amor, espero algun dia nos lleguemos a casar.
              Estos dias que las pasamos juntos me hizo entender que solo quiero quedarme ahi, ahi en tus brazos, seguir compartiendo con tu familia
              que poco a poco me hacen parte de ustedes.
              Espero te haya gustado la mini pagina mi amor.            </motion.p>

            <div className="flex gap-3 mt-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-pink-600 text-white px-5 py-3 rounded-xl shadow-lg hover:shadow-2xl font-bold"
                onClick={() => setShowHeartsModal(true)}
              >
                Presionalo!!!!
              </motion.button>
            </div>
          </div>

          {/* Lado derecho */}
          <div className="flex items-center justify-center">
            <div className="w-full max-w-md rounded-2xl overflow-hidden bg-gradient-to-tr from-white/80 to-pink-50 shadow-lg border border-white/30 p-6">
              <div className="aspect-[4/3] rounded-lg overflow-hidden flex items-center justify-center mb-4">
                <Rose size={160} />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 text-center">
                ELLA SABIA QUE SABIA QUE SABIA QUE SABIA QUE SABIA QUE SABIA MUY SABIAAAAA
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* Modal de corazones */}
      {showHeartsModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setShowHeartsModal(false)} />
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ opacity: 0 }}
            className="relative z-10 w-full max-w-sm bg-white rounded-2xl p-6 shadow-2xl border border-white/20 flex flex-col items-center justify-center gap-4"
          >
            <h2 className="text-3xl font-bold text-pink-500 text-center">Lo volvemos a intentar?</h2>
            <FloatingHearts />
            <button
              onClick={() => setShowHeartsModal(false)}
              className="mt-4 px-6 py-2 bg-pink-500 text-white rounded-xl shadow hover:bg-pink-600"
            >
              Síii!
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
}
