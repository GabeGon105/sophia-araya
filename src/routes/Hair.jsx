import { useState, useEffect } from "react";
import images from "../assets/images";
import ImageCarousel from "../components/ImageCarousel";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Hair() {
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
    "Woman with red and white striped tubes in fashion show",
    "Woman with box clothing in fashion show",
    "Woman with jumbo box braids, crouched down",
    "Woman with jumbo box braids, crouched down, different angle",
    "Woman with grey hair, tied up",
    "Woman with dark hair tightly tied back",
    "Woman with white dress and pulled-back hair, side-view",
    "Woman with pink bow, closeup",
    "Curly, brown-haired wig front-view",
    "Curly, brown-haired wig side-view",
    "Curly, brown-haired wig back-view",
    "Brown hair with highlights in an elegant up-tie",
    "Curly brown hair elegantly tied up",
    "Man with facial postiche (sideburns and moustache) and retro glasses side-view",
    "Man with facial postiche (sideburns and moustache) and retro glasses front-view",
  ];
  return (
    <>
      <Navbar page="hair" />
      <main
        className={`container mx-auto flex-auto transition-opacity duration-1000 ease-in ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <ImageCarousel
          key="hair"
          altText={altText}
          images={images.hair}
          onIndexChange={handleIndexChange}
          className=""
        />
        {index === 0 || index === 1 ? (
          <p className="py-2 text-center text-neutral sm:text-lg">
            Central Saint Martins 2023 BA Show
          </p>
        ) : null}
        {index === 13 || index === 14 ? (
          <p className="py-2 text-center text-neutral sm:text-lg">
            Facial postiche (sideburns and moustache) knotted and applied by
            Sophia Araya
          </p>
        ) : null}
      </main>
      <Footer />
    </>
  );
}
