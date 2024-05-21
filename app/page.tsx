import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex flex-col overflow-hidden mx-auto sm:px-10  px-5">
      <Navbar />
      <div className="max-w-7xl w-full justify-center items-center">
          <div>
            <Hero />
          </div>
      </div>
      <Footer />
    </main>
  );
}
