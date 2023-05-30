import { useState } from "react";
import images from "../assets/images";
import ImageCarousel from "../components/ImageCarousel";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Fashion() {
  const [index, setIndex] = useState(0);

  // Track current swiper slide
  const handleIndexChange = (newIndex) => {
    setIndex(newIndex);
  };

  const altText = [
    "Woman in dress and boots, upside-down",
    "Woman on knees, swinging hair upwards",
    "Woman holding a bag, black background",
    "Woman in mesh-clothes with hair suspended upwards at a fashion show",
    "Woman in mesh-clothes with hair suspended upwards at a fashion show, different angle",
    "Woman with transparent face mask with a crimson seal on it",
    "Man with pink eye makeup and many colored hairclips",
    "Man with shiny coat slightly open revealing chest, colorful necklace, and gold-colored hat",
  ];

  return (
    <>
      <Navbar />
      <main className="container mx-auto flex-auto">
        <ImageCarousel
          key="fashion"
          altText={altText}
          images={images.fashion}
          onIndexChange={handleIndexChange}
          className=""
        />
        {index === 5 || (index === 6) | (index === 7) ? (
          <p className="py-2 text-center text-neutral sm:text-lg">
            VIN + OMI London Fashion Week 2023
          </p>
        ) : null}
      </main>
      <Footer />
    </>
  );
}
