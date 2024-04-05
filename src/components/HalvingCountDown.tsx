/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from "react";
import { IconBtc } from "./Icons/IconBtc";
import { Button } from "./Button";
import Image from "next/image";
import { EventohomeDocument } from "../../prismicio-types";
import Link from "next/link";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

interface Props {
  eventHome: EventohomeDocument<string>;
}

export const HalvingCountDown = ({ eventHome }: Props) => {
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
    <div className=" p-10 shadow-md  background-animate lg:h-auto relative">
      <div className="container flex gap-3 items-center justify-center relative z-20">
        <div className="flex flex-col items-center gap-3">
          <h2 className="text-[50px] lg:text-2xl text-center font-bold  text-[#3a3939]  flex items-center flex-col">
            {/* <IconBtc width={"50px"} height={"50px"} className="fill-primary" /> */}
            <Image
              src={"/imgs/bitybank.png"}
              unoptimized
              width={350}
              height={132}
              alt="Bity Bank"
            />
            <span className="italic">
              Halving's Party <span className="text-primary">Rolante</span>
            </span>
          </h2>

          <div className="text-6xl lg:text-3xl text-center flex w-full items-center justify-center">
            <div className="w-32 border-b-4 border-primary lg:w-20 mx-1 p-2 bg-white shadow-md text-[#3a3939] opacity-90 font-bold rounded-lg">
              <div className="leading-none">
                {timeLeft.days.toString().padStart(2, "0")}
              </div>
              <div className="uppercase text-xs leading-none">Dias</div>
            </div>
            <div className="w-32 border-b-4 border-primary lg:w-20 mx-1 p-2 bg-white shadow-md text-[#3a3939] opacity-90 font-bold rounded-lg">
              <div className="leading-none">
                {timeLeft.hours.toString().padStart(2, "0")}
              </div>
              <div className="uppercase text-xs leading-none">Horas</div>
            </div>
            <div className="w-32 border-b-4 border-primary lg:w-20 mx-1 p-2 bg-white shadow-md text-[#3a3939] opacity-90 font-bold rounded-lg">
              <div className="leading-none">
                {timeLeft.minutes.toString().padStart(2, "0")}
              </div>
              <div className="uppercase text-xs leading-none">Min</div>
            </div>

            <div className="w-32 border-b-4 border-primary lg:w-20 mx-1 p-2 bg-white shadow-md text-[#3a3939] opacity-90 font-bold rounded-lg">
              <div className="leading-none">
                {timeLeft.seconds.toString().padStart(2, "0")}
              </div>
              <div className="uppercase text-sm leading-none">Segs</div>
            </div>
          </div>
          <Button
            label="Saiba mais"
            className="text-white mt-5"
            link={"/eventos/halvings-party"}
            size={"medium"}
            target="_blank"
          />
        </div>
      </div>
      {eventHome.data.imagem.url && (
        <Link
          href={`/eventos/${(eventHome.data.link as any).uid}`}
          className="absolute top-[30%] flex left-0 cursor-pointer 2xl:relative 2xl:animate-none 2xl:top-0 2xl:m-auto 2xl:mt-10 max-h-[203px] max-w-[400px] lg:max-w-[300px] lg:overflow-hidden"
        >
          <div className="bg-primary w-[36px] h-[203px] 2xl:hidden">
            <span
              className={`text-[15px] whitespace-nowrap uppercase block font-bold drop-shadow-title rotate-[-90deg] relative top-[130px]`}
            >
              Próximo evento
            </span>
          </div>
          <Image
            unoptimized
            src={eventHome.data.imagem.url}
            width={eventHome.data.imagem.dimensions.width}
            height={203}
            className="object-cover"
            alt={eventHome.data.imagem.alt || "Evento Bitcoin é aqui"}
          />
        </Link>
      )}
    </div>
  );
};
