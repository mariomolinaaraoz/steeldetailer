import Navbar from "@/components/layout/navbar";
import Hero from "@/components/layout/hero/hero";
import Footer from "@/components/layout/footer";

export default function Home() {
  return (
    <div className="w-full min-h-screen">
      <header className="h-16">
        <Navbar />
      </header>
      <main className="mt-16">
        <Hero/>
        <Footer />
      </main>
    </div>
  );
}