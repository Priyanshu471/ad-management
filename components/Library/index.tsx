"use client";
import { useState } from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import Pagination from "../pagination";
const categories = ["Images", "Logo", "Videos"];
const MultiMediaLibrary = () => {
  const [page, setPage] = useState(1);
  const contentPerPage = 10;
  const content = 10;
  const totalPages = content / contentPerPage;
  return (
    <>
      <div className="flex items-center justify-center py-2 flex-wrap">
        <Button
          type="button"
          className="text-primary hover:text-white border border-primary bg-white hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary/30 rounded-lg text-base font-medium px-5 py-2.5 text-center me-3 mb-3 "
        >
          All categories
        </Button>
        {categories.map((category, i) => (
          <Button
            key={i}
            type="button"
            className="text-gray-900 border border-white  bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-lg text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white "
          >
            {category}
          </Button>
        ))}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="relative w-full h-40 md:h-48 rounded-lg overflow-hidden"
          >
            <Image
              src={`https://flowbite.s3.amazonaws.com/docs/gallery/square/image-${
                i + 1
              }.jpg`}
              alt="image"
              layout="fill"
              loader={({ src }) => src}
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        ))}
      </div>
      <Pagination page={page} setPage={setPage} totalPages={totalPages} />
    </>
  );
};
export default MultiMediaLibrary;
