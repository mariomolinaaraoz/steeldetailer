import "../globals.css";

import MobileSidebar from "@/components/sidebar/mobile-sidebar";
import Sidebar from "@/components/sidebar/sidebar";

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (    
      <section>
        <aside className="hidden h-full md:flex md:w-56 md:flex-col md:fixed md:inset-y-0 z-[80] bg-gray-900">
          <Sidebar />
        </aside>
        <main className="md:pl-56">
          <MobileSidebar />
          {children}
        </main>
      </section>
  );
}