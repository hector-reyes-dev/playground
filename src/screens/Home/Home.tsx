import { MenuIcon } from "lucide-react";
import React from "react";
import { Avatar, AvatarImage } from "../../components/ui/avatar";
import { Button } from "../../components/ui/button";
import { CommunitySection } from "./sections/CommunitySection";
import { FooterSection } from "./sections/FooterSection";
import { HeroSection } from "./sections/HeroSection";
import { NewsUpdatesSection } from "./sections/NewsUpdatesSection";
import { RewardsSection } from "./sections/RewardsSection";

export const Home = (): JSX.Element => {
  return (
    <div className="flex flex-col items-center px-0 py-6 relative bg-[#18122B]">
      <div className="absolute w-[845px] h-[845px] top-6 left-[296px] bg-[#4a8fe7] rounded-[422.5px] blur-[60px] opacity-15" />

      <header className="flex items-center justify-between px-20 py-0 relative self-stretch w-full flex-[0_0_auto] bg-transparent">
        <Button variant="ghost" size="icon" className="relative w-11 h-11 p-0">
          <MenuIcon className="w-11 h-11" />
        </Button>

        <div className="relative w-[196px] h-16 flex items-center justify-center">
          <img
            className="h-16 w-auto object-contain"
            alt="Logo"
            src="/Logo.png"
          />
        </div>

        <div className="relative w-[47px] h-11">
          <div className="relative h-[45px]">
            <Avatar className="absolute w-10 h-10 top-0.5 left-[7px]">
              <AvatarImage src="/ellipse-6.png" alt="User profile" />
            </Avatar>

            <img
              className="absolute w-[39px] h-[45px] top-0 left-1"
              alt="Ellipse"
              src="/ellipse-7.svg"
            />

            <img
              className="absolute w-4 h-[17px] top-[26px] left-0"
              alt="Level"
              src="/level.svg"
            />
          </div>
        </div>
      </header>

      <HeroSection />
      <CommunitySection />
      <RewardsSection />
      <NewsUpdatesSection />
      <FooterSection />
    </div>
  );
};