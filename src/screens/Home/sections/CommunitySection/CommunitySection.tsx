import {
  ArrowRightIcon,
  CalendarIcon,
  CheckSquareIcon,
  GamepadIcon,
  ShoppingCartIcon,
  StarIcon,
  TrophyIcon,
} from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

export const CommunitySection = (): JSX.Element => {
  // Data for mission cards
  const missions = [
    {
      type: "New Mission",
      typeColor: "text-[#feb07f]",
      icon: <CheckSquareIcon className="w-6 h-6" />,
      title: "Sign up for an upcoming tournament",
      completed: false,
      points: 500,
    },
    {
      type: "New Mission",
      typeColor: "text-[#feb07f]",
      icon: <GamepadIcon className="w-6 h-6" />,
      title: "Play your first match in any tournament",
      completed: false,
      points: 500,
    },
    {
      type: "Completed Mission",
      typeColor: "text-[#4a8fe7]",
      icon: <ShoppingCartIcon className="w-6 h-6" />,
      title: "Claim a Reward",
      completed: true,
      points: 500,
    },
  ];

  // Survey options
  const surveyOptions = [
    { label: "1v1 Duels", selected: true },
    { label: "2v2 Duos", selected: false },
    { label: "5v5 Squads", selected: false },
  ];

  return (
    <div className="flex flex-col items-start gap-8 px-20 py-0 relative">
      <Card className="flex flex-col items-start gap-6 p-10 w-full rounded-2xl [background:url(..//image-7.png)_50%_50%_/_cover,linear-gradient(0deg,rgba(12,9,21,1)_0%,rgba(12,9,21,1)_100%)] border-none">
        <div className="flex items-start justify-center gap-6 w-full">
          {/* Tournament Card */}
          <Card className="flex w-[792px] items-start bg-[#0e0e1b80] rounded-3xl overflow-hidden border border-solid border-[#4a8fe780] backdrop-blur-[2px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(2px)_brightness(100%)]">
            <CardContent className="items-start gap-8 p-6 flex-1 grow rounded-[0px_0px_24px_24px] flex flex-col">
              <div className="inline-flex items-center justify-center gap-1">
                <StarIcon className="w-6 h-6" />
                <div className="w-fit font-normal text-[#feb07f] text-[15px] tracking-[-0.15px] leading-[15px] whitespace-nowrap">
                  New Tournament
                </div>
              </div>

              <div className="items-start gap-4 w-full flex flex-col">
                <div className="flex gap-2 w-full flex-col items-start">
                  <div className="w-full mt-[-1.00px] font-bold text-white text-[32px] tracking-[0] leading-[38.4px]">
                    Northern Clash Qualifiers
                  </div>

                  <div className="inline-flex items-center gap-2">
                    <CalendarIcon className="w-6 h-6" />
                    <div className="w-fit font-normal text-[#c7c4d4] text-[15px] tracking-[0] leading-[18.0px] whitespace-nowrap">
                      January 25
                    </div>
                  </div>
                </div>

                <div className="w-full font-normal text-transparent text-[15px] tracking-[0] leading-[22.5px]">
                  <span className="font-light text-[#c7c4d4]">
                    Show your skills on Summoner&apos;s Rift. Gather your team,
                    face the best players in your region, and win exclusive
                    prizes like unique skins and 10,000 Riot Points.{" "}
                  </span>

                  <span className="font-bold text-[#c7c4d4]">
                    The tournament kicks off on January 25th!
                  </span>
                </div>
              </div>
            </CardContent>

            <div className="flex flex-col items-start justify-end px-10 py-6 relative flex-1 self-stretch grow [background:url(..//image-8.png)_50%_50%_/_cover]">
              <Button className="flex gap-4 px-9 py-3 w-full bg-[#0e0e1b33] border-[#4a8fe7] shadow-buttons backdrop-blur-sm backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(4px)_brightness(100%)] items-center justify-center mb-[-1.00px] rounded-[40px] border-[0.5px] border-solid">
                <div className="inline-flex items-center gap-2">
                  <TrophyIcon className="w-6 h-6" />
                  <div className="w-fit font-normal text-white text-xl tracking-[-0.20px] leading-5 whitespace-nowrap">
                    Join Now
                  </div>
                </div>

                <div className="gap-0.5 inline-flex items-center">
                  <StarIcon className="w-6 h-6" />
                  <div className="w-fit font-medium text-white text-xl tracking-[-0.60px] leading-5 whitespace-nowrap">
                    +1,000
                  </div>
                </div>
              </Button>
            </div>
          </Card>

          {/* Survey Card */}
          <Card className="flex-1 grow bg-[#0c0915] rounded-3xl overflow-hidden border border-solid border-[#4a8fe780] backdrop-blur-[2px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(2px)_brightness(100%)]">
            <CardContent className="items-start gap-4 p-6 w-full flex flex-col">
              <div className="inline-flex items-center justify-center gap-1">
                <StarIcon className="w-6 h-6" />
                <div className="w-fit font-normal text-[#feb07f] text-[15px] tracking-[-0.15px] leading-[15px] whitespace-nowrap">
                  New Survey
                </div>
              </div>

              <div className="gap-4 w-full flex flex-col items-start">
                <div className="w-full mt-[-1.00px] font-extrabold text-white text-base tracking-[0] leading-[19.2px]">
                  When it&#39;s time to compete, what team format do you prefer
                  to prove your skill?
                </div>

                <div className="flex flex-col items-start gap-2 w-full">
                  {surveyOptions.map((option, index) => (
                    <React.Fragment key={option.label}>
                      <div
                        className={`gap-2 flex items-center justify-center p-2 w-full rounded ${option.selected ? "text-[#4a8fe7] font-medium" : "text-white font-normal"}`}
                      >
                        {option.selected && (
                          <ArrowRightIcon className="w-4 h-4" />
                        )}
                        <div className="flex-1 mt-[-1.00px] text-base tracking-[0] leading-[19.2px]">
                          {option.label}
                        </div>
                      </div>
                      {index < surveyOptions.length - 1 && (
                        <Separator className="w-full h-px" />
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              <Button className="flex gap-4 px-9 py-3 w-full bg-[#ffffff1a] border-[#ffffff80] shadow-buttons backdrop-blur-sm backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(4px)_brightness(100%)] items-center justify-center mb-[-1.00px] rounded-[40px] border-[0.5px] border-solid">
                <div className="inline-flex items-center gap-2">
                  <CheckSquareIcon className="w-6 h-6" />
                  <div className="w-fit font-normal text-white text-xl tracking-[-0.20px] leading-5 whitespace-nowrap">
                    Submit Vote
                  </div>
                </div>

                <div className="gap-0.5 inline-flex items-center">
                  <StarIcon className="w-6 h-6" />
                  <div className="w-fit font-medium text-white text-xl tracking-[-0.60px] leading-5 whitespace-nowrap">
                    +500
                  </div>
                </div>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Mission Cards Row */}
        <div className="flex items-start gap-6 w-full">
          <div className="flex items-start gap-6 flex-1 grow">
            {missions.map((mission, index) => (
              <Card
                key={index}
                className={`p-4 flex flex-col items-start justify-center gap-2 flex-1 grow rounded-2xl border border-solid backdrop-blur-sm backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(4px)_brightness(100%)] 
                  ${
                    mission.completed
                      ? "bg-[#4a8fe71f] border-[#4a8fe740] px-6 py-4"
                      : "bg-[#ffffff0a] border-[#ffffff40]"
                  }`}
              >
                <div className="flex items-start justify-between w-full">
                  <div className="inline-flex items-center justify-center gap-1">
                    <StarIcon className="w-6 h-6" />
                    <div
                      className={`w-fit font-normal text-[15px] tracking-[-0.15px] leading-[15px] whitespace-nowrap ${mission.typeColor}`}
                    >
                      {mission.type}
                    </div>
                  </div>

                  <div className="gap-0.5 inline-flex items-center">
                    <StarIcon className="w-6 h-6" />
                    <div
                      className={`w-fit font-medium text-base text-right tracking-[0] leading-[19.2px] whitespace-nowrap ${mission.completed ? "text-[#4a8fe7]" : "text-white"}`}
                    >
                      +{mission.points}
                    </div>
                  </div>
                </div>

                <div className="flex w-full items-center gap-2">
                  {mission.icon}
                  <div className="flex flex-col items-start gap-2 flex-1 grow">
                    <div
                      className={`w-fit font-medium text-base tracking-[0] leading-[19.2px] whitespace-nowrap mt-[-1.00px] ${mission.completed ? "text-[#4a8fe7]" : "text-white"}`}
                    >
                      {mission.title}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
};
