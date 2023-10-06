import { useState, useEffect } from "react";
import images from "../assets/images";
import ImageCarousel from "../components/ImageCarousel";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Fashion() {
  const [loaded, setLoaded] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setLoaded(true);
  }, []);

  // Track current swiper slide
  const handleIndexChange = (newIndex) => {
    setIndex(newIndex);
  };

  const altText = [
    "Life on Left Paris Fashion Week Show S/S ’24",
    "Life on Left Paris Fashion Week Show S/S ’24",
    "Laurence Xu Paris Fashion Week Show S/S ’24",
    "Laurence Xu Paris Fashion Week Show S/S ’24",
    "Malan Breton London Fashion Week Show S/S ’24",
    "Malan Breton London Fashion Week Show S/S ’24",
    "Backstage at Malan Breton London Fashion Week Show",
    "Backstage at Malan Breton London Fashion Week Show",
    "Woman in dress and boots, upside-down",
    "Woman on knees, swinging hair upwards",
    "Woman holding a bag, black background",
    "Woman in mesh-clothes with hair suspended upwards at a fashion show",
    "Woman in mesh-clothes with hair suspended upwards at a fashion show, different angle",
    "Woman with transparent face mask with a crimson seal on it",
    "Man with pink eye makeup and many colored hairclips",
    "Man with shiny coat slightly open revealing chest, colorful necklace, and gold-colored hat",
  ];

  const captionText = {
    vinOmi: "VIN + OMI London Fashion Week 2023",
    lifeOnLeft: "Life on Left Paris Fashion Week Show S/S ’24",
    laurenceXu: "Laurence Xu Paris Fashion Week Show S/S ’24",
    malanBreton: "Malan Breton London Fashion Week Show S/S ’24",
    backstagMalan: "Backstage at Malan Breton London Fashion Week Show",
  };

  return (
    <>
      <Navbar page="fashion" />
      <main
        className={`container mx-auto flex-auto transition-opacity duration-1000 ease-in ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <ImageCarousel
          key="fashion"
          altText={altText}
          images={images.fashion}
          onIndexChange={handleIndexChange}
          className=""
        />
        <p className="py-2 text-center text-neutral sm:text-lg">
          {index === 0 || index === 1 ? captionText.lifeOnLeft : null}
          {index === 2 || index === 3 ? captionText.laurenceXu : null}
          {index === 4 || index === 5 ? captionText.malanBreton : null}
          {index === 6 || index === 7 ? captionText.backstagMalan : null}
          {index === 13 || index === 14 || index === 15
            ? captionText.vinOmi
            : null}
        </p>
      </main>
      <Footer />
    </>
  );
}
