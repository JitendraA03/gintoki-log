export function PixelSprite({ size = 32 }: { size?: number }) {
  return (
    <svg className="pixel-art" width={size} height={size} viewBox="0 0 12 12" shapeRendering="crispEdges" aria-hidden="true">
      <rect x="3" y="4" width="6" height="5" fill="#2A3A2E" />
      <rect x="2" y="5" width="8" height="3" fill="#2A3A2E" />
      <rect x="4" y="9" width="4" height="1" fill="#2A3A2E" />
      <rect x="2" y="3" width="1" height="1" fill="#2A3A2E" />
      <rect x="8" y="3" width="1" height="1" fill="#2A3A2E" />
      <rect x="4" y="6" width="1" height="1" fill="#F5EFE0" />
      <rect x="7" y="6" width="1" height="1" fill="#F5EFE0" />
      <rect x="3" y="7" width="1" height="1" fill="#C97B5A" />
      <rect x="8" y="7" width="1" height="1" fill="#C97B5A" />
      <rect x="3" y="10" width="1" height="1" fill="#2A3A2E" />
      <rect x="8" y="10" width="1" height="1" fill="#2A3A2E" />
    </svg>
  );
}
