import React from "react";
import { MainNav } from "./main-nav";
import { ToggleMenu } from "./toggle-menu";
import { UserProfileButton } from "./user-profile";

const Header = () => {
  return (
    <div className="w-screen p-5 md:p-10 flex items-center justify-start">
      <h2 className="font-bold text-2xl md:text-4xl tracking-wider text-neutral-700">
        Bolgs Spot
      </h2>

      <div className="flex items-center ml-auto">
        <MainNav />
        <UserProfileButton />
        <ToggleMenu />
      </div>
    </div>
  );
};

export default Header;
