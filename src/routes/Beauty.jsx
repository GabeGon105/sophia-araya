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
    "Two woman facing each other",
    "Woman with red glove",
    "Woman with green clothes",
    "Woman with green hat",
    "Woman with long, curly hair and rings",
    "Woman with denim jacket",
    "Woman in colorful room working at a desk",
    "Woman with teased hair",
    "Woman against a brick wall in the city",
    "Woman against a brick wall in the city, close up",
    "Woman with turtle neck jacket",
    "Woman against red background",
    "Woman with head in palm",
    "Woman holding vase on top of her head",
    "Woman in red shirt",
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
    "Woman with pink bow, closeup"
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
