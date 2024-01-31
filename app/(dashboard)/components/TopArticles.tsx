import React from "react";

import user1 from "@/public/users/user1.avif";
import user2 from "@/public/users/user2.avif";
import user3 from "@/public/users/user3.avif";

import story1 from "@/public/stories/story1.avif";
import story2 from "@/public/stories/story2.avif";
import story3 from "@/public/stories/story3.avif";
import Image from "next/image";

const truncateText = (text: string, maxLength: number) => {
  const words = text.split(" ");
  if (words.length > maxLength) {
    return words.slice(0, maxLength).join(" ") + "...";
  }
  return text;
};

function TopArticles() {
  return (
    <div className="my-5">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-medium mb-3">Top Articles</h1>
        <h1
          role="button"
          tabIndex={0}
          aria-label="See all articles"
          className="text-purple-600 font-semibold cursor-pointer hover:underline"
        >
          See all
        </h1>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3  gap-2">
        {[
          {
            id: 1,
            category: "Business",
            date: "20 Sep 2022",
            articleImg: story1,
            userImg: user1,
            user: "Maria Doe",
            published: false,
            title: "7 Rules of Effective Branding",
            description: "Why Branding matters for your Business",
            tags: ["branding", "communication", "branding"],
          },
          {
            id: 2,
            category: "Economy",
            date: "20 Sep 2022",
            articleImg: story2,
            userImg: user2,
            published: true,
            user: "Maria Doe",
            title: "Research of biodiversity and its history",
            description: "Lorem ipsum dolor sit amet.consecturo",
            tags: ["world", "communication", "population"],
          },
          {
            id: 3,
            category: "Economy",
            date: "20 Sep 2022",
            articleImg: story3,
            userImg: user3,
            published: true,
            user: "Maria Doe",
            title: "Close and historical ties to history",
            description: "Lorem ipsum dolor sit amet.consecturo",
            tags: ["world", "communication", "population"],
          },
        ].map((item) => (
          <div
            role="listitem"
            key={item.id}
            className="p-2 hover:scale-105 duration-200 ease-in-out transition-all flex flex-col bg-white gap-2 min-w-[350px] min-h-[200px] rounded-lg"
          >
            <div className="h-[250px] relative">
              <Image
                className="rounded-xl"
                src={item.articleImg}
                alt={item.title}
                loading="eager"
                fill
              />
            </div>
            <div className="w-full flex justify-between">
              <div className="flex items-center gap-1">
                <p className="text-purple-500 uppercase font-bold text-base">
                  {item.category}
                </p>
                <p className="text-gray-500 text-sm ">{item.date}</p>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src={item.userImg}
                  className="w-6 h-6 rounded-full"
                  alt={item.user}
                  loading="eager"
                />
                <p className="font-semibold text-base">{item.user}</p>
              </div>
            </div>
            <div className="flex justify-between items-start">
              <div className="flex flex-col gap-2">
                <h1 className="text-lg leading-none">
                  {truncateText(item.title, 4)}
                </h1>
                <h3 className="text-sm text-gray-500 leading-none">
                  {item.description}
                </h3>
              </div>
              {item.published ? (
                <button
                  aria-label="Published"
                  className="text-sm bg-green-400 hover:bg-green-300 p-2 rounded-xl text-green-800 hover:text-white"
                >
                  Published
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
            <div className="flex gap-2 justify-start">
              {item.tags.map((tag, i) => (
                <p
                  key={i}
                  className="bg-gray-300 text-sm text-gray-500 p-2 rounded-xl"
                >
                  {tag}
                </p>
              ))}
            </div>
            <div className="flex gap-2 w-full">
              <button className="w-[75%] bg-purple-300 text-purple-600 p-3 rounded-lg">
                View
              </button>
              <button className="w-[25%] bg-gray-300 text-lg text-purple-700 p-3 rounded-lg">
                ...
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopArticles;
