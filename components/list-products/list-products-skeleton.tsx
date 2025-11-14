import React, { useId } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

export default function ListProductsSkeleton() {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {Array.from({ length: 20 }).map(() => {
        const id = useId();
        return (
          <Card key={id} className="pt-0 gap-2">
            <CardHeader className="p-0">
              <Skeleton className="w-full h-56 object-cover rounded-lg" />
            </CardHeader>
            <CardContent className="flex flex-col gap-2 mb-4">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
              {/* <CardTitle>{name}</CardTitle>
            <CardDescription>{seller.name}</CardDescription> */}
            </CardContent>
            <CardFooter className="flex justify-between gap-2">
              <Skeleton className="h-4 w-[100px]" />
              <Skeleton className="h-10 w-10" />
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
}
