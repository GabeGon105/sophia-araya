import images from "../assets/images";
import ImageCarousel from "../components/ImageCarousel";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MaleGrooming() {
  const altText = [
    "Man with black tanktop and short hair",
    "Man with white shirt, open jacket, and short hair",
    "Man in denim with short hair sitting on the floor for a photo shoot",
    "Man in denim with short hair, closeup",
    "Man in leather vest and a flat cap",
  ];
  return (
    <>
      <Navbar />
      <main className="container mx-auto flex-auto">
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
