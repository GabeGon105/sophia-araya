import { useRef, useEffect } from "react";
import { register } from "swiper/element/bundle";
import "../index.css";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

register();

const ImageCarousel = ({ images, altText, onIndexChange }) => {
  const swiperElRef = useRef(null);

  useEffect(() => {
    // listen for Swiper events using addEventListener
    // swiperElRef.current.addEventListener("progress", (e) => {
    //   const [swiper, progress] = e.detail;
    //   console.log(progress);
    // });

    swiperElRef.current.addEventListener("slidechange", (e) => {
      const [swiper, progress] = e.detail;
      if (onIndexChange) onIndexChange(swiper.realIndex);
    });
  }, []);

  return (
    <swiper-container
      ref={swiperElRef}
      slides-per-view="1"
      auto-height="true"
      navigation="true"
      pagination="true"
      aut-height="true"
      effect="fade"
      fade-effect-cross-fade="true"
      centered-slides="true"
      space-between="30"
      pagination-dynamic-bullets="true"
      pagination-clickable="true"
      a11y="true"
      a11y-prev-slide-message="Previous slide"
      a11y-next-slide-message="Next slide"
      style={{
        "--swiper-pagination-color": "#3E4450",
        "--swiper-navigation-color": "#3E4450",
      }}
    >
      {images.map((image, i) => {
        return (
          <swiper-slide key={i} className="" lazy="true">
            <img
              src={image}
              loading="lazy"
              alt={altText[i]}
              className="mx-auto"
              style={{ maxHeight: "78vh" }}
            />
            <div
              className="swiper-lazy-preloader"
              style={{ color: "#3E4450" }}
            ></div>
          </swiper-slide>
        );
      })}
    </swiper-container>
  );
};

export default ImageCarousel;

// import { Swiper, SwiperSlide } from "swiper/react";
// import { A11y, EffectFade, Navigation, Pagination } from "swiper";
// import "../index.css";
// import "swiper/css";
// import "swiper/css/effect-fade";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// const ImageCarousel = ({ images, altText, updateCaption }) => {
//   return (
//     <Swiper
//       slidesPerView={"auto"}
//       autoHeight={true}
//       effect={"fade"}
//       fadeEffect={{ crossFade: true }}
//       centeredSlides={true}
//       spaceBetween={30}
//       pagination={{
//         dynamicBullets: true,
//         clickable: true,
//       }}
//       navigation={true}
//       a11y={{
//         prevSlideMessage: "Previous slide",
//         nextSlideMessage: "Next slide",
//       }}
//       modules={[A11y, EffectFade, Navigation, Pagination]}
//       className="mySwiper"
//       style={{
//         "--swiper-pagination-color": "#3E4450",
//         "--swiper-navigation-color": "#3E4450",
//       }}
//     >
//       {images.map((image, i) => {
//         return (
//           <SwiperSlide key={i} className="">
//             <img
//               src={image}
//               loading="lazy"
//               alt={altText[i]}
//               className="mx-auto"
//               style={{ maxHeight: "78vh" }}
//             />
//             <div className="swiper-lazy-preloader"></div>
//           </SwiperSlide>
//         );
//       })}
//     </Swiper>
//   );
// };

// export default ImageCarousel;
