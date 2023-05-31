import images from "../assets/images";
import ImageCarousel from "../components/ImageCarousel";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Hair() {
  const altText = [
    "Woman with jumbo box braids, crouched down",
    "Woman with jumbo box braids, crouched down, different angle",
    "Woman with grey hair, tied up",
    "Woman with dark hair tightly tied back",
    "Woman with white dress and pulled-back hair, side-view",
    "Woman with pink bow, closeup",
  ];
  return (
    <>
      <Navbar page="hair" />
      <main className="container mx-auto flex-auto">
        <ImageCarousel
          key="hair"
          altText={altText}
          images={images.hair}
          className=""
        />
      </main>
      <Footer />
    </>
  );
}
