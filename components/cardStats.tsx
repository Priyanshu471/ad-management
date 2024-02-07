import { ArrowDown, ArrowUp } from "lucide-react";
import React, { ReactNode } from "react";

interface CardDataStatsProps {
  title: string;
  total: string;
  rate: string;
  levelUp?: boolean;
  levelDown?: boolean;
  children: ReactNode;
}

const CardDataStats: React.FC<CardDataStatsProps> = ({
  title,
  total,
  rate,
  levelUp,
  levelDown,
  children,
}) => {
  return (
    <div className="rounded-lg border border-stroke bg-white px-7 py-6 shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4">
        {children}
      </div>

      <div className="mt-4 flex items-end justify-between">
        <div>
          <h4 className="text-2xl font-medium text-black dark:text-white">
            {total}
          </h4>
          <span className="text-sm font-normal">{title}</span>
        </div>

        <span
          className={`flex items-center gap-1 text-base font-normal ${
            levelUp && "text-meta-3"
          } ${levelDown && "text-meta-1"} `}
        >
          {rate}

          {levelUp && <ArrowUp className="text-meta-3 w-4 h-4 mr-1" />}
          {levelDown && <ArrowDown className=" text-meta-1 w-4 h-4 mr-1" />}
        </span>
      </div>
    </div>
  );
};

export default CardDataStats;
