import React from "react";

interface OverviewCardProps {
  amount: string;
  description: string;
  percentageChange: string;
  imageUrl: string;
  color: string;
  redAlert?: boolean;
}
export default function OverviewCard({
  amount,
  description,
  percentageChange,
  imageUrl,
  color,
  redAlert,
}: OverviewCardProps) {
  return (
    <div className="!w-full !p-3 !border !border-[#E4E4E4] rounded-2xl">
      <div>
        <div className={`text-[${color}] text-[19px]`}>{amount}</div>
        <div className="flex items-center text-[10px] gap-x-2">
          <div>{description}</div>
          {redAlert ? (
            <div className="text-red-500 flex items-center">
              <img src={imageUrl} alt="percentage icon" /> {percentageChange}
            </div>
          ) : (
            <div className={`text-green-500 flex items-center"`}>
              <img src={imageUrl} alt="percentage icon" /> {percentageChange}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
