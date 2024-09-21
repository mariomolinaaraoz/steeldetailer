import { buttonVariants } from "@/components/ui/button";

import Link from "next/link";

export default function TableButton() {
  return (
    <Link
      href="/dashboard/table"
      className={buttonVariants({ variant: "link" })}
    >
      Tables
    </Link>
  );
}