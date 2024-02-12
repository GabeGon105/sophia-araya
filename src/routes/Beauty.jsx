import { useState, useEffect } from "react";
import images from "../assets/images";
import ImageCarousel from "../components/ImageCarousel";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Beauty() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const altText = [
    "Woman with black and orange hair",
    "Woman with yellow and blue hair",
    "Woman with blonde, brown, and grey hair",
    "Woman with red, blue, and brown hair",
    "Woman with dark hair and blue eyeliner",
    "Woman wearing white head/neck cloth",
    "Woman wearing white head/neck cloth, closeup",
    "Woman wearing blue shirt",
    "Woman with dark curly hair in white dress",
    "Woman with jumbo box braids, full photo",
    "Woman with jumbo box braids smiling, closeup",
    "Woman with red lipstick, closeup",
    "Woman with red lipstick, side-view",
    "Woman with curly hair, black hat",
    "Woman with leopard print clothing",
    "Woman with red top and black bottom",
    "Woman with leopard print clothing and lolipop",
    "Woman with red gloves, side-view",
    "Woman with tightly-tied hair and blue makeup",
    "Woman with colorful hair and makeup, closeup",
    "Woman with colorful hair and makeup",
    "Woman with pink bow, closeup",
  ];
  return (
    <>
      <Navbar page="beauty" />
      <main
        className={`container mx-auto flex-auto transition-opacity duration-1000 ease-in ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <ImageCarousel
          key="beauty"
          altText={altText}
          images={images.beauty}
          className=""
        />
      </main>
      <Footer />
    </>
  );
}
