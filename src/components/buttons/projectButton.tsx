import { buttonVariants } from "@/components/ui/button"

import Link from "next/link"

export default function ProjectButton() {
  return (
            <Link href="/dashboard/project" className={buttonVariants({ variant: "link" })}>Projects</Link>
  )
}