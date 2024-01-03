import { Menu } from "lucide-react";
import { Button } from "../ui/button";

export default function MenuButton() {
  return (
    <Button variant="ghost" size="icon" className="pr-2 md:hidden">
      <Menu />
    </Button>
  );
}