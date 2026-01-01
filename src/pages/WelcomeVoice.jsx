import { useEffect } from "react";

const WelcomeVoice = () => {
  useEffect(() => {
    const message = "Welcome to Ranthambore";

    const speakWelcome = () => {
      // Agar browser support karta ho
      if ("speechSynthesis" in window) {
        const utterance = new SpeechSynthesisUtterance(message);

        utterance.lang = "en-IN";     // Indian English
        utterance.rate = 0.9;         // Speed
        utterance.pitch = 1;          // Voice tone
        utterance.volume = 1;         // Volume

        window.speechSynthesis.cancel(); // duplicate avoid
        window.speechSynthesis.speak(utterance);
      }
    };

    speakWelcome();
  }, []);

  return null; // UI me kuch show nahi karega
};

export default WelcomeVoice;
