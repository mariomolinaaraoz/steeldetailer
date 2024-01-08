import { Button } from "../ui/button";
import { Download } from "lucide-react";

interface DownloadButtonProps {
  href: string;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({ href }) => {
  
  const handleDownload = () => {
    // Crea un enlace temporal
    const link = document.createElement('a');
    link.href = href;
    link.download = href;

    // Simula un clic en el enlace para iniciar la descarga
    link.click();
  };

  return (
    <Button variant="link" onMouseDown={handleDownload} title="download">
      <Download/>
    </Button>
  );
};

export default DownloadButton;

