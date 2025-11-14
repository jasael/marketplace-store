import { ShoppingBasketIcon } from "lucide-react";
import { Button } from "../ui/button";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardFooter,
  CardDescription,
} from "../ui/card";
import Image from "next/image";

interface Product {
  id: number;
  name: string;
  slug: string;
  image: string;
  description: string;
  price: number;
  seller: {
    name: string;
    slug: string;
  };
}
export default function ProductCard(props: { product: Product }) {
  const { product } = props;
  return (
    <Card key={product.id} className="pt-0 gap-2 h-fit">
      <CardHeader className="p-0">
        <Image
          src={product.image}
          alt={product.name}
          width={400}
          height={400}
          className="w-full h-56 object-cover rounded-lg"
        />
      </CardHeader>
      <CardContent>
        <CardTitle>{product.name}</CardTitle>
        <CardDescription>{product.seller.name}</CardDescription>
      </CardContent>
      <CardFooter className="flex justify-between">
        <span className="text-xl font-bold">${product.price}</span>
        <Button size="icon-lg" variant={"outline"}>
          <ShoppingBasketIcon height={20} width={20} />
        </Button>
      </CardFooter>
    </Card>
  );
}
