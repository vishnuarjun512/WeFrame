import React from "react";

import { BsSearch } from "react-icons/bs";
import DatePicker from "./DatePicker";
import UserSwitch from "./UserSwitch";

const Header = () => {
  return (
    <header className="flex items-center justify-between p-1">
      <div className="flex items-center gap-3 relative p-1">
        <input
          type="text"
          className="px-4 py-2 w-[130px] md:w-[250px] text-gray-400 placeholder-inherit outline-none rounded-lg"
          placeholder="Search..."
        />
        <BsSearch className="absolute text-inherit cursor-pointer right-[5%]" />
      </div>
      <div className="flex md:flex-row flex-col items-center gap-4">
        <DatePicker />
        <UserSwitch />
      </div>
    </header>
  );
};

export default Header;
