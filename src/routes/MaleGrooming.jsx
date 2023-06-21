import { useState, useEffect } from "react";
import images from "../assets/images";
import ImageCarousel from "../components/ImageCarousel";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MaleGrooming() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const altText = [
    "Man with black tanktop and short hair",
    "Man with white shirt, open jacket, and short hair",
    "Man in denim with short hair sitting on the floor for a photo shoot",
    "Man in denim with short hair, closeup",
    "Man in leather vest and a flat cap",
  ];
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
          className=""
        />
      </main>
      <Footer />
    </>
  );
}
