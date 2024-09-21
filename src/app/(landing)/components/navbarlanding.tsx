import Logo from "@/components/icons/logo";
import ProjectButton from "@/components/buttons/projectButton";
import GalleryButton from "@/components/buttons/galleryButton";
import TableButton from "@/components/buttons/tableButton";
import ContactButton from "@/components/buttons/contactButton";

export default function NavbarLanding() {

  return (
    <div className="w-full max-w-[1280px] flex mx-auto">
      <a className="flex items-center justify-center" href="#">
        <div className='h-[40px] w-[40px] rounded-xl'>
          <Logo />
        </div>
        <h1 className="ml-2 text-xs md:text-md text-foreground">
          Steel Detailer
        </h1>
      </a>
      <nav className="ml-auto mr-4 flex gap-1 sm:gap-4">
        <ProjectButton/>
        <GalleryButton/>
        <div className="hidden lg:block">
        <TableButton/>
        </div>
        <ContactButton/>
      </nav>
    </div>
  );
}