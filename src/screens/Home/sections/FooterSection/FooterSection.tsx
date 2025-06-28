import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const FooterSection = (): JSX.Element => {
  // Footer links data
  const footerLinks = [
    { text: "Privacy Policy", href: "#" },
    { text: "Terms of Use", href: "#" },
    { text: "Cookie Preferences", href: "#" },
  ];

  return (
    <footer className="flex flex-col justify-center gap-2.5 px-6 py-0 items-center w-full">
      <Card className="w-full bg-[#03040b] rounded-2xl border-none">
        <CardContent className="flex items-center justify-between px-20 py-10 h-[185px]">
          <div className="flex flex-col items-start justify-center gap-6">
            <img
              className="w-[142.44px] h-10"
              alt="Riot Games Logo"
              src="/mask-group-2.png"
            />
            <p className="font-normal text-[#f2e3d8] text-base leading-4 whitespace-nowrap">
              © 2025 Riot Games, Inc.
            </p>
          </div>

          <div className="flex flex-col items-start justify-center gap-6">
            {footerLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="w-[150px] font-normal text-white text-base leading-[19.2px]"
              >
                {link.text}
              </a>
            ))}
          </div>
        </CardContent>
      </Card>
    </footer>
  );
};
