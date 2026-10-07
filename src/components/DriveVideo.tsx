import { drivePreviewUrl } from '../config';

// Embed de Google Drive con recorte de la franja negra superior y
// bloqueo del botón "abrir en ventana nueva" (esquina superior derecha).
export default function DriveVideo({ id, title, className = '' }: { id: string; title: string; className?: string }) {
  return (
    <div
      className={`relative w-full overflow-hidden rounded-[12px] bg-black ${className}`}
      style={{ paddingBottom: '56.25%' }}
    >
      <iframe
        src={drivePreviewUrl(id)}
        className="absolute left-0 w-full"
        style={{ top: '-58px', height: 'calc(100% + 116px)' }}
        allow="autoplay; fullscreen"
        allowFullScreen
        loading="lazy"
        title={title}
      />
      {/* Bloquea el botón pop-out de Drive sin tapar los controles de reproducción */}
      <div className="absolute top-0 right-0 w-[64px] h-[64px] z-[2]" />
    </div>
  );
}
