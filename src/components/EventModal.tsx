import { useEffect, useState } from "react";
import Image from "next/image";
import { EventohomeDocument } from "../../prismicio-types";
import Link from "next/link";

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
        <Link
          href={`/eventos/${(eventHome.data.link as any).uid}`}
          className="w-[400px] h-[400px] max-w-[70%] max-h-[90%] relative"
        >
          <Image
            unoptimized
            src={eventHome.data.imagem.url}
            fill
            className="object-contain"
            alt={eventHome.data.imagem.alt || "Evento Bitcoin é aqui"}
          />
        </Link>
      )}
    </div>
  );
};
