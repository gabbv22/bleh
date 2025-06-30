import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../components/ui/navigation-menu";
import { Separator } from "../../components/ui/separator";

export const Desktop = (): JSX.Element => {
  // Navigation menu items
  const navItems = [
    { text: "HOME", isActive: true },
    { text: "ABOUT US", isActive: false },
    { text: "CONTACT US", isActive: false },
  ];

  // App steps data
  const appSteps = [
    {
      number: 1,
      text: "Mag-sign up at ilagay ang iyong profile. Ibigay ang iyong kasanayan, karanasan, at kung saan ka pwede magtrabaho.",
    },
    {
      number: 2,
      text: "Awtomatikong imatch sa mga trabaho. Gamit ang matalinong sistema, ire-rekomenda ang mga oportunidad na swak sa'yo.",
    },
    {
      number: 3,
      text: "Kumonekta. Mag-apply. Magtrabaho. Diretso sa employer — walang paligoy-ligoy.",
    },
  ];

  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white w-full max-w-[1920px] relative">
        {/* Hero Section */}
        <header className="relative w-full h-[1477px]">
          <img
            className="w-full h-px top-[152px] left-0 absolute object-cover"
            alt="Line"
            src="/line-1.svg"
          />

          <NavigationMenu className="absolute top-0 left-0 w-full">
            <NavigationMenuList className="flex justify-start items-center">
              <NavigationMenuItem>
                <img
                  className="w-[114px] h-[114px] ml-[59px] mt-2 object-cover"
                  alt="TrabaHope logo"
                  src="/trabahope-logo-1.png"
                />
              </NavigationMenuItem>
              <NavigationMenuItem>
                <img
                  className="w-[116px] h-[19px] ml-[-115px] mt-[112px] object-cover"
                  alt="TrabaHope text"
                  src="/trabahope-text-1-1.png"
                />
              </NavigationMenuItem>

              {navItems.map((item, index) => (
                <NavigationMenuItem key={index} className="ml-[45px]">
                  <NavigationMenuLink
                    className={`w-[305px] h-[107px] py-[23px] flex items-center justify-center [font-family:'Montserrat',Helvetica] ${item.isActive ? "font-extrabold" : "font-normal"} text-[#00294c] text-4xl text-center`}
                  >
                    {item.text}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <img
            className="absolute w-[1320px] h-[213px] top-[277px] left-0 object-cover"
            alt="TrabaHope text"
            src="/trabahope-text-1-1.png"
          />

          <img
            className="absolute w-full h-[1477px] top-0 left-0"
            alt="Mask group"
            src="/mask-group.png"
          />

          <div className="absolute w-[897px] top-[499px] left-[349px] [font-family:'Montserrat',Helvetica] font-medium italic text-[#00294c] text-5xl text-right tracking-[0] leading-[normal]">
            &#34;Trabaho na Tugma sa Galing Mo.&#34;
          </div>

          <div className="absolute w-[664px] h-[111px] top-[648px] left-[173px] [font-family:'Montserrat',Helvetica] font-bold text-[#00294c] text-[64px] text-center tracking-[0] leading-[96px] whitespace-nowrap">
            Who are you?
          </div>

          <Button className="absolute w-[568px] h-[143px] top-[787px] left-[222px] bg-[#00294c] rounded-[15px] hover:bg-[#00294c]/90">
            <span className="w-[480px] h-[65px] [font-family:'Montserrat',Helvetica] font-extrabold text-white text-5xl text-center tracking-[0] leading-[72px] whitespace-nowrap">
              I&apos;m a Worker
            </span>
          </Button>

          <Button className="absolute w-[568px] h-[145px] top-[982px] left-[222px] bg-[#f6b416] rounded-[15px] hover:bg-[#f6b416]/90">
            <span className="w-[480px] h-[65px] [font-family:'Montserrat',Helvetica] font-extrabold text-white text-5xl text-center tracking-[0] leading-[72px] whitespace-nowrap">
              I&apos;m an Employer
            </span>
          </Button>
        </header>

        {/* Main Content Section */}
        <main className="relative w-full h-[2545px]">
          <img
            className="w-[1157px] h-[1865px] top-[602px] left-[763px] absolute object-cover"
            alt="TrabaHope logo"
            src="/trabahope-logo-1.png"
          />

          <div className="absolute w-full h-[768px] top-0 left-0 bg-[#00294c]">
            <div className="absolute w-[1536px] top-[51px] left-[322px] [font-family:'Montserrat',Helvetica] font-medium italic text-white text-8xl text-right tracking-[0] leading-[normal]">
              {" "}
              Mabilis. Makatotohanan.
              <br /> Para sa bawat manggagawa.
            </div>

            <div className="absolute w-[1294px] top-[377px] left-[116px] [font-family:'Montserrat',Helvetica] font-normal text-[#f6b416] text-5xl tracking-[0] leading-[normal]">
              Maghanap ng trabaho na akma sa iyong kakayahan at lokasyon —
              walang komplikasyon.
              <br /> Para sa mga kumpanya, makahanap ng maaasahang tauhan sa
              ilang pindot lang.
            </div>
          </div>

          <Card className="absolute w-[1021px] top-[1076px] left-[52px] border-none shadow-none bg-transparent">
            <CardContent className="p-0">
              <h2 className="[font-family:'Montserrat',Helvetica] font-extrabold text-[#00294c] text-[40px] tracking-[0] leading-[normal] mb-8">
                Paano Gumagana ang App?
              </h2>

              <div className="space-y-8">
                {appSteps.map((step, index) => (
                  <div key={index} className="flex gap-2">
                    <span className="[font-family:'Montserrat',Helvetica] font-normal text-[#00294c] text-[40px]">
                      {step.number}.
                    </span>
                    <span className="[font-family:'Montserrat',Helvetica] font-normal text-[#00294c] text-[40px] tracking-[0]">
                      {step.text}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <footer className="absolute w-full h-[481px] top-[2064px] left-0 bg-[#f6b416]">
            <div className="flex flex-col w-full items-start gap-2.5 pt-[30px] pb-5 px-[379px] relative top-[31px] bg-[#00294c]" />

            <div className="absolute w-[961px] top-[186px] left-[41px] [font-family:'Montserrat',Helvetica] font-normal italic text-white text-5xl text-right tracking-[0] leading-[normal]">
              &quot;Hindi lang trabaho. Dito, tugma ang sipag, galing, at
              oportunidad.&quot;
            </div>

            <Separator
              className="absolute h-[329px] w-px top-[94px] left-[1073px] bg-white"
              orientation="vertical"
            />

            <div className="absolute w-[719px] h-[309px] top-[113px] left-[1139px] [font-family:'Montserrat',Helvetica] font-normal text-white text-2xl tracking-[0.72px] leading-[normal]">
              ABOUT US <br />
              <br />
              College of Computer and Information Sciences <br />
              Polytechnic University of the Philippines <br />
              <br />
              In partial fulfillment for the course <br />
              COMP - Design and Analysis of <br />
              Algorithm
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
};
