import React from "react";
import adv1 from "@/public/adv/adv1.avif";
import adv2 from "@/public/adv/adv2.png";
import adv3 from "@/public/adv/adv3.avif";
import Image from "next/image";

function Advertisement() {
  return (
    <div className="my-5">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-medium mb-3">Advertisement</h1>
        <h1 className="text-purple-600 font-semibold cursor-pointer hover:underline">
          See all
        </h1>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 flex-nowrap gap-2">
        {[
          {
            id: 1,
            articleImg: adv1,
            title: "Build your business",
            description:
              "Shopify has all the tools you need to start, sell, market, and manage.",
          },
          {
            id: 2,
            articleImg: adv2,
            title: "Libre Coffee",
            description:
              "It's usually served in small cups, so no one will be surprised if you order more than one cup",
          },
          {
            id: 3,
            articleImg: adv3,
            title: "KFC",
            description:
              "KFC is an American fast food restaurant chain headquartered in Louisville, Kentucky.",
          },
        ].map((item) => (
          <div
            key={item.id}
            className="relative p-2 hover:scale-105 duration-200 ease-in-out transition-all flex max-h-[180px] justify-between bg-white gap-2 rounded-lg"
          >
            <Image
              className="rounded-xl w-[50%]"
              src={item.articleImg}
              alt={item.title}
              loading="eager"
              sizes="(max-width: 600px) 300px"
            />

            <div className="w-[50%] flex-col py-3 flex justify-between">
              <h1 className="text-sm md:text-lg text-black leading-none">
                {item.title}
              </h1>
              <h4 className="text-xs md:text-sm text-gray-400 leading-none">
                {item.description}
              </h4>

              <div className="flex gap-2 w-full">
                <button className="w-[75%] bg-purple-300 text-purple-600 p-2 rounded-lg text-sm">
                  Visit
                </button>
                <button className="w-[25%] bg-gray-300 text-purple-700 p-2 rounded-lg text-xs">
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

export default Advertisement;
