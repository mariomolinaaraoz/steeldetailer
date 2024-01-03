export const dynamic = "force-dynamic";

export default async function Hero() {
  return (
    <section className="flex flex-col items-center">
      <div className="absolute top-16 inset-0 bg-my_bg_hero bg-cover bg-no-repeat grayscale brightness-50 constrast-125" />
      <div className="absolute animate-in flex flex-col gap-14 opacity-100 max-w-7xl px-3 py-14 lg:py-40 text-foreground">
        <div className="flex flex-col items-center mb-4 lg:mb-12">
          <h1 className="text-4xl md:text-6xl lg:text-8xl !leading-tight mx-auto max-w-5xl text-center my-12">
            BUILDING TOGETHER
          </h1>
          <div className="bg-foreground py-3 px-6 rounded-lg font-mono text-xs sm:text-sm text-background">
            Get started know our <strong>Projects</strong>
          </div>
        </div>

        <div className="w-full p-[1px] bg-gradient-to-r from-transparent via-foreground/50 to-transparent" />

        <div className="flex flex-col gap-8 text-foreground">
          <h2 className="text-md sm:text-lg font-bold text-center">
            Everything you need to get started to manufacture
          </h2>
        </div>
      </div>
    </section>
  );
}