import React from "react";
import ProductCard from "../product-card/product-card";
import { Product } from "@/app/page";
import { fetchFilteredProducts } from "@/lib/data";

export default async function ListProducts({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const products = await fetchFilteredProducts({
    currentPage,
    query,
  });

  if (!products.length) return <div className="w-full bg-red-500">Hello</div>;

  return (
    <div className="flex-1 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard product={product} key={product.slug} />
      ))}
    </div>
  );
}
