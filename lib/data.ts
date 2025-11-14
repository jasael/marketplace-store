import { Product } from "@/app/page";
import { delay } from "./utils";

export async function fetchFilteredProducts({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  // Only use this line when you're developing

  const URL_BASE = new URL("http://localhost:3000/products");

  if (query) URL_BASE.searchParams.append("query", query);
  if (currentPage) URL_BASE.searchParams.append("page", `${currentPage}`);

  const response = await fetch(URL_BASE);

  const data = await response.json();

  const products: Product[] = data.map((d: any) => ({
    ...d,
    seller: {
      name: "Seller",
      slug: "seller",
    },
  }));

  return products;
}

export async function fetchProductsPages(query: string) {
  const URL_BASE = new URL("http://localhost:3000/products/count");

  if (query) URL_BASE.searchParams.append("query", query);

  const response = await fetch(URL_BASE);

  const data: number = await response.json();

  const totalPages = Math.ceil(data / 20);

  return totalPages;
}
