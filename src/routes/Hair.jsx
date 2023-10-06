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
    "Wavy, short-haired wig side-view",
    "Wavy, short-haired wig front-view",
    "Wavy, short-haired wig back-view",
    "Curly, brown-haired wig front-view",
    "Curly, brown-haired wig side-view",
    "Curly, brown-haired wig back-view",
    "Wavy, short-haired wig front-view",
    "Wavy, short-haired wig frontside-view",
    "Wavy, short-haired wig backside-view",
    "Wavy, short-haired wig back-view",
    "Bangs, short-haired wig front-view",
    "Bangs, short-haired wig side-view",
    "Bangs, short-haired wig side-view",
    "Bangs, short-haired wig back-view",
    "Wavy, short-haired wig front-view",
    "Wavy, short-haired wig side-view",
    "Wavy, short-haired wig back-view",
    "Brown hair with highlights in an elegant up-tie",
    "Curly brown hair elegantly tied up",
    "Man with facial postiche (sideburns and moustache) and retro glasses side-view",
    "Man with facial postiche (sideburns and moustache) and retro glasses front-view",
  ];

  const captionText = {
    saintMartins: "Central Saint Martins 2023 BA Show",
    henryStache:
      "Facial postiche (sideburns and moustache) knotted and applied by Sophia Araya",
  };

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
        <p className="py-2 text-center text-neutral sm:text-lg">
          {index === 0 || index === 1 ? captionText.saintMartins : null}
          {index === 27 || index === 28 ? captionText.henryStache : null}
        </p>
      </main>
      <Footer />
    </>
  );
}
