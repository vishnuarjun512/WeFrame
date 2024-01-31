import React from "react";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { FaNewspaper } from "react-icons/fa";
import { MdAutoStories } from "react-icons/md";
import { RiAdvertisementFill } from "react-icons/ri";

function HeadStats() {
  return (
    <div className="mt-6 mx-1 w-full">
      <div className="my-2">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal">
          Hello Admin,
        </h1>
        <h4 className="text-xs md:text-sm text-gray-400">
          This is what we got for you today.
        </h4>
      </div>
      <div className="w-full grid sm:grid-cols-2 lg:grid-cols-4 content-center place-items-center gap-2">
        {[
          {
            name: "Articles",
            updates: 4950,
            increase: 38.8,
            icon: <FaNewspaper size={80} />,
          },
          {
            name: "Categories",
            updates: 1212,
            increase: 23.2,
            icon: <BiSolidCategoryAlt size={80} />,
          },
          {
            name: "Stories",
            updates: 4950,
            increase: 38.8,
            icon: <MdAutoStories size={80} />,
          },
          {
            name: "Advertisement",
            updates: 1750,
            increase: 38.8,
            icon: <RiAdvertisementFill size={80} />,
          },
        ].map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-2 w-[180px] h-[100px] md:w-[250px] md:h-[150px] bg-white rounded-lg justify-center"
          >
            <div className=" text-[#7950F2]">{item.icon}</div>
            <div>
              <p className="text-sm md:text-lg text-gray-400">{item.name}</p>
              <p className="text-xs md:text-sm font-bold">
                {item.updates} New Updates
              </p>
              <p className="md:text-sm text-xs font-bold">
                <span className="text-green-500">{item.increase}%</span> &uarr;
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HeadStats;
