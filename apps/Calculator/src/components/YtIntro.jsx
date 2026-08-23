import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * YouTubeStyleIntro Component (JSX Version)
 * Handles both the background "Hello World" content and the
 * YouTube-style intro overlay that disappears after 10 seconds.
 */
export default function YouTubeStyleIntro() {
  const [shouldShow, setShouldShow] = useState(false);

  useEffect(() => {
    let hideTimer;
    let showTimer;

    const startCycle = () => {
      // Wait 1 second before showing
      showTimer = setTimeout(() => {
        setShouldShow(true);

        // Stay visible for 10 seconds
        hideTimer = setTimeout(() => {
          setShouldShow(false);
          // Restart the cycle after 1 second of being hidden
          startCycle();
        }, 10000);
      }, 8000);
    };

    startCycle();

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, x: -100, y: 50, scale: 0.8 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
    exit: {
      opacity: 0,
      x: -50,
      scale: 0.9,
      transition: { duration: 0.5, ease: "easeInOut" },
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
    <div>
      {/* Background: Main Website Page
      <div className="absolute inset-0 bg-blue-600 flex items-center justify-center">
        <h1 className="text-white text-6xl md:text-8xl font-black tracking-tighter">
          HELLO WORLD
        </h1>
      </div> */}

      {/* Notification-style Intro at Bottom Left */}
      <AnimatePresence>
        {shouldShow && (
          <motion.div
            key="intro-notification"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed bottom-6 left-6 z-50 flex items-center gap-4 p-4 rounded-2xl bg-black/80 backdrop-blur-xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] max-w-[320px] md:max-w-[400px]"
          >
            {/* Profile Image */}
            <motion.div
              variants={itemVariants}
              className="w-16 h-16 md:w-20 md:h-20 flex-shrink-0 rounded-full border-2 border-white/20 overflow-hidden "
            >
              <img
                src="https://marketerarif.vercel.app/images/marketerarifImages/marketerarifHossain.jpg?auto=format&fit=crop&q=80&w=200&h=200"
                alt="Avatar"
                className="w-full h-full object-cover "
              />
            </motion.div>

            {/* Title & Subtitle */}
            <div className="flex-grow">
              <motion.h2
                variants={itemVariants}
                className="text-white text-lg md:text-xl font-bold tracking-tight uppercase"
              >
                Arif Hossain
              </motion.h2>
              <motion.p
                variants={itemVariants}
                className="text-white/50 text-[10px] md:text-xs tracking-widest font-light uppercase mt-1"
              >
                MERN Stack Developer
              </motion.p>

              {/* Progress Bar inside notification */}
              <div className="mt-3 w-full h-[1px] bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 10, ease: "linear" }}
                  className="h-full bg-blue-500"
                />
              </div>
            </div>

            {/* Close Button */}
            <button
              onClick={() => setShouldShow(false)}
              className="absolute -top-2 -right-2 w-6 h-6 bg-white text-black rounded-full text-[10px] flex items-center justify-center font-bold shadow-lg hover:bg-gray-200 transition-colors"
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
