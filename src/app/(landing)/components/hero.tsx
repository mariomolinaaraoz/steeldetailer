import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Hammer, Ruler, Clock, Users, Sun, Moon } from "lucide-react"

export default function Hero() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-my_bg_hero bg-cover bg-no-repeat">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-6 text-center">
            <div className="space-y-2">
              <h1 className="text-4xl md:text-6xl lg:text-8xl !leading-tight mx-auto max-w-5xl text-center mt-12 mb-6">
                BUILDING TOGETHER
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-50 md:text-xl dark:text-gray-400">
                Bringing your structural steel projects to life with accuracy and expertise.
              </p>
            </div>
            <div className="bg-foreground py-3 px-6 rounded-lg font-mono text-xs sm:text-sm text-background">
              <Link
                href="/dashboard/project"
              >
                Get started know our <strong><u>Projects</u></strong>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-6 md:py-12 lg:py-16 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-semibold tracking-loose sm:text-5xl text-center mb-12 dark:text-white">
            Our Services
          </h2>
          <div className="grid gap-3 sm:grid-cols-1 lg:grid-cols-3">
            <Card className="dark:bg-gray-700 dark:text-gray-100">
              <CardHeader>
                <Ruler className="h-6 w-6 mb-2" />
                <CardTitle>Precise Detailing</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Accurate and detailed steel drawings for seamless fabrication and erection.</p>
              </CardContent>
            </Card>
            <Card className="dark:bg-gray-700 dark:text-gray-100">
              <CardHeader>
                <Clock className="h-6 w-6 mb-2" />
                <CardTitle>Quick Turnaround</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Fast and efficient service to meet your project deadlines.</p>
              </CardContent>
            </Card>
            <Card className="dark:bg-gray-700 dark:text-gray-100">
              <CardHeader>
                <Users className="h-6 w-6 mb-2" />
                <CardTitle>Expert Team</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Skilled professionals with years of experience in steel detailing.</p>
              </CardContent>
            </Card>            
          </div>
        </div>
      </section>
    </>
    // <section className="flex flex-col items-center">
    //   <div className="absolute top-16 inset-0 bg-my_bg_hero bg-cover bg-no-repeat grayscale brightness-50 constrast-125" />
    //   <div className="absolute animate-in flex flex-col gap-14 opacity-100 max-w-7xl px-3 py-14 lg:py-40 text-foreground">
    //     <div className="flex flex-col items-center mb-4 lg:mb-12">
    //       <h1 className="text-4xl md:text-6xl lg:text-8xl !leading-tight mx-auto max-w-5xl text-center my-12">
    //         BUILDING TOGETHER
    //       </h1>
    //       <div className="bg-foreground py-3 px-6 rounded-lg font-mono text-xs sm:text-sm text-background">
    //         <Link
    //           href="/dashboard/project"              
    //         >              
    //         Get started know our <strong><u>Projects</u></strong>
    //         </Link>
    //       </div>
    //     </div>

    //     <div className="w-full p-[1px] bg-gradient-to-r from-transparent via-foreground/50 to-transparent" />

    //     <div className="flex flex-col gap-8 text-foreground">
    //       <h2 className="text-md sm:text-lg font-bold text-center">
    //         Everything you need to get started to manufacture
    //       </h2>
    //     </div>
    //   </div>
    // </section>
  );
}