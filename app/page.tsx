import AboutMe from "@/components/AboutMe";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex flex-col overflow-hidden mx-auto sm:px-10  px-5">
      <Navbar />
      <div className="w-full justify-center items-center">
          <Hero />
          <AboutMe />
          <Footer />
      </div>
    </main>
  );
}
