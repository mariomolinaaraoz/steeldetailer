import NavbarLanding from "./components/navbarlanding"
import Hero from "./components/hero";
import FooterLanding from "./components/footerlanding";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <header className="px-4 lg:px-6 h-14 flex items-center border-b dark:border-gray-800">
        <NavbarLanding />
      </header>
      <main className="flex-1">
        <Hero/>
        <FooterLanding />
      </main>
    </div>
  );
}