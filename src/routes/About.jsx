import { useState, useEffect } from "react";
import Sophia from "../assets/images/sophia-araya.jpg";
import SophiaAbout1 from "../assets/images/sophia-araya-about-1.jpg";
import SophiaAbout2 from "../assets/images/sophia-araya-about-2.jpeg";
import SophiaAbout3 from "../assets/images/sophia-araya-about-3.jpeg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);
  return (
    <>
      <Navbar page="about" />
      <main
        className={`container mx-auto flex-auto transition-opacity duration-1000 ease-in ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <section className="flex flex-col items-start lg:flex-row-reverse pb-5 px-5 lg:px-0">
          {/* Main image of Sophia */}
          <article className="w-full lg:w-1/2 flex lg:flex-col justify-between items-center mt-5">
            <img
              src={Sophia}
              loading="lazy"
              alt="Sophia Araya Makeup Artist standing outside"
              className="w-11/12 lg:w-96 rounded-lg shadow-xl"
            />
            <img
              src={SophiaAbout3}
              loading="lazy"
              alt="Estetica Hair magazine cover #2576"
              className="hidden lg:block w-11/12 lg:w-96 rounded-lg shadow-xl mt-10 lg:mt-40 xl:mt-10"
            />
          </article>
          {/* Bio and experience text */}
          <div className="px-5 lg:w-1/2 mt-5">
            <h1 className="text-2xl font-bold text-neutral">Hi!</h1>
            {/* Sophia bio */}
            <p className="py-3 text-neutral sm:text-lg">
              My name is Sophia. I’m from the suburbs of Chicago and am
              currently living in London. I studied Fashion Merchandising at
              Illinois State University and after a few years of working in that
              field I decided I wanted a big change and ended up working and
              living in Madrid for a year and a half. Having always loved the
              UK, I then decided to move once again (first to Bristol, then
              London) and pursued my dreams of becoming a hair and makeup
              artist. Some things I’m working on in my free time include
              braiding skills, men’s barbering, and period hairdressing.
            </p>
            {/* Experience section */}
            <h2 className="text-xl font-bold py-3 text-neutral">Experience:</h2>
            {/* E-commerce experience */}
            <h3 className="text-lg font-semibold text-neutral">E-commerce:</h3>
            <ul className="list-disc list-inside">
              <li className="text-neutral sm:text-lg">
              Hair & Makeup Artist • Jäegermeister Video Campaign
              </li>
              <li className="text-neutral sm:text-lg">
              Hair & Makeup Artist • Samsung x UNiDAYS Campaign
              </li>
              <li className="text-neutral sm:text-lg">
              Hair & Makeup Artist (Men’s Grooming) • Ronning London (menswear)
              </li>
              <li className="text-neutral sm:text-lg">
              Hair & Makeup Artist • Cagteks Bridal Campaign
              </li>
            </ul>
            {/* Fashion experience */}
            <h3 className="text-lg font-semibold pt-3 text-neutral">Fashion:</h3>
            <ul className="list-disc list-inside">
              <li className="text-neutral sm:text-lg">
                Makeup Artist • Estetica Magazine Digital Cover for Emmanuel
                Esteban
              </li>
              <li className="text-neutral sm:text-lg">
                Makeup Artist • British Hairdressing Awards for Angelo Seminara
              </li>
              <li className="text-neutral sm:text-lg">
                Makeup Artist (Men's Grooming) • GQ México and Latinoamérica •
                Men of the Year 2023
              </li>
              <li className="text-neutral sm:text-lg">
                Makeup Artist • Life on Left S/S '24 Paris Fashion Week Show •
                Key MUA: Marcello Costa
              </li>
              <li className="text-neutral sm:text-lg">
                Makeup Artist • Laurence Xu S/S '24 Paris Fashion Week Show •
                Key MUA: Marcello Costa
              </li>
              <li className="text-neutral sm:text-lg">
                Makeup Artist • Malan Breton S/S '24 London Fashion Week Show •
                Key MUA: Marcello Costa
              </li>
              <li className="text-neutral sm:text-lg">
                Makeup Artist • Leeds KAO Salon Division Hair Show • Key MUA:
                Michelle Strain
              </li>
              <li className="text-neutral sm:text-lg">
                Hair Stylist • Central Saint Martins 2023 BA Fashion Show
              </li>
              <li className="text-neutral sm:text-lg">
                Makeup Artist • London KAO Salon Division Hair Show • Key MUA:
                Michelle Strain
              </li>
              <li className="text-neutral sm:text-lg">
                Makeup Artist • VIN + OMI A/W '24 London Fashion Week Show • Key
                MUA: Michelle Strain
              </li>
              <li className="text-neutral sm:text-lg">
                Hair & Makeup Artist • Bellisa X Clothing Spring/Summer ’22
                Campaign
              </li>
            </ul>
            {/* Television experience */}
            <h3 className="text-lg font-semibold pt-3 text-neutral">
              Television:
            </h3>
            <ul className="list-disc list-inside">
              <li className="text-neutral sm:text-lg">
                The Crown • Left Bank Pictures • Crowd Hair & Makeup Artist
                Daily
              </li>
              <li className="text-neutral sm:text-lg">
                Toon in with Me • Weigel Broadcasting Co. • Hair & Makeup
                Assistant
              </li>
              <li className="text-neutral sm:text-lg">
                Collector’s Call • Weigel Broadcasting Co. • Hair & Makeup
                Assistant
              </li>
            </ul>
            {/* Theatre experience */}
            <h3 className="text-lg font-semibold pt-3 text-neutral">
              Theatre:
            </h3>
            <ul className="list-disc list-inside">
              <li className="text-neutral sm:text-lg">
                Work Experience (Wigs, Hair, & Makeup Department) • Mrs.
                Doubtfire (West End)
              </li>
            </ul>
          </div>
        </section>
        {/* Bottom two images */}
        <section className="flex flex-col justify-around items-center lg:flex-row pb-8">
          <img
            src={SophiaAbout3}
            loading="lazy"
            alt="Estetica Hair magazine cover #2576"
            className="lg:hidden w-11/12 lg:w-auto lg:h-64 rounded-lg shadow-xl mt-4"
          />
          <img
            src={SophiaAbout1}
            loading="lazy"
            alt="Sophia Araya Makeup Artist working with a colorful-haired client"
            className="w-11/12 lg:w-auto lg:h-64 rounded-lg shadow-xl mt-4"
          />
          <img
            src={SophiaAbout2}
            loading="lazy"
            alt="Sophia Araya Makeup Artist applying makeup and adjusting hair of client"
            className="w-11/12 lg:w-auto lg:h-64 rounded-lg shadow-xl mt-4"
          />
        </section>
      </main>
      <Footer />
    </>
  );
}
