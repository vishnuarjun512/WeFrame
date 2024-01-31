import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { BsArrowDownShort } from "react-icons/bs";
import Image from "next/image";

const UserSwitch = () => {
  return (
    <Popover>
      <PopoverTrigger asChild className="py-7">
        <Button className="rounded-xl" variant="outline">
          <div className="flex items-center justify-around gap-3">
            <div className="w-6 h-6 relative">
              <Image alt="User Image" fill src="/user.png" loading="eager" />
            </div>
            <div className="bg-">
              <p>Welcome back</p>
              <p>John Doe</p>
            </div>
            <BsArrowDownShort className="mr-2 hidden md:block" />
          </div>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-50">
        <div className="grid gap-2">
          {["Settings", "Logout"].map((item, index) => (
            <div key={index} className="hover:bg-slate-400 p-2 rounded-xl">
              {item}
            </div>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default UserSwitch;
