import { useEffect, useState } from "react";

export default function YouTubeStyleIntro({
  brandName = "Mern Calculator",
  subtitle = "Design • Develop • Deliver",
  logo = "🎬",
  duration = 1000,
  backgroundColor = "bg-black",
}) {
  const [showIntro, setShowIntro] = useState(true);
  const [showLogo, setShowLogo] = useState(false);
  const [showName, setShowName] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const logoTimer = setTimeout(() => setShowLogo(true), 500);
    const nameTimer = setTimeout(() => setShowName(true), 1000);
    const subtitleTimer = setTimeout(() => setShowSubtitle(true), 500);
    const fadeTimer = setTimeout(() => setFadeOut(true), duration - 200);
    const hideTimer = setTimeout(() => setShowIntro(false), duration);

    return () => {
      clearTimeout(logoTimer);
      clearTimeout(nameTimer);
      clearTimeout(subtitleTimer);
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, [duration]);

  if (!showIntro) return null;

  const isImageLogo =
    typeof logo === "string" &&
    (logo.startsWith("http") || logo.startsWith("/"));

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center ${backgroundColor} transition-opacity duration-500 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="text-center px-4">
        {/* Logo / Photo */}
        <div
          className={`mb-8 flex justify-center transition-all duration-1000 ${
            showLogo ? "opacity-100 scale-100" : "opacity-0 scale-50"
          }`}
        >
          {isImageLogo ? (
            <img
              src={logo}
              alt="Logo"
              className="w-32 h-32 rounded-full object-cover shadow-2xl shadow-purple-500/50 animate-glow"
            />
          ) : (
            <div className="w-32 h-32 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-full flex items-center justify-center shadow-2xl shadow-purple-500/50 animate-glow">
              <span className="text-6xl">{logo}</span>
            </div>
          )}
        </div>

        {/* Brand Name - Slide Down */}
        <div className="overflow-hidden mb-4">
          <h1
            className={`text-4xl sm:text-6xl md:text-8xl font-bold text-white tracking-wider transition-all duration-500 ${
              showName
                ? "translate-y-0 opacity-100"
                : "-translate-y-full opacity-0"
            }`}
          >
            {brandName}
          </h1>
        </div>

        {/* Subtitle - Slide Down */}
        <div className="overflow-hidden">
          <p
            className={`text-lg sm:text-xl md:text-3xl text-gray-300 tracking-widest transition-all duration-500 delay-300 ${
              showSubtitle
                ? "translate-y-0 opacity-100"
                : "-translate-y-full opacity-0"
            }`}
          >
            {subtitle}
          </p>
        </div>

        {/* Decorative line */}
        {showSubtitle && (
          <div className="flex justify-center mt-8">
            <div className="h-1 w-48 sm:w-64 bg-gradient-to-r from-transparent via-purple-500 to-transparent animate-pulse" />
          </div>
        )}
      </div>
    </div>
  );
}
