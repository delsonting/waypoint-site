export default function LogoCompass({ className = "h-10 w-10" }) {
    return (
      <svg viewBox="0 0 120 120" className={className} xmlns="http://www.w3.org/2000/svg" aria-label="Waypoint compass logo" role="img">
        <g fill="#0B5DAA">
          <polygon points="60,2 64,22 60,38 56,22" />
          <polygon points="118,60 98,64 82,60 98,56" />
          <polygon points="60,118 56,98 60,82 64,98" />
          <polygon points="2,60 22,56 38,60 22,64" />
          <polygon points="95,25 85,37 74,46 80,32" />
          <polygon points="95,95 80,88 74,74 85,83" />
          <polygon points="25,95 35,83 46,74 40,88" />
          <polygon points="25,25 40,32 46,46 35,37" />
        </g>
        <circle cx="60" cy="60" r="38" fill="none" stroke="#0B5DAA" strokeWidth="10" />
        <circle cx="60" cy="60" r="28" fill="#fff" stroke="#7A7A7A" strokeWidth="4" />
        <g transform="translate(60,60)">
          <polygon points="0,-22 10,8 0,0" fill="#0A4E9F" />
          <polygon points="0,-22 -10,8 0,0" fill="#135FB8" />
        </g>
      </svg>
    );
  }
  