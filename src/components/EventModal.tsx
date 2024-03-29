import { useEffect, useState } from "react";
import Image from "next/image";
import { EventohomeDocument } from "../../prismicio-types";
import Link from "next/link";
import { IconClose } from "./Icons/IconClose";

interface Props {
  eventHome: EventohomeDocument<string>;
}

export const EventModal = ({ eventHome }: Props) => {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    // Function to close modal if clicked outside of the image
    const closeModal = (event: any) => {
      if (event.target.id === "modal-backdrop") {
        setIsOpen(false);
      }
    };

    // Adding click event listener
    window.addEventListener("click", closeModal);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("click", closeModal);
  }, []);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      id="modal-backdrop"
      className="fixed z-40 inset-0 w-full h-full flex items-center justify-center bg-black bg-opacity-70"
    >
      {eventHome.data.imagem.url && (
        <div className="w-[1000px] h-[550px] lg:max-w-[80%] lg:max-h-[30%] flex relative">
          <span
            className="w-5 h-5 absolute lg:-top-[2px] lg:-right-[2px] -top-[25px] right-0 cursor-pointer fill-white rounded-full z-50 flex items-center justify-center"
            onClick={() => setIsOpen(false)}
          >
            <IconClose />
          </span>
          <Link
            href={`/eventos/${(eventHome.data.link as any).uid}`}
            className="w-full h-full relative"
          >
            <Image
              unoptimized
              src={eventHome.data.imagem.url}
              fill
              className="object-contain"
              alt={eventHome.data.imagem.alt || "Evento Bitcoin é aqui"}
            />
          </Link>
        </div>
      )}
    </div>
  );
};
