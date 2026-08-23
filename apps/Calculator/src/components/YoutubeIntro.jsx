import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function YouTubeStyleIntro() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.5,
      },
    },
    exit: {
      opacity: 0,
      y: -50,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background: Main Website Page */}
      <div className="absolute inset-0 bg-blue-600 flex items-center justify-center">
        <h1 className="text-white text-6xl md:text-8xl font-black tracking-tighter">
          HELLO WORLD
        </h1>
      </div>

      {/* Overlay: YouTube Style Intro */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            key="intro-overlay"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/70 backdrop-blur-xl"
          >
            <div className="flex flex-col items-center gap-8">
              {/* Profile Image */}
              <motion.div
                variants={itemVariants}
                className="w-32 h-32 md:w-48 md:h-48 rounded-full border-4 border-white shadow-2xl overflow-hidden bg-white/10"
              >
                <img
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=300&h=300"
                  alt="Avatar"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Title & Subtitle */}
              <div className="text-center space-y-4">
                <motion.h2
                  variants={itemVariants}
                  className="text-white text-5xl md:text-7xl font-black tracking-tighter uppercase"
                >
                  YOUR NAME
                </motion.h2>
                <motion.p
                  variants={itemVariants}
                  className="text-white/60 text-lg md:text-xl tracking-[0.5em] font-light uppercase"
                >
                  Creative Developer
                </motion.p>
              </div>
            </div>

            {/* Countdown Progress Bar */}
            <div className="absolute bottom-20 w-64 h-[2px] bg-white/10 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 10, ease: "linear" }}
                className="h-full bg-white"
              />
            </div>
            <p className="absolute bottom-12 text-white/30 text-[10px] tracking-[0.4em] uppercase">
              Initializing Experience
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
