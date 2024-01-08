import { useState, useEffect } from "react";
import images from "../assets/images";
import ImageCarousel from "../components/ImageCarousel";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MaleGrooming() {
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
    "Santiago Lastra throwing squash in the air",
    "Santiago Lastra sitting in a chair on the street",
    "Man with black tanktop and short hair",
    "Man with white shirt, open jacket, and short hair",
    "Man in denim with short hair sitting on the floor for a photo shoot",
    "Man in denim with short hair, closeup",
    "Man in leather vest and a flat cap",
  ];

  const captionText = {
    gqMexico: "GQ Mexico, Men of the Year 2023 - Santiago Lastra",
  };
  return (
    <>
      <Navbar page="male-grooming" />
      <main
        className={`container mx-auto flex-auto transition-opacity duration-1000 ease-in ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <ImageCarousel
          key="male-grooming"
          altText={altText}
          images={images.mg}
          onIndexChange={handleIndexChange}
          className=""
        />
        <p className="py-2 text-center text-neutral sm:text-lg">
          {index === 0 || index === 1 ? captionText.gqMexico : null}
        </p>
      </main>
      <Footer />
    </>
  );
}
