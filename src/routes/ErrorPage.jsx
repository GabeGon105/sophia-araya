import { useState, useEffect } from "react";
import { useOutletContext, Link, useRouteError } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ErrorPage() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);
  return (
    <>
      <Navbar />
      <main
        className={`container mx-auto flex-auto transition-opacity duration-1000 ease-in ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <section className="pt-10 flex flex-col items-center">
          <h1 className="text-2xl font-bold text-neutral">
            This page doesn't exist
          </h1>
          <p className="py-3 text-neutral sm:text-lg">Try a different page!</p>
        </section>
      </main>
      <Footer />
    </>
  );
}
