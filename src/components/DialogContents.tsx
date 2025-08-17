import React from "react";
import { Button } from "./ui/button";

export default function DialogContents() {
  return (
    <div className="w-[344px] flex flex-col items-center gap-y-3 px-auto !py-6 !mx-auto justify-center align-middle box-border">
      <div className="flex items-center gap-x-3 w-full justify-center">
        <div>
          <img
            src="../../src/assets/modal_settings.svg"
            alt="Modal settings Icon"
          />
        </div>
        <div className="flex flex-col gap-y-1">
          <div className="text-base font-semibold text-[#191919]">
            Set up annual budgets by account category
          </div>
          <div className="text-xs font-normal text-[#606060]">
            Allocate funds across income and expense lines with full visibility.
          </div>
        </div>
      </div>
      <div className="flex items-center gap-x-3 w-full justify-center">
        <div>
          <img
            src="../../src/assets/modal_trend.svg"
            alt="Modal settings Icon"
          />
        </div>
        <div className="flex flex-col gap-y-1">
          <div className="text-base font-semibold text-[#191919]">
            Track actuals vs budget in real time
          </div>
          <div className="text-xs font-normal text-[#606060]">
            See how your community is performing against plan, month by month.
          </div>
        </div>
      </div>
      <div className="flex items-center gap-x-3 w-full justify-center">
        <div>
          <img
            src="../../src/assets/modal_metric.svg"
            alt="Modal settings Icon"
          />
        </div>
        <div className="flex flex-col gap-y-1">
          <div className="text-base font-semibold text-[#191919]">
            Adjust figures and forcast with ease
          </div>
          <div className="text-xs font-normal text-[#606060]">
            Edit amounts, apply percentage changes, or roll forward last year’s
            data—all in one place.
          </div>
        </div>
      </div>
      <div className="w-full">
        <Button
          variant="outline"
          className="text-white bg-[#18181B] p-3 !w-full font-light rounded-4xl h-[2.875rem]"
        >
          Create Budget
        </Button>
      </div>
    </div>
  );
}
