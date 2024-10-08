"use client";

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

import {
  Home,
  LayoutDashboard,
  ImageIcon,
  TableIcon,
  Linkedin,
  YoutubeIcon,
  Instagram,  
} from "lucide-react";
import { usePathname } from "next/navigation";

const routes = [
  {
    label: "Home",
    icon: Home,
    href: "/",
    color: "text-sky-500",
  },
  {
    label: "Projects",
    icon: LayoutDashboard,
    href: "/dashboard/project",
    color: "text-sky-500",
  },
  {
    label: "Images",
    icon: ImageIcon,
    href: "/dashboard/gallery",
    color: "text-pink-700",
  },
  {
    label: "Tables",
    icon: TableIcon,
    href: "/dashboard/table",
    color: "text-green-500",
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="border-none md:border space-y-2 py-0 flex flex-col h-full text-white">
      <div className="w-full h-16 bg-[#111827] hidden md:inline pb-1">
        <Link
          href="/"
          className="flex items-center border-b border-b-foreground/10 py-2 pl-3 mb-2"
        >
          <div className="relative w-10 h-10 ml-1 mr-2">
            <Image fill alt="Logo" src="/logo.png" loading="lazy" />
          </div>
            <h2 className="text-md p-0 m-0">Steel detailer</h2>          
        </Link>
      </div>
      <div className="bg-[#111827] px-3 py-2 flex-1">
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                pathname === route.href
                  ? "text-white bg-white/10"
                  : "text-zinc-400"
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="py-4 flex justify-around border-t border-t-foreground/10 border-b border-b-foreground/10">
        <a
          href="https://www.linkedin.com/in/mario-molina-steeldetailer/"
          className="text-black dark:text-white hover:underline"
          title="Linkein"
        >
          <Linkedin className="h-5 w-5" />
        </a>
        {/* <YoutubeIcon className="h-5 w-5" />
        <Instagram className="h-5 w-5" /> */}
      </div>
      <div className="flex justify-center pt-2 pb-4">
        <h1 className="text-xs">
          Desing in{" "}
          <a
            href="https://www.argentina.gob.ar/"
            className="text-black dark:text-white hover:underline"
            title="Argentina"
            >
            AR
          </a>{" "}
          by{" "}
          <a
            href="https://mariomolinaaraoz.com.ar"
            className="text-black dark:text-white hover:underline"
            title="Sitio Oficial"
          >
            Mario Molina
          </a>
        </h1>
      </div>
    </div>
  );
}
