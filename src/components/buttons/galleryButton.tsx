import { buttonVariants } from "@/components/ui/button";

import Link from "next/link";

export default function GalleryButton() {
  return (
    <Link
      href="/dashboard/gallery"
      className={buttonVariants({ variant: "link" })}
    >
      Gallery
    </Link>
  );
}