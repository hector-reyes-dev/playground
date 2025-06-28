import React from "react";
import { ArrowRightIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const HeroSection = (): JSX.Element => {
  // Tournament card data
  const tournamentCards = [
    {
      title: "Valorant MRC",
      backgroundImage: "/hero-img-1.png",
      logo: {
        type: "image",
        src: "/valorant-logo-white.png",
        width: "71px",
        height: "40px",
      },
      buttonText: "Tournaments",
      link: "/tournaments",
    },
    {
      title: "Playground Season 2",
      backgroundImage: "/hero-img-2.png",
      logo: { 
        type: "image", 
        src: "/playground-logo-white.png", 
        width: "122px", 
        height: "40px" 
      },
      buttonText: "Learn More",
      link: "#",
    },
    {
      title: "League of Legends MRC",
      backgroundImage: "/hero-img-3.png",
      logo: { 
        type: "image", 
        src: "/lol-logo-white.png", 
        width: "81px", 
        height: "32px" 
      },
      buttonText: "Tournaments",
      link: "/tournaments",
    },
  ];

  // Community join buttons data
  const communityButtons = [
    {
      platform: "Twitch",
      iconSrc: "/akar-icons-twitch-fill.svg",
      bgColor: "bg-[#feb07f33]",
      borderColor: "border-[#feb07f]",
      points: "+1,000",
    },
    {
      platform: "Discord",
      iconSrc: "/ic-baseline-discord.svg",
      bgColor: "bg-[#4a8fe733]",
      borderColor: "border-[#4a8fe7]",
      points: "+1,000",
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center gap-10 px-20 py-0 relative w-full">
      <div className="flex items-center gap-6 relative w-full">
        {tournamentCards.map((card, index) => (
          <Card
            key={`tournament-card-${index}`}
            className="flex flex-col h-[521px] items-start justify-end gap-4 relative flex-1 rounded-2xl overflow-hidden border-none shadow-elevation-card"
            style={{
              backgroundImage: `url(${card.backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: '50% 50%'
            }}
          >
            <CardContent className="flex flex-col items-start gap-4 p-6 relative self-stretch w-full mt-auto backdrop-blur-sm backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(4px)_brightness(100%)] bg-[linear-gradient(180deg,rgba(6,7,19,0)_0%,rgba(6,7,19,0.6)_35%,rgba(6,7,19,0.9)_100%)]">
              <div className="items-start gap-2 self-stretch w-full flex flex-col">
                <h3 className="relative self-stretch mt-[-1.00px] font-bold text-[#fff6ef] text-2xl tracking-[-0.24px] leading-[28.8px] font-['Red_Hat_Display',Helvetica]">
                  {card.title}
                </h3>

                <p className="relative self-stretch font-normal text-[15px] tracking-[0] leading-[15px] font-['Red_Hat_Text',Helvetica]">
                  <span className="font-light text-[#e0e0e0] leading-[18.0px]">
                    Show your skills on Summoner&apos;s Rift.{" "}
                  </span>
                  <span className="font-semibold text-[#e0e0e0] leading-[18.0px]">
                    The tournament kicks off on January 15th!
                  </span>
                </p>
              </div>

              <div className="justify-between flex items-center relative self-stretch w-full">
                <img
                  className={`relative w-[${card.logo.width}] h-[${card.logo.height}] object-contain`}
                  alt="Logo"
                  src={card.logo.src}
                />

                <Link to={card.link}>
                  <Button className="inline-flex gap-2 px-6 py-2 bg-[#feb07f26] border-[#feb07f] shadow-buttons backdrop-blur-sm backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(4px)_brightness(100%)] rounded-[40px] border-[0.5px] border-solid">
                    <span className="font-normal text-white text-base tracking-[-0.16px] leading-4 whitespace-nowrap font-['Red_Hat_Text',Helvetica]">
                      {card.buttonText}
                    </span>
                    <ArrowRightIcon className="w-6 h-6" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="flex items-center justify-between p-6 relative w-full rounded-2xl bg-transparent border-none">
        <div className="inline-flex justify-center gap-1 flex-col items-start">
          <h2 className="relative w-fit mt-[-1.00px] font-bold text-white text-[32px] tracking-[-0.32px] leading-[38.4px] whitespace-nowrap font-['Red_Hat_Display',Helvetica]">
            Join the Community
          </h2>
          <p className="relative self-stretch font-normal text-[#e0e0e0] text-base tracking-[0] leading-[19.2px] font-['Red_Hat_Text',Helvetica]">
            <span className="font-light">And get </span>
            <span className="font-bold">rewards</span>
            <span className="font-light">.</span>
          </p>
        </div>

        <div className="inline-flex items-center justify-end gap-8">
          {communityButtons.map((button, index) => (
            <Button
              key={`community-button-${index}`}
              className={`inline-flex gap-4 px-9 py-3 ${button.bgColor} ${button.borderColor} shadow-buttons backdrop-blur-sm backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(4px)_brightness(100%)] rounded-[40px] border-[0.5px] border-solid`}
            >
              <div className="inline-flex items-center gap-2">
                <img
                  className="w-6 h-6"
                  alt={`${button.platform} icon`}
                  src={button.iconSrc}
                />
                <span className="w-fit font-normal text-white text-xl tracking-[-0.20px] leading-5 whitespace-nowrap font-['Red_Hat_Text',Helvetica]">
                  Join {button.platform}
                </span>
              </div>
              <div className="gap-0.5 inline-flex items-center">
                <img
                  className="w-6 h-6"
                  alt="StarIcon icon"
                  src="/material-symbols-light-award-star-outline-rounded.svg"
                />
                <span className="w-fit font-medium text-white text-xl tracking-[-0.60px] leading-5 whitespace-nowrap font-['Red_Hat_Display',Helvetica]">
                  {button.points}
                </span>
              </div>
            </Button>
          ))}
        </div>
      </Card>
    </section>
  );
};