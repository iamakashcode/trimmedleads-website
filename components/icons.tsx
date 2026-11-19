import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

function Svg({ size = 20, children, ...rest }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {children}
    </svg>
  );
}

export const ArrowRight = (p: IconProps) => (
  <Svg {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </Svg>
);

export const ArrowUpRight = (p: IconProps) => (
  <Svg {...p}>
    <path d="M7 17 17 7M8 7h9v9" />
  </Svg>
);

export const ArrowDown = (p: IconProps) => (
  <Svg {...p}>
    <path d="M12 5v14M6 13l6 6 6-6" />
  </Svg>
);

export const Check = (p: IconProps) => (
  <Svg {...p}>
    <path d="m5 12.5 4.2 4.2L19 7" />
  </Svg>
);

export const CheckCircle = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="m8.2 12.3 2.6 2.6 5-5.2" />
  </Svg>
);

export const ShieldCheck = (p: IconProps) => (
  <Svg {...p}>
    <path d="M12 3 4.5 6v5.5c0 4.6 3.2 8.3 7.5 9.5 4.3-1.2 7.5-4.9 7.5-9.5V6L12 3Z" />
    <path d="m8.8 12 2.3 2.3 4.3-4.6" />
  </Svg>
);

export const BadgeCheck = (p: IconProps) => (
  <Svg {...p}>
    <path d="M12 2.8 14.3 4.5l2.8-.1.9 2.7 2.3 1.6-.9 2.7.9 2.7-2.3 1.6-.9 2.7-2.8-.1L12 21.2l-2.3-1.7-2.8.1-.9-2.7-2.3-1.6.9-2.7-.9-2.7L6 7.1l.9-2.7 2.8.1L12 2.8Z" />
    <path d="m8.8 12.2 2.2 2.2 4.2-4.4" />
  </Svg>
);

export const Lock = (p: IconProps) => (
  <Svg {...p}>
    <rect x="4.5" y="10.5" width="15" height="10" rx="2.5" />
    <path d="M8 10.5V8a4 4 0 0 1 8 0v2.5" />
    <path d="M12 14.5v2" />
  </Svg>
);

export const Calendar = (p: IconProps) => (
  <Svg {...p}>
    <rect x="3.5" y="5" width="17" height="15.5" rx="2.5" />
    <path d="M3.5 9.5h17M8 3v4M16 3v4" />
    <path d="m9 15 2 2 4-4" />
  </Svg>
);

export const MapPin = (p: IconProps) => (
  <Svg {...p}>
    <path d="M12 21s-6.5-5.4-6.5-11a6.5 6.5 0 0 1 13 0c0 5.6-6.5 11-6.5 11Z" />
    <circle cx="12" cy="10" r="2.4" />
  </Svg>
);

export const Wallet = (p: IconProps) => (
  <Svg {...p}>
    <path d="M4 7.5A2.5 2.5 0 0 1 6.5 5H18v3" />
    <rect x="4" y="7.5" width="16.5" height="12" rx="2.5" />
    <path d="M16 13.5h1.5" />
  </Svg>
);

export const Rupee = (p: IconProps) => (
  <Svg {...p}>
    <path d="M7 5h10M7 9h10M7 5h3.5a4 4 0 0 1 0 8H7l7 6" />
  </Svg>
);

export const Building = (p: IconProps) => (
  <Svg {...p}>
    <path d="M4 20.5h16" />
    <path d="M6 20.5V5.5A1.5 1.5 0 0 1 7.5 4h6A1.5 1.5 0 0 1 15 5.5v15" />
    <path d="M15 9.5h2.5A1.5 1.5 0 0 1 19 11v9.5" />
    <path d="M9 8h3M9 11.5h3M9 15h3" />
  </Svg>
);

export const Home = (p: IconProps) => (
  <Svg {...p}>
    <path d="M3.5 11 12 4l8.5 7" />
    <path d="M5.5 9.5v10h13v-10" />
    <path d="M10 19.5v-5h4v5" />
  </Svg>
);

export const Clipboard = (p: IconProps) => (
  <Svg {...p}>
    <rect x="5" y="4.5" width="14" height="16" rx="2.5" />
    <path d="M9 4.5V3.8c0-.4.3-.8.8-.8h4.4c.4 0 .8.4.8.8v.7" />
    <path d="M8.5 10h7M8.5 13.5h7M8.5 17h4" />
  </Svg>
);

export const Users = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="9" cy="8.5" r="3.2" />
    <path d="M3.5 19.5c.6-3.2 2.8-5 5.5-5s4.9 1.8 5.5 5" />
    <circle cx="16.8" cy="9.5" r="2.5" />
    <path d="M16 14.6c2.3 0 4 1.5 4.5 4.4" />
  </Svg>
);

export const Handshake = (p: IconProps) => (
  <Svg {...p}>
    <path d="m11 7.5-2-1.6a2 2 0 0 0-2.4 0L3 8.5v6l2 1.5" />
    <path d="m13 7.5 2-1.6a2 2 0 0 1 2.4 0L21 8.5v6l-2.5 1.8" />
    <path d="M13 7.5 9.4 10.3a1.4 1.4 0 0 0 1.7 2.2l2-1.4 4.4 3.9a1.2 1.2 0 0 1-1.6 1.8l-.9-.8" />
    <path d="m15 17 .4.4a1.2 1.2 0 0 1-1.7 1.6l-1-.9M12.7 18.1l.2.2a1.2 1.2 0 0 1-1.7 1.6L5 15" />
  </Svg>
);

export const Globe = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3c2.5 2.6 3.7 5.6 3.7 9s-1.2 6.4-3.7 9c-2.5-2.6-3.7-5.6-3.7-9S9.5 5.6 12 3Z" />
  </Svg>
);

export const India = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 3v18M3 12h18" opacity=".35" />
    <circle cx="12" cy="12" r="2.6" />
  </Svg>
);

export const Sofa = (p: IconProps) => (
  <Svg {...p}>
    <path d="M5 11V8.5A2.5 2.5 0 0 1 7.5 6h9A2.5 2.5 0 0 1 19 8.5V11" />
    <path d="M3.5 13a2 2 0 0 1 4 0v1.5h9V13a2 2 0 0 1 4 0v4.5h-17V13Z" />
    <path d="M5.5 17.5V19M18.5 17.5V19" />
  </Svg>
);

export const Compass = (p: IconProps) => (
  <Svg {...p}>
    <path d="M12 3v2.5" />
    <circle cx="12" cy="7.5" r="2" />
    <path d="M10.9 9.2 5.5 20.5M13.1 9.2l5.4 11.3" />
    <path d="M7.5 16.2c2.8 1.3 6.2 1.3 9 0" />
  </Svg>
);

export const HardHat = (p: IconProps) => (
  <Svg {...p}>
    <path d="M3 17.5h18v2H3z" />
    <path d="M5 17.5V15a7 7 0 0 1 14 0v2.5" />
    <path d="M10 8.3V5.5h4v2.8" />
    <path d="M10 8.3a7 7 0 0 0-3.3 2.4M14 8.3a7 7 0 0 1 3.3 2.4" />
  </Svg>
);

export const Megaphone = (p: IconProps) => (
  <Svg {...p}>
    <path d="M4 10v4a1.5 1.5 0 0 0 1.5 1.5H8l7 4V4.5l-7 4H5.5A1.5 1.5 0 0 0 4 10Z" />
    <path d="M8 15.5 9.5 20h2.5l-1-4.5M18.5 9a4 4 0 0 1 0 6" />
  </Svg>
);

export const Monitor = (p: IconProps) => (
  <Svg {...p}>
    <rect x="3" y="4" width="18" height="12.5" rx="2" />
    <path d="M8.5 20h7M12 16.5V20" />
    <path d="m9.5 8.5-2 2 2 2M14.5 8.5l2 2-2 2" />
  </Svg>
);

export const Layers = (p: IconProps) => (
  <Svg {...p}>
    <path d="m12 3.5 9 4.8-9 4.8-9-4.8 9-4.8Z" />
    <path d="m3 12.2 9 4.8 9-4.8M3 16 12 20.8 21 16" />
  </Svg>
);

export const Target = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="12" cy="12" r="1.5" />
  </Svg>
);

export const TrendUp = (p: IconProps) => (
  <Svg {...p}>
    <path d="m3.5 16.5 6-6 4 4 7-7" />
    <path d="M15 7.5h5.5V13" />
  </Svg>
);

export const Search = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="11" cy="11" r="6.5" />
    <path d="m16 16 4.5 4.5" />
  </Svg>
);

export const Filter = (p: IconProps) => (
  <Svg {...p}>
    <path d="M4 5h16l-6.2 7.4v5.8l-3.6 1.8v-7.6L4 5Z" />
  </Svg>
);

export const MessageCircle = (p: IconProps) => (
  <Svg {...p}>
    <path d="M20.5 11.5a8.5 8.5 0 0 1-12.6 7.4L3.5 20.5l1.6-4.2A8.5 8.5 0 1 1 20.5 11.5Z" />
  </Svg>
);

export const Phone = (p: IconProps) => (
  <Svg {...p}>
    <path d="M5.5 3.5h3l1.5 4.2-2 1.3a11 11 0 0 0 5 5l1.3-2 4.2 1.5v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 3.5 5.7a2 2 0 0 1 2-2.2Z" />
  </Svg>
);

export const Mail = (p: IconProps) => (
  <Svg {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2.5" />
    <path d="m4 7 8 6 8-6" />
  </Svg>
);

export const Menu = (p: IconProps) => (
  <Svg {...p}>
    <path d="M4 8h16M4 16h16" />
  </Svg>
);

export const Close = (p: IconProps) => (
  <Svg {...p}>
    <path d="M6 6l12 12M18 6 6 18" />
  </Svg>
);

export const Plus = (p: IconProps) => (
  <Svg {...p}>
    <path d="M12 5v14M5 12h14" />
  </Svg>
);

export const Sparkle = (p: IconProps) => (
  <Svg {...p}>
    <path d="M12 3.5c.6 4.2 2.3 5.9 6.5 6.5-4.2.6-5.9 2.3-6.5 6.5-.6-4.2-2.3-5.9-6.5-6.5 4.2-.6 5.9-2.3 6.5-6.5Z" />
    <path d="M18.5 15.5c.3 1.6.9 2.2 2.5 2.5-1.6.3-2.2.9-2.5 2.5-.3-1.6-.9-2.2-2.5-2.5 1.6-.3 2.2-.9 2.5-2.5Z" />
  </Svg>
);

export const Instagram = ({ size = 20, ...rest }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} aria-hidden="true" focusable="false" {...rest}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4.2" />
    <circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none" />
  </svg>
);

export const WhatsApp = ({ size = 20, ...rest }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" {...rest}>
    <path d="M12.04 2.5a9.42 9.42 0 0 0-8.1 14.23L2.6 21.5l4.9-1.29a9.43 9.43 0 1 0 4.54-17.71Zm0 17.25a7.8 7.8 0 0 1-3.98-1.09l-.29-.17-2.9.76.78-2.83-.19-.29a7.82 7.82 0 1 1 6.58 3.62Zm4.29-5.86c-.24-.12-1.4-.69-1.61-.77-.22-.08-.38-.12-.54.12-.16.24-.62.77-.76.93-.14.16-.28.18-.52.06-.24-.12-1-.37-1.91-1.18-.7-.63-1.18-1.41-1.32-1.65-.14-.24-.01-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.39-.4-.54-.41h-.46a.89.89 0 0 0-.64.3c-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.69 2.58 4.1 3.62.57.25 1.02.4 1.37.51.58.18 1.1.16 1.51.1.46-.07 1.4-.57 1.6-1.13.2-.55.2-1.03.14-1.13-.06-.1-.22-.16-.46-.28Z" />
  </svg>
);
