import { AppSidebar } from "@/components/app-sidebar/app-sidebar";
import ListProducts from "@/components/list-products/list-products";
import ListProductsSkeleton from "@/components/list-products/list-products-skeleton";
import AppPagination from "@/components/pagination/app-pagination";

import ProductCard from "@/components/product-card/product-card";
import { fetchProductsPages } from "@/lib/data";
import { Suspense } from "react";

export interface Product {
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

export default async function Home(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = await fetchProductsPages(query);

  return (
    <>
      <AppSidebar />

      <div className="mx-auto max-w-7xl flex-1 flex flex-col items-center justify-center font-sans dark:bg-black  p-4 gap-6">
        <Suspense key={query + currentPage} fallback={<ListProductsSkeleton />}>
          <ListProducts query={query} currentPage={currentPage} />
        </Suspense>

        {totalPages !== 0 && <AppPagination totalPages={totalPages} />}
      </div>
    </>
  );
}
