import { Button } from "../ui/button";
import { Menu } from "lucide-react";

export default function MenuButton() {
  return (
    <Button variant="ghost" size="icon" className="pr-2 md:hidden">
      <MenuButtonContent />
    </Button>
  );
}

function MenuButtonContent() {
  return <Menu />;
}