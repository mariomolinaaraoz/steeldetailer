import { Data } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export default function ImageModal({
  data,
  onClose,
}: {
  data: Data;
  onClose: () => void;
}) {
  return (
    <div className="modal-overlay z-[100]">
      <div
        className="relative z-10"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity flex items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all w-5/6 max-w-screen-xl h-3/4 flex flex-grow flex-col">
            <div className="bg-gray-100 px-4 pb-4 pt-5 sm:p-6 sm:pb-0 flex-grow">
              <iframe
                src={data.href}
                className="w-full h-full"
                title="PDF Viewer"
              />
            </div>
            <div
              id="footer"
              className="bg-gray-100 px-4 py-4 sm:flex sm:flex-row-reverse sm:px-6"
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
