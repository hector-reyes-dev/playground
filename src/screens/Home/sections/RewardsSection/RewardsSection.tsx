import { ArrowRightIcon, StarIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const RewardsSection = (): JSX.Element => {
  // Reward card data for mapping
  const rewardCards = [
    {
      id: 1,
      image: "/image-19-1.png",
      title: "Hextech Chest",
      points: "200",
    },
    {
      id: 2,
      image: "/image-4.png",
      title: "Legendary Skin: Dragonborn Yasuo",
      points: "2,000",
    },
    {
      id: 3,
      image: "/image-19-1.png",
      title: "1 Hextech Chest + Key",
      points: "200",
    },
    {
      id: 4,
      image: "/image-5.png",
      title: "Legendary Skin: Dragonborn Yasuo",
      points: "2,000",
    },
  ];

  return (
    <section className="flex flex-col items-center gap-10 px-20 py-0 relative w-full">
      <div className="flex items-center justify-between relative w-full">
        <h2 className="[font-family:'Red_Hat_Display',Helvetica] font-bold text-white text-[32px] tracking-[-0.32px] leading-[38.4px]">
          Spend Your Points
        </h2>

        <Button
          variant="outline"
          className="inline-flex gap-2 px-9 py-3 bg-[#feb07f1a] border-[#feb07f] shadow-elevation-card items-center justify-center rounded-[40px] border-[0.5px] border-solid"
        >
          <span className="[font-family:'Red_Hat_Text',Helvetica] font-normal text-white text-xl tracking-[-0.20px] leading-5">
            Browse All Rewards
          </span>
          <ArrowRightIcon className="w-6 h-6" />
        </Button>
      </div>

      <div className="flex items-start justify-center gap-6 relative w-full">
        {rewardCards.map((card) => (
          <Card
            key={card.id}
            className="flex flex-col w-[302px] items-start bg-[#0e0e1a] rounded-2xl border-[0.5px] border-solid border-[#4a8fe733] overflow-hidden"
          >
            <div className="w-full">
              <img
                className="w-full h-[178px] object-cover"
                alt={card.title}
                src={card.image}
              />
            </div>

            <CardContent className="items-center justify-center gap-4 p-6 self-stretch w-full flex flex-col">
              <h3 className="self-stretch [font-family:'Red_Hat_Text',Helvetica] font-normal text-white text-lg text-center tracking-[-0.54px] leading-[18px]">
                {card.title}
              </h3>

              <div className="flex gap-4 px-4 py-2 w-full bg-[#4a8fe733] border-[#4a8fe7] items-center justify-center rounded-[40px] border-[0.5px] border-solid">
                <div className="gap-1 inline-flex items-center">
                  <StarIcon className="w-6 h-6" />
                  <span className="[font-family:'Red_Hat_Display',Helvetica] font-bold text-white text-xl tracking-[-0.60px] leading-5">
                    {card.points}
                  </span>
                </div>

                <span className="[font-family:'Red_Hat_Text',Helvetica] font-normal text-[#4a8fe7] text-base tracking-[-0.16px] leading-4">
                  Claim Reward
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
