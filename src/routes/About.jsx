import { useState } from "react";
import Sophia from "../assets/images/sophia-araya.jpg";
import SophiaAbout1 from "../assets/images/sophia-araya-about-1.jpg";
import SophiaAbout2 from "../assets/images/sophia-araya-about-2.jpeg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
  const [loaded1, setLoaded1] = useState(false);
  const [loaded2, setLoaded2] = useState(false);
  const [loaded3, setLoaded3] = useState(false);

  return (
    <>
      <Navbar />
      <main className="container mx-auto">
        <section className="flex flex-col items-start xl:items-center lg:flex-row-reverse pb-5 px-5 lg:px-0">
          <article className="w-full lg:w-1/2 flex justify-center mt-5">
            <img
              src={Sophia}
              alt="Sophia Araya Makeup Artist standing outside"
              className="w-11/12 lg:w-96 rounded-lg shadow-xl"
              style={loaded1 ? {} : { display: "none" }}
              onLoad={() => setLoaded1(true)}
            />
          </article>
          <div className="px-5 lg:w-1/2 mt-5">
            <h1 className="text-2xl font-bold text-neutral">Hi!</h1>
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
            <h2 className="text-xl font-bold py-3 text-neutral">Experience:</h2>
            <h3 className="text-lg font-semibold text-neutral">Television:</h3>
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
            <h3 className="text-lg font-semibold pt-3 text-neutral">
              Fashion:
            </h3>
            <ul className="list-disc list-inside">
              <li className="text-neutral sm:text-lg">
                Makeup Artist • KAO Salon Division Hair Show • Key MUA: Michelle
                Strain
              </li>
              <li className="text-neutral sm:text-lg">
                Makeup Artist • VIN + OMI Spaced Fashion Show LFW • Key MUA:
                Michelle Strain
              </li>
              <li className="text-neutral sm:text-lg">
                Hair & Makeup Artist • Bellisa X Clothing Spring/Summer ’22
                Campaign
              </li>
            </ul>
          </div>
        </section>
        <section className="flex flex-col justify-around items-center lg:flex-row pb-8">
          <img
            src={SophiaAbout1}
            alt="Sophia Araya Makeup Artist working with a colorful-haired client"
            className="w-11/12 lg:w-auto lg:h-64 rounded-lg shadow-xl mt-4"
            style={loaded2 ? {} : { display: "none" }}
            onLoad={() => setLoaded2(true)}
          />
          <img
            src={SophiaAbout2}
            alt="Sophia Araya Makeup Artist applying makeup and adjusting hair of client"
            className="w-11/12 lg:w-auto lg:h-64 rounded-lg shadow-xl mt-4"
            style={loaded3 ? {} : { display: "none" }}
            onLoad={() => setLoaded3(true)}
          />
        </section>
      </main>
      <Footer />
    </>
  );
}
