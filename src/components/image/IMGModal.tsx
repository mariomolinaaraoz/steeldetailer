import Carousel from "@/components/image/carousel/Carousel";
import { Button } from "@/components/ui/button";

export default function IMGModal({
  onClose,
}: {
  onClose: () => void;
}) {
  return (
    <div className="aspect-video modal-overlay z-[100]">
      <div
        className="relative z-10"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity flex items-end justify-center p-0 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all w-5/6 max-w-screen-xl h-3/4 flex flex-grow flex-col">
            <div className="bg-gray-800 px-12 pt-4 pb-4 flex-grow">
            <Carousel sector="A"/>
            </div>
            <div
              id="footer"
              className="bg-gray-300 px-4 py-2 sm:flex sm:flex-row-reverse sm:px-6"
            >
              <Button
                type="button"
                className=""
                variant="secondary"
                onClick={onClose}
              >
                Cerrar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}