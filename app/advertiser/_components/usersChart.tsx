"use client";
import { ApexOptions } from "apexcharts";
import { ChevronDown } from "lucide-react";
import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";

interface UsersChartState {
  series: number[];
}
interface userStatsProps {
  values: number[];
  percentages: number[];
}
const options: ApexOptions = {
  chart: {
    fontFamily: "Satoshi, sans-serif",
    type: "donut",
  },
  colors: ["#6938cc", "#6765f3", "#ad8fef", "#22004d"],
  labels: ["Men", "Women", "Children", "Unknown"],
  legend: {
    show: false,
    position: "bottom",
  },

  plotOptions: {
    pie: {
      donut: {
        size: "65%",
        background: "transparent",
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  responsive: [
    {
      breakpoint: 2600,
      options: {
        chart: {
          width: 380,
        },
      },
    },
    {
      breakpoint: 640,
      options: {
        chart: {
          width: 200,
        },
      },
    },
  ],
};

const UsersChart = ({ values, percentages }: userStatsProps) => {
  const [state, setState] = useState<UsersChartState>({
    series: [65, 34, 12, 56],
  });
  useEffect(() => {
    handleReset();
  }, [values, percentages]);
  const handleReset = () => {
    setState((prevState) => ({
      ...prevState,
      series: values,
    }));
  };

  return (
    <div className="col-span-12 rounded-lg border border-stroke bg-white px-5 pb-5 pt-7 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7 xl:col-span-5">
      <div className="mb-3 justify-between gap-4 sm:flex">
        <div>
          <h5 className="text-xl font-semibold text-black dark:text-white">
            Users Analytics
          </h5>
        </div>
        <div>
          <div className="relative z-20 inline-block">
            <select
              name=""
              id=""
              className="relative z-20 inline-flex appearance-none bg-transparent py-1 pl-3 pr-8 text-sm font-medium outline-none"
            >
              <option value="" className="dark:bg-boxdark text-base p-2">
                Monthly
              </option>
              <option value="" className="dark:bg-boxdark text-base">
                Yearly
              </option>
            </select>
            <span className="absolute right-2 top-1/2 z-10 -translate-y-1/2">
              <ChevronDown className="" />
            </span>
          </div>
        </div>
      </div>

      <div className="mb-2">
        <div id="UsersChart" className="mx-auto flex justify-center">
          <ReactApexChart
            options={options}
            series={state.series}
            type="donut"
          />
        </div>
      </div>

      <div className="-mx-8 flex flex-wrap items-center justify-center gap-y-3">
        <div className="w-full px-8 sm:w-1/2">
          <div className="flex w-full items-center">
            <span className="mr-2 block h-3 w-full max-w-3 rounded-full bg-primary"></span>
            <p className="flex w-full justify-between text-sm font-medium text-black dark:text-white">
              <span> Men </span>
              <span> {percentages[0]} </span>
            </p>
          </div>
        </div>
        <div className="w-full px-8 sm:w-1/2">
          <div className="flex w-full items-center">
            <span className="mr-2 block h-3 w-full max-w-3 rounded-full bg-[#6765f3]"></span>
            <p className="flex w-full justify-between text-sm font-medium text-black dark:text-white">
              <span> Women </span>
              <span> {percentages[1]} </span>
            </p>
          </div>
        </div>
        <div className="w-full px-8 sm:w-1/2">
          <div className="flex w-full items-center">
            <span className="mr-2 block h-3 w-full max-w-3 rounded-full bg-[#ad8fef]"></span>
            <p className="flex w-full justify-between text-sm font-medium text-black dark:text-white">
              <span> Children </span>
              <span> {percentages[2]}</span>
            </p>
          </div>
        </div>
        <div className="w-full px-8 sm:w-1/2">
          <div className="flex w-full items-center">
            <span className="mr-2 block h-3 w-full max-w-3 rounded-full bg-[#22004d]"></span>
            <p className="flex w-full justify-between text-sm font-medium text-black dark:text-white">
              <span> Unknown </span>
              <span> {percentages[3]} </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersChart;
