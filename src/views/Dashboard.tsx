import React, { useEffect, useRef, useState, type RefObject } from "react";
import HomeIcon from "../components/svgs/HomeIcon";
import { Button } from "@/components/ui/button";
import ListingIcon from "@/components/svgs/ListingsIcon";
import UsersIcon from "@/components/svgs/UsersIcon";
import RequestsIcon from "@/components/svgs/RequestsIcon";
import ApplicationsIcon from "@/components/svgs/ApplicationsIcon";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Calendar } from "@/components/ui/calendar";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import SearchField from "@/components/SearchField";
import DialogContents from "@/components/DialogContents";
import ChartContents from "@/components/ChartContents";
import OverviewCard from "@/components/OverviewCard";
import { set } from "date-fns";

// I named the parent folder 'views' rather than 'pages' because I did not setup a routing system

export default function Dashboard() {
  const drawerRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLButtonElement>(null);
  const topref = useRef<any>(null);
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="w-screen min-h-screen">
        <nav className="h-[5.0625rem] w-full bg-[#191919] flex items-center justify-center ">
          <div className="flex items-center justify-between px-10 h-full w-[89%] mx-auto">
            <div className="text-white font-bold text-lg flex items-center">
              <img
                src="/assets/Myxellia_logo.svg"
                alt="Company Logo"
                width={153}
                height={26}
              />
            </div>
            <div>
              <ul className="flex items-center space-x-4 text-white style-none gap-x-5">
                <li>
                  <Button
                    variant="ghost"
                    className="text-[#191919] p-3 font-light hover:bg-[#989898] transition-colors duration-300"
                  >
                    <img
                      src="/assets/Notification_1.svg"
                      alt="Notification Logo"
                    />
                  </Button>
                </li>
                <li>
                  <Button
                    variant="ghost"
                    className="text-[#191919] p-3 font-light hover:bg-[#989898] transition-colors duration-300"
                    onClick={(e) => dialogRef.current?.click()}
                  >
                    <img src="/assets/calculator.svg" alt="Calculator Logo" />
                  </Button>
                </li>
                <li>
                  <Button
                    variant="ghost"
                    className="text-[#191919] p-3 font-light hover:bg-[#989898] transition-colors duration-300"
                    onClick={(e) => {
                      setOpen(true);
                    }}
                  >
                    <img src="/assets/calendar.svg" alt="Calendar Logo" />
                  </Button>
                </li>
                <li>
                  <Button
                    variant="ghost"
                    className="text-[#191919] p-3 font-light hover:bg-[#989898] transition-colors duration-300"
                  >
                    <img src="/assets/message-notif.svg" alt="Message Logo" />
                  </Button>
                </li>
                <li>
                  <HoverCard>
                    <HoverCardTrigger>
                      <div className="h-[40px] w-[40px] rounded-full bg-white text-black text-center flex items-center justify-center text-[23px] cursor-pointer">
                        D
                      </div>
                    </HoverCardTrigger>
                    <HoverCardContent className="!px-5 !py-2 w-auto">
                      <p className="text-base font-normal text-[#191919">
                        Dylian Frank
                      </p>
                      <div className="text-xs font-normal text-[#606060]">
                        dylianFran@gmail.com
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="h-[4.1875rem] w-full bg-white text-black flex items-center justify-center border border-b-[#ddd]">
          <div className="flex items-center justify-between px-10 h-full w-[89%] mx-auto">
            <div className="text-[1.125rem] font-bold">
              <ul className="flex items-center space-x-4 text-white style-none gap-x-5">
                <li className="flex items-center">
                  <Button
                    variant="secondary"
                    className="text-[#191919] p-3 w-[10.625rem]"
                  >
                    <HomeIcon color="#191919" />
                    Dashboard
                  </Button>
                </li>
                <li className="flex items-center">
                  <Button
                    variant="ghost"
                    className="text-[#191919] p-3 w-[10.625rem] font-light"
                  >
                    <ListingIcon color="#191919" />
                    Listings
                  </Button>
                </li>
                <li className="flex items-center">
                  <Button
                    variant="ghost"
                    className="text-[#191919] p-3 w-[10.625rem] font-light"
                  >
                    <UsersIcon color="#191919" />
                    Users
                  </Button>
                </li>
                <li className="flex items-center">
                  <Button
                    variant="ghost"
                    className="text-[#191919] p-3 w-[10.625rem] font-light"
                  >
                    <RequestsIcon color="#191919" />
                    Request
                  </Button>
                </li>
                <li className="flex items-center">
                  <Button
                    variant="ghost"
                    className="text-[#191919] p-3 w-[10.625rem] font-light"
                  >
                    <ApplicationsIcon color="#191919" />
                    Applications
                  </Button>
                </li>
                <li>
                  <div className="w-[319px] h-[43px] ">
                    <SearchField
                      value={searchTerm}
                      onChange={(e) => {
                        setSearchTerm(e.target.value);
                      }}
                      setValue={() => {
                        setSearchTerm("");
                      }}
                      placeholder="Search listings, users here..."
                      className="border !p-2 rounded-md text-[#8f8d8d]"
                    />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full h-full bg-[#F9FAFB]">
          <div className="w-full flex items-center justify-center ">
            <div className=" w-[89%] mx-auto !py-3 flex">
              <div className="text-[1.25rem] font-bold text-[#191919] box-border">
                Welcome, Ahmed
              </div>
            </div>
          </div>
          <div className="h-auto w-full mx-auto flex  justify-center">
            <div className="w-full h-auto flex items-center justify-center gap-x-3 mx-auto">
              <div className="h-[22rem] w-[63%] rounded-2xl bg-white !p-4.5 border border-[#E4E4E4]">
                <div className="flex items-center justify-between !py-2">
                  <div className="flex flex-col gap-y-2">
                    <div className="text-[20px] text-[#191919] font-semibold">
                      Sales Overview
                    </div>
                    <div className="text-[12px] font-light text-[#606060]">
                      Showing overview Jan 2022 - Sep 2022
                    </div>
                  </div>
                  <div>
                    <Button
                      variant="outline"
                      className="text-[#191919] p-4 w-[10.625rem] h-[2.875rem] font-light rounded-4xl"
                    >
                      View transactions
                    </Button>
                  </div>
                </div>
                <div className="w-full flex items-center justify-end gap-x-3 border-b border-[#E4E4E4] !pb-5">
                  <Button
                    variant="ghost"
                    className="text-[#191919] p-3 w-[5rem]"
                  >
                    1 Week
                  </Button>{" "}
                  <Button
                    variant="ghost"
                    className="text-[#191919] p-3 w-[5rem]"
                  >
                    1 Month
                  </Button>{" "}
                  <Button
                    variant="secondary"
                    className="text-[#191919] p-3 w-[5rem]"
                  >
                    1 Year
                  </Button>
                </div>

                <div className="w-full h-[13rem] flex items-center justify-between gap-x-2">
                  <div className="w-[49%] max-h-[12.5rem]">
                    <div className="w-full h-full flex items-center justify-evenly">
                      <div>
                        <img
                          src="/assets/arrow_left.svg"
                          alt="Graph"
                          width={18}
                          height={18}
                        />
                      </div>
                      <ChartContents />
                      <div>
                        <img
                          src="/assets/arrow_right.svg"
                          alt="Graph"
                          width={18}
                          height={18}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="w-[49%] max-h-[12.5rem] flex flex-col gap-y-3">
                    <div className="w-full h-full flex items-center justify-between gap-x-3">
                      <div className="w-[50%] h-full">
                        <OverviewCard
                          amount="₦120,000,000.00"
                          description="Total Inflow"
                          imageUrl="/assets/green_down.svg"
                          color="#4545FE"
                          percentageChange="2.5%"
                        />
                      </div>
                      <div className="w-[50%] h-full">
                        <OverviewCard
                          amount="₦50,000,000.00"
                          description="MRR"
                          imageUrl="/assets/green_down.svg"
                          color="#12B76A"
                          percentageChange="2.5%"
                        />
                      </div>
                    </div>
                    <div className="w-full h-full flex items-center justify-between gap-x-3">
                      <div className="w-[50%] h-full">
                        <OverviewCard
                          amount="₦200,000,000.00"
                          description="Commission Revenue"
                          imageUrl="/assets/green_down.svg"
                          color="#14B8A6"
                          percentageChange="0.5%"
                        />
                      </div>
                      <div className="w-[50%] h-full">
                        <OverviewCard
                          amount="₦100,000,000.00"
                          description="GMV"
                          imageUrl="/assets/red_down.svg"
                          color="#F04438"
                          percentageChange="0.5%"
                          redAlert={true}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[22rem] w-[25%] rounded-2xl flex flex-col gap-y-3">
                <Card className="w-full h-[50%] bg-white">
                  <CardHeader className="w-full h-[50px] bg-[#F9FAFB] !p-3 rounded-tl-[12.5px] rounded-tr-[12.5px]">
                    <CardTitle className="w-full flex items-center justify-between">
                      <div className="text-sm text-[#292929] flex items-center gap-x-2">
                        <img src="/assets/blue_home.svg" /> Listing Overview
                      </div>
                      <div className="text-xs text-[#4545FE] flex items-center gap-x-2 cursor-pointer">
                        View all <img src="/assets/blue_right.svg" />
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="!px-4">
                    <div className="w-full h-full flex items-center justify-between">
                      <div className="flex flex-col gap-y-3">
                        <div className="text-sm">Total</div>
                        <div className="text-2xl font-bold">1.8k</div>
                      </div>
                      <div className="flex flex-col gap-y-3">
                        <div className="text-sm">Active</div>
                        <div className="text-2xl font-bold">80</div>
                      </div>
                      <div className="flex flex-col gap-y-3">
                        <div className="text-sm">Archived</div>
                        <div className="text-2xl font-bold">1k</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="w-full h-[50%] bg-white">
                  <CardHeader className="w-full h-[50px] bg-[#F9FAFB] !p-3 rounded-tl-[12.5px] rounded-tr-[12.5px]">
                    <CardTitle className="w-full flex items-center justify-between">
                      <div className="text-sm text-[#292929] flex items-center gap-x-2">
                        <img src="/assets/profile.svg" />
                        Users Overview
                      </div>
                      <div className="text-xs text-[#4545FE] flex items-center gap-x-2 cursor-pointer">
                        View all <img src="/assets/blue_right.svg" />
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="!px-4">
                    <div className="w-full h-full flex items-center justify-between">
                      <div className="flex flex-col gap-y-3">
                        <div className="text-sm">Total</div>
                        <div className="text-2xl font-bold">20.7k</div>
                      </div>
                      <div className="flex flex-col gap-y-3">
                        <div className="text-sm">Riders</div>
                        <div className="text-2xl font-bold">8.5k</div>
                      </div>
                      <div className="flex flex-col gap-y-3">
                        <div className="text-sm">Subscribers</div>
                        <div className="text-2xl font-bold">7.5k</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
          <div className="h-auto w-full mx-auto flex  justify-center">
            <div className="w-full h-auto flex items-center justify-center gap-x-3 mx-auto box-border">
              {/* Was unable to extrack the standalone images for styling, instead cound only download the grouped image with the overlay texts */}
              <div className="w-[89%] mx-auto !py-5 gap-x-3 grid grid-cols-3">
                <div className="w-full">
                  <img src="/assets/item_3.png" alt="" />
                </div>
                <div className="w-full">
                  <img src="/assets/item_1.png" alt="" />
                </div>
                <div className="w-full">
                  <img src="/assets/item_2.png" alt="" />
                </div>
              </div>
              <div className="absolute right-18 bottom-30 ">
                <img src="/assets/chat_bot.svg" alt="chat bot icon" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Drawer
        direction="right"
        open={open}
        onOpenChange={setOpen}
        preventScrollRestoration
        noBodyStyles
      >
        <DrawerTrigger ref={drawerRef}></DrawerTrigger>
        <DrawerContent
          onEscapeKeyDown={(e) => e.preventDefault()}
          onCloseAutoFocus={(e) => e.preventDefault()}
          className="bg-[#0D0D0D] border-none"
        >
          <div className="mx-auto w-full max-w-sm h-full">
            <DrawerHeader className="!p-5 bg-[#171717]">
              <DrawerTitle className="text-white w-full flex items-center justify-between">
                <div className="flex items-center gap-x-2">
                  <img
                    src="/assets/drawer_back.svg"
                    alt=""
                    onClick={() => setOpen(false)}
                  />{" "}
                  Calendar
                </div>
                <img
                  src="/assets/drawer_close.svg"
                  alt="Close drawer"
                  onClick={() => setOpen(false)}
                />
              </DrawerTitle>
            </DrawerHeader>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="!w-full !h-full !p-5 bg-[#0D0D0D] text-white"
            />
          </div>
        </DrawerContent>
      </Drawer>

      <Dialog modal={false}>
        <DialogTrigger ref={dialogRef}></DialogTrigger>
        <DialogContent
          showCloseButton={false}
          className="border-none bg-none rounded-tr-2xl rounded-tl-2xl"
        >
          <DialogHeader className="bg-[#0C2841] !pt-6 !pr-6 !pl-6 rounded-tr-2xl rounded-tl-2xl">
            <img src="/assets/modal_banner.svg" alt="Modal banner" />
          </DialogHeader>
          <DialogContents />
        </DialogContent>
      </Dialog>
    </>
  );
}
