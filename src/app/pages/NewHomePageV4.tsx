import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import HomePage from "@/app/pages/HomePage";
import "@/styles/new-home-v4.css";

const heroImages = [
  "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1800&q=80",
  "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1800&q=80",
  "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1800&q=80",
  "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1800&q=80",
  "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1800&q=80",
];

function HeroBackgroundRotator() {
  const [heroElement, setHeroElement] = useState<HTMLElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setHeroElement(document.getElementById("hero"));
  }, []);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % heroImages.length);
    }, 3800);

    return () => window.clearInterval(interval);
  }, []);

  if (!heroElement) return null;

  return createPortal(
    <div className="nh4-hero-rotator" aria-hidden="true">
      {heroImages.map((image, index) => (
        <div
          key={image}
          className={`nh4-hero-image ${index === activeIndex ? "is-active" : ""}`}
          style={{ backgroundImage: `url("${image}")` }}
        />
      ))}
      <div className="nh4-hero-overlay" />
    </div>,
    heroElement,
  );
}

export default function NewHomePageV4() {
  return (
    <div className="new-home-v4">
      <HomePage />
      <HeroBackgroundRotator />
    </div>
  );
}
