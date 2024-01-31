import React from "react";
import { FaAtlassian } from "react-icons/fa";
import { BsArrowRight, BsArrowDownShort } from "react-icons/bs";
import { GoHomeFill } from "react-icons/go";
import {
  IoPeopleCircleOutline,
  IoNotifications,
  IoSettingsOutline,
} from "react-icons/io5";
import { FaComputer } from "react-icons/fa6";
import { DiGoogleAnalytics } from "react-icons/di";
import { MdPermMedia, MdWallpaper } from "react-icons/md";
import { BiSupport } from "react-icons/bi";

const Sidebar = () => {
  return (
    <nav className="fixed h-screen w-[18%] min-w-[30px] overflow-hidden flex flex-col bg-gray-200 justify-between">
      <div className="flex flex-col items-center justify-center">
        <div className="hidden md:flex justify-center items-center gap-3 p-3 py-5 text-black">
          <FaAtlassian className="w-8 h-8 rounded-lg hidden md:block" />
          <h1 className=" text-center font-bold text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
            Weframe
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center gap-3 p-3 w-full">
          {[
            { name: "Dashboard", icon: <GoHomeFill size={20} /> },
            { name: "Content", icon: <MdWallpaper size={20} /> },
            { name: "Team", icon: <IoPeopleCircleOutline size={20} /> },
            { name: "App/Web", icon: <FaComputer size={20} /> },
            { name: "Analytics", icon: <DiGoogleAnalytics size={20} /> },
            { name: "Media", icon: <MdPermMedia size={20} /> },
            { name: "Notification", icon: <IoNotifications size={20} /> },
            { name: "Settings", icon: <IoSettingsOutline size={20} /> },
          ].map((item, index) => (
            <div
              key={index}
              className="group min-w-[10%] w-[90%] cursor-pointer h-10 rounded-lg flex hover:bg-[#7950F2]  text-black hover:text-white ease-in duration-200 items-center justify-center md:justify-between gap-2 "
            >
              <div className="flex items-center justify-center gap-2 p-1 md:px-2">
                {item.icon}
                <p className="hidden md:block">{item.name}</p>
              </div>
              <BsArrowRight className="mr-2 hidden md:block group-hover:translate-x-0 transition-all duration-150 ease-in-out -translate-x-3" />
            </div>
          ))}
        </div>
      </div>
      {/* User Section */}
      <div className="rounded-lg p-3 my-2 mx-1 gap-2 flex justify-center items-center text-black hover:text-white w-[90%] bg-[#E8E9FF] hover:bg-[#6665a5] ease-in duration-150">
        <BiSupport size={20} />
        <p className="hidden md:block">Contact Support</p>
      </div>
    </nav>
  );
};

export default Sidebar;
