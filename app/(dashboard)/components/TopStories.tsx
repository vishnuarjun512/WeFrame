"use client";
import React, { Suspense, lazy, useState } from "react";
import { BsGraphUpArrow } from "react-icons/bs";
import { FaAngleDown, FaEye } from "react-icons/fa";

import {
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
const Dialog = lazy(() => import("@/components/ui/dialog"));

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";

import user1 from "@/public/users/user1.avif";
import user2 from "@/public/users/user2.avif";
import user3 from "@/public/users/user3.avif";
import user4 from "@/public/users/user4.avif";

import article2 from "@/public/articles/article2.avif";
import article3 from "@/public/articles/article3.avif";
import article4 from "@/public/articles/article4.avif";
import article5 from "@/public/articles/article5.avif";
import article6 from "@/public/articles/article6.avif";
import article7 from "@/public/articles/article7.avif";

import Image from "next/image";

function TopStories() {
  const [imageSelected, setImageSelected] = useState(false);
  const [selectedStory, setSelectedStory]: any = useState(null);

  const openDialog = (story: any) => {
    setImageSelected(true);
    setSelectedStory(story);
  };

  const closeDialog = () => {
    setImageSelected(false);
    setSelectedStory(null);
  };

  return (
    <div className="my-5">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-medium mb-3">Top Stories</h1>
        <h1 className="text-purple-600 font-semibold cursor-pointer hover:underline">
          See all
        </h1>
      </div>
      {selectedStory && (
        <Suspense fallback={<div>Loading...</div>}>
          <Dialog open={imageSelected} onOpenChange={closeDialog}>
            <DialogContent className="min-w-[800px] min-h-[90vh] flex flex-col items-center">
              <DialogHeader className="w-full">
                <DialogTitle>
                  <div className="w-full flex whitespace-nowrap items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <Image
                        src={selectedStory.userImg}
                        alt={selectedStory.title}
                        className="w-6 h-6 rounded-full"
                        loading="eager"
                        sizes="(max-width: 600px) 500px"
                      />
                      <h1
                        aria-label="Story username"
                        className="text-xl text-gray-400"
                      >
                        {selectedStory.user}
                      </h1>
                      <h2
                        aria-label="Story date"
                        className="text-lg text-blue-400"
                      >
                        Created on {selectedStory.date}
                      </h2>
                    </div>
                    <div
                      aria-label="Story popover for accessbility"
                      className="flex gap-2 mr-5"
                    >
                      <Popover>
                        <PopoverTrigger className="flex items-center gap-2 text-base bg-gray-200 p-2 rounded-lg">
                          <p>Accessibility</p>
                          <FaAngleDown />
                        </PopoverTrigger>
                        <PopoverContent className="w-[200px]">
                          <div className="flex flex-col items-center justify-center gap-2">
                            {["Public", "Private", "User Only"].map(
                              (item, index) => (
                                <p
                                  className="w-full p-2 rounded-lg hover:bg-gray-400 bg-gray-300 cursor-pointer"
                                  key={index}
                                >
                                  {item}
                                </p>
                              )
                            )}
                          </div>
                        </PopoverContent>
                      </Popover>
                      <div className="bg-gray-300 p-2 rounded-xl">...</div>
                    </div>
                  </div>
                </DialogTitle>
              </DialogHeader>

              <div aria-label="Story Carousel" className="relative w-[80%]">
                <Carousel className="">
                  <CarouselContent>
                    {selectedStory.articleImg.map(
                      (image: string, index: number) => (
                        <CarouselItem
                          key={index}
                          aria-label="Story Carousel Item"
                          className="flex items-center justify-center"
                        >
                          <Image
                            className="h-[600px]"
                            src={image}
                            alt={selectedStory.title}
                            height={400}
                            width={300}
                            sizes="(max-width: 600px) 500px"
                            loading="eager"
                          />
                        </CarouselItem>
                      )
                    )}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>
            </DialogContent>
          </Dialog>
        </Suspense>
      )}
      <div className="grid md:grid-cols-3 lg:grid-cols-4 place-content-center  gap-2">
        {[
          {
            id: 1,
            views: 428,
            category: "Business",
            date: "20 Sep 2022",
            articleImg: [article5, article7, article6],
            userImg: user1,
            user: "Maria Doe",
            published: "published",
            title: "How 7 lines code turned into $36 Billion Empire",
            description: "Why Branding matters for your Business",
            tags: ["branding", "communication", "branding"],
          },
          {
            id: 2,
            views: 2228,
            category: "Economy",
            date: "20 Sep 2022",
            articleImg: [article4, article2, article3],
            userImg: user2,

            published: "created",
            user: "Maria Doe",
            title: "Chez pierre restaurant in Monte Carlo by Vuidafieri",
            description: "Lorem ipsum dolor sit amet.consecturo",
            tags: ["world", "communication", "population"],
          },
          {
            id: 3,
            views: 3214,
            category: "Economy",
            date: "20 Sep 2022",
            articleImg: [article2, article3, article4],
            userImg: user3,

            published: "drafted",
            user: "Maria Doe",
            title: "Teknion wins Gold at 2022 International Design Awards",
            description: "Lorem ipsum dolor sit amet.consecturo",
            tags: ["world", "communication", "population"],
          },
          {
            id: 4,
            views: 287,
            category: "Businness",
            date: "20 Sep 2022",
            articleImg: [article3, article4, article5],
            userImg: user4,

            published: "drafted",
            user: "Maria Doe",
            title: "How 7 lines code turned into $36 Billion Empire",
            description: "Lorem ipsum dolor sit amet.consecturo",
            tags: ["world", "communication", "population"],
          },
        ].map((item) => (
          <div
            key={item.id}
            aria-label="Story Item"
            className="relative hover:scale-105 duration-200 ease-in-out transition-all min-h-[400px] max-w-[300px] object-center p-2 flex flex-col justify-between bg-white gap-2 rounded-lg"
          >
            <Image
              src={item.articleImg[0]}
              fill
              alt={item.title}
              sizes="(max-width: 600px) 500px"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-95 rounded-lg"></div>
            <div className="flex items-center gap-2 justify-end">
              <div className="flex bg-purple-300 p-1 rounded-xl gap-1 items-center text-sm text-purple-600">
                <FaEye />
                <p aria-label="Story views">{item.views}</p>
              </div>
              <div className="flex bg-purple-300 p-1 rounded-xl gap-1 items-center text-sm text-purple-600">
                <BsGraphUpArrow />
              </div>
            </div>
            <div className="p-1 flex flex-col gap-1 z-10 w-full">
              <div className="flex justify-between items-start">
                <div className="flex flex-col gap-2">
                  <h1
                    aria-label="Story title"
                    className="text-lg text-white leading-6"
                  >
                    {item.title}
                  </h1>
                </div>
              </div>
              <div className="w-full flex  justify-between">
                <div className="flex items-center gap-[2px]">
                  <p
                    aria-label="Story category"
                    className="text-white uppercase font-bold text-[14px]"
                  >
                    {item.category}
                  </p>
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                  <p
                    aria-label="Story date"
                    className="text-gray-400 text-[12px] whitespace-nowrap"
                  >
                    {item.date}
                  </p>
                </div>
                {item.published == "published" ? (
                  <button
                    aria-label="Published"
                    className="text-sm bg-green-400 hover:bg-green-300 p-2 rounded-xl text-green-800 hover:text-white"
                  >
                    Published
                  </button>
                ) : item.published == "drafted" ? (
                  <button
                    aria-label="Published"
                    className="text-sm bg-gray-400 hover:bg-purple-300 p-2 rounded-xl text-black hover:text-white"
                  >
                    Drafted
                  </button>
                ) : (
                  <button
                    aria-label="Created"
                    className="text-sm bg-purple-400 hover:bg-purple-300 p-2 rounded-xl text-purple-800 hover:text-white"
                  >
                    Created
                  </button>
                )}
              </div>
              <div className="flex gap-2 w-full">
                <button
                  onClick={() => openDialog(item)}
                  className="w-[75%] bg-purple-300 text-purple-600 p-2 rounded-lg"
                >
                  View
                </button>
                <button className="w-[25%] bg-gray-300 text-lg text-purple-700 p-2 rounded-lg">
                  ...
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopStories;
