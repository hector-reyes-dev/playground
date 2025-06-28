import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const NewsUpdatesSection = (): JSX.Element => {
  // News data for mapping
  const newsItems = [
    {
      id: 1,
      image: "..//image-6.png",
      title: "How to Dominate the Mid-Lane in Season 14",
      description:
        "Discover the best champions and strategies for mid-lane dominance in the current meta. Discover the best champions and strategies for mid-lane dominance in the current meta.",
    },
    {
      id: 2,
      image: "..//image-7.png",
      title: "Patch 14.1 Highlights: Key Changes to Champions and Items",
      description:
        "Get the inside scoop on the latest League of Legends patch! Discover which champions received buffs, which items were nerfed, and how these changes impact the current meta.",
    },
    {
      id: 3,
      image: "..//image-8.png",
      title: "Top 5 Tips to Climb the Ranked Ladder in Season 14",
      description:
        "Struggling to climb in Ranked? Learn the best strategies, champion picks, and mindset tips to break into the next tier this season.",
    },
    {
      id: 4,
      image: "..//image-9.png",
      title: "How to Dominate the Mid-Lane in Season 14",
      description:
        "Discover the best champions and strategies for mid-lane dominance in the current meta. Discover the best champions and strategies for mid-lane dominance in the current meta.",
    },
  ];

  return (
    <section className="flex flex-col items-center gap-10 px-20 py-0 relative self-stretch w-full">
      <div className="flex items-center justify-between relative self-stretch w-full">
        <h2 className="relative w-fit [font-family:'Red_Hat_Display',Helvetica] font-bold text-white text-[32px] tracking-[-0.32px] leading-[38.4px] whitespace-nowrap">
          News &amp; Updates
        </h2>

        <Button
          variant="outline"
          className="inline-flex gap-2 px-9 py-3 bg-[#feb07f1a] border-[#feb07f] shadow-elevation-card text-white rounded-[40px] border-[0.5px] border-solid"
        >
          <span className="[font-family:'Red_Hat_Text',Helvetica] font-normal text-xl tracking-[-0.20px] leading-5">
            Browse All News
          </span>
          <ArrowRightIcon className="w-6 h-6" />
        </Button>
      </div>

      <div className="flex items-start justify-center gap-6 relative self-stretch w-full">
        {newsItems.map((item) => (
          <Card
            key={item.id}
            className="flex flex-col items-center relative flex-1 grow rounded-2xl bg-transparent border-none"
          >
            <div
              className="flex h-[230px] items-end justify-end p-4 relative self-stretch w-full rounded-2xl shadow-elevation-card"
              style={{ background: `url(${item.image}) 50% 50% / cover` }}
            >
              <Button
                size="icon"
                variant="outline"
                className="p-2 bg-[#4a8fe726] border-[#4a8fe7] shadow-buttons backdrop-blur-sm rounded-[40px] border-[0.5px] border-solid"
              >
                <ArrowRightIcon className="w-6 h-6" />
              </Button>
            </div>

            <CardContent className="items-start gap-4 px-0 py-6 self-stretch w-full flex flex-col">
              <h3 className="self-stretch font-semibold text-[#fff6ef] text-xl tracking-[-0.20px] leading-[24.0px] [font-family:'Red_Hat_Display',Helvetica]">
                {item.title}
              </h3>
              <p className="self-stretch [font-family:'Red_Hat_Text',Helvetica] font-light text-white text-[15px] leading-[22.5px]">
                {item.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
