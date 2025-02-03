"use client";
import React, { useEffect, useState, useRef } from "react";




// Componente de pantalla de título
const TitleScreen = ({ onStart }: { onStart: () => void }) => {
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null); 
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Solo ejecutar en el navegador
      const newAudio = new Audio("/audios/pokemon-theme.mp3"); // Ruta relativa al archivo de audio en la carpeta public
      setAudio(newAudio);

      // No reproducir el audio automáticamente, esperamos interacción del usuario

      return () => {
        newAudio.pause();
        newAudio.currentTime = 0;
      };
    }
  }, []);

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.code === "Space" && !isPlaying) {
      onStart();
      setIsPlaying(true); // Reproducir el audio al presionar la tecla espacio
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isPlaying]);

  useEffect(() => {
    if (audio && isPlaying) {
      // Controlar el audio
      audio.loop = true;
      audio.volume = 0.5;
      audio.play();
    }
  }, [audio, isPlaying]);

  // Para el movimiento del fondo
  const [bgOffset, setBgOffset] = useState(0);
  
  useEffect(() => {
    const moveBackground = () => {
      // Mover el fondo en píxeles para que sea más preciso y continúe en pantallas grandes
      setBgOffset((prevOffset) => (prevOffset + 1) % window.innerWidth); // Mover el fondo basado en el tamaño de la ventana
      requestAnimationFrame(moveBackground);
    };

    moveBackground();
  }, []);

  return (
    <div className="relative w-full h-screen bg-black flex justify-center items-center overflow-hidden">
      {/* Fondo animado */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover"
        style={{
          backgroundImage:
            "url('https://p4.wallpaperbetter.com/wallpaper/242/852/892/pixel-art-pixels-digital-art-horizon-wallpaper-preview.jpg')",
          backgroundPosition: `${bgOffset}px 0`, // Suaviza el movimiento de la imagen
          transition: "background-position 0.2s ease-out", // Suaviza la transición
        }}
      />


      <div
        className="absolute text-6xl font-[NightAOE] text-red-600 z-[1000] text-shadow-lg"
        style={{
          textShadow: "2px 2px 5px rgba(0, 0, 0, 0.7)",
        }}
      >
        pokemon 
      </div>

      {/* Texto 'Press Spacebar' con animación de pulso */}
      <div
        className="absolute bottom-10 text-white text-lg text-center uppercase animate-pulse"
      >
        Press Spacebar
      </div>

    </div>
  );
};

// Componente principal
const InitialAnimation = ({ onStart }: { onStart: () => void }) => {
  return <TitleScreen onStart={onStart} />;
};

export default InitialAnimation;
