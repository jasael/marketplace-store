import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { BellIcon, ShoppingBagIcon, StarIcon } from "lucide-react";
import Link from "next/link";

export default function UserActions() {
  const user = {
    name: "Jasael Palma",
    image: "",
  };
  // const user = null;
  return (
    <div className="flex gap-2">
      {/* TODO: Agregar condicional cuando esté la sesión iniciada y cuando no */}
      {user ? (
        <>
          <div className="relative">
            <Button size={"icon"} variant={"ghost"} asChild>
              <Link href={""}>
                <BellIcon />
              </Link>
            </Button>
            <Badge className="absolute top-1 -ml-4 h-2 w-2 px-0 rounded-full bg-green-500" />
          </div>
          <Button size={"icon"} variant={"ghost"} asChild>
            <Link href={""}>
              <StarIcon />
            </Link>
          </Button>
          <div className="relative">
            <Button size={"icon"} variant={"ghost"} asChild>
              <Link href={""}>
                <ShoppingBagIcon />
              </Link>
            </Button>
            <Badge className="absolute -ml-5 p-0 w-4 h-4">2</Badge>
          </div>

          <Link href={""}>
            <Avatar>
              <AvatarImage src={""} alt="user"></AvatarImage>
              <AvatarFallback>JP</AvatarFallback>
            </Avatar>
          </Link>
        </>
      ) : (
        <div className="flex gap-2">
          <Button asChild>
            <Link href={""}>Iniciar sesión</Link>
          </Button>
          <Button asChild variant={"secondary"}>
            <Link href={""}>Crear cuenta</Link>
          </Button>
        </div>
      )}
    </div>
  );
}
