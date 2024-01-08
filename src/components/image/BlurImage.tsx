import Image from "next/image";
import { useState } from "react";
import { cn } from "../../lib/utils";

import { Data } from "@/lib/utils";
import ImageModal from './PDFModal';
import DownloadButton from "@/components/buttons/downloadButton";

export function BlurImage({ data }: { data: Data }) {
  
  const [isLoading, setLoading] = useState(true);

  //FUNCTION MODAL///////////////////////////////////////////////////////////

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<Data | null>(null);

  //FUNCTION MODAL///////////////////////////////////////////////////////////

  const handleImageClick = () => {
    setSelectedImage(data);
    setIsModalOpen(true);
  };

  return (
    <section>
      <div className="flex flex-col cursor-pointer">
        <Image
          src={data.imageSrc}
          alt={data.elemento}
          placeholder="empty"
          width={400}
          height={400}
          loading="lazy"
          className={cn(
            "duration-700 ease-in-out group-hover:opacity-75 rounded-lg",
            isLoading
              ? "scale-110 blur-2xl grayscale"
              : "scale-100 blur-0 grayscale-0"
          )}
          onLoadingComplete={() => setLoading(false)}
          onClick={handleImageClick}
        />
        <div className="flex flex-row justify-around">
          <div className="flex-col w-full">
            <h1 className="text-md mt-2">{data.plano}</h1>
            <h2 className="text-sm font-semibold">{data.elemento}</h2>
          </div>
          <div className="mt-2">
            <DownloadButton href={data.href} />
          </div>
        </div>
      </div>
      {isModalOpen && selectedImage && (
        <ImageModal
          data={selectedImage}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </section>
  );
}