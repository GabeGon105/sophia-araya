import { useOutletContext, Link, useRouteError } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ErrorPage() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto flex-auto">
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
