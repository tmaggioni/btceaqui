import React, { useState, useEffect } from "react";
import { IconBtc } from "./Icons/IconBtc";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export const HalvingCountDown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null); // Initialize with null

  useEffect(() => {
    const calculateTimeLeft = (): TimeLeft => {
      const difference = +new Date("04/20/2024") - +new Date();
      let timeLeft: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

      if (difference > 0) {
        timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }

      return timeLeft;
    };

    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!timeLeft) {
    return <div>Loading...</div>;
  }
  return (
    <div className=" p-10 shadow-md  background-animate lg:h-auto">
      <div className="container flex gap-3 items-center justify-center">
        {/* <div className="relative w-[350px] lg:w-auto border-3 border-purple-500 rounded-sm">
          <video src="halving.MOV" controls></video>
        </div> */}
        <div className="flex flex-col items-center gap-3">
          <h2 className="text-[50px] lg:text-2xl text-center font-bold  text-[#3a3939] flex items-center flex-col">
            <IconBtc width={"50px"} height={"50px"} className="fill-primary" />

            <span className="italic">
              Halving Party <span className="text-primary">Rolante</span>
            </span>
          </h2>

          <div className="text-6xl lg:text-3xl text-center flex w-full items-center justify-center">
            <div className="w-32 border-b-4 border-primary lg:w-20 mx-1 p-2 bg-white shadow-md text-[#3a3939] font-bold rounded-lg">
              <div className="uppercase text-[10px] leading-none">Faltam</div>
              <div className="leading-none">
                {timeLeft.days.toString().padStart(2, "0")}
              </div>
              <div className="uppercase text-xs leading-none">Dias</div>
            </div>
            {/* <div className="w-32 border-b-4 border-primary lg:w-20 mx-1 p-2 bg-white shadow-md text-[#3a3939] font-bold rounded-lg">
              <div className="leading-none">
                {timeLeft.hours.toString().padStart(2, "0")}
              </div>
              <div className="uppercase text-xs leading-none">Horas</div>
            </div>
            <div className="w-32 border-b-4 border-primary lg:w-20 mx-1 p-2 bg-white shadow-md text-[#3a3939] font-bold rounded-lg">
              <div className="leading-none">
                {timeLeft.minutes.toString().padStart(2, "0")}
              </div>
              <div className="uppercase text-xs leading-none">Min</div>
            </div>

            <div className="w-32 border-b-4 border-primary lg:w-20 mx-1 p-2 bg-white shadow-md text-[#3a3939] font-bold rounded-lg">
              <div className="leading-none">
                {timeLeft.seconds.toString().padStart(2, "0")}
              </div>
              <div className="uppercase text-sm leading-none">Segs</div>
            </div> */}
          </div>
          {/* <div className="relative w-[350px] lg:w-auto border-3 border-purple-500 rounded-sm">
            <video src="halving.MOV" controls></video>
          </div> */}
        </div>
      </div>
    </div>
  );
};
