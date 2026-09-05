import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function PhoneIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden {...props}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function WhatsAppIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.5 0 .16 5.34.16 11.9c0 2.1.55 4.15 1.6 5.96L0 24l6.3-1.65a11.87 11.87 0 0 0 5.75 1.47h.01c6.56 0 11.9-5.34 11.9-11.9 0-3.18-1.24-6.17-3.44-8.44zM12.06 21.7h-.01a9.8 9.8 0 0 1-5-1.37l-.36-.21-3.74.98 1-3.64-.24-.37a9.78 9.78 0 0 1-1.5-5.2c0-5.41 4.4-9.81 9.82-9.81a9.76 9.76 0 0 1 6.94 2.88 9.76 9.76 0 0 1 2.87 6.94c0 5.41-4.4 9.8-9.78 9.8zm5.38-7.35c-.29-.15-1.73-.85-2-.95-.27-.1-.46-.15-.66.15-.2.29-.76.95-.93 1.14-.17.2-.34.22-.63.07-.29-.15-1.22-.45-2.33-1.43-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.34.43-.51.15-.17.2-.29.29-.49.1-.2.05-.37-.02-.52-.07-.15-.66-1.59-.9-2.18-.24-.57-.48-.49-.66-.5h-.56c-.2 0-.52.07-.79.37-.27.29-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.73-.71 1.97-1.39.24-.68.24-1.27.17-1.39-.07-.12-.27-.2-.56-.34z" />
    </svg>
  );
}

export function MapPinIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden {...props}>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export function ClockIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden {...props}>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeLinecap="round" />
    </svg>
  );
}

export function TireIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.85" aria-hidden {...props}>
      {/* Tire with tread + hub — New & Used Tires */}
      <circle cx="12" cy="12" r="9" strokeLinecap="round" />
      <circle cx="12" cy="12" r="5.25" strokeLinecap="round" />
      <circle cx="12" cy="12" r="1.75" strokeLinecap="round" />
      <path
        d="M12 3.15v1.7M12 19.15v1.7M3.15 12h1.7M19.15 12h1.7M5.05 5.05l1.2 1.2M17.75 17.75l1.2 1.2M5.05 18.95l1.2-1.2M17.75 6.25l1.2-1.2"
        strokeLinecap="round"
      />
      <path d="M9.2 9.2l1.1 1.1M13.7 13.7l1.1 1.1M9.2 14.8l1.1-1.1M13.7 10.3l1.1-1.1" strokeLinecap="round" />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden {...props}>
      <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function StarIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1" aria-hidden {...props}>
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" strokeLinejoin="round" />
    </svg>
  );
}

export function AlignIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.85" aria-hidden {...props}>
      {/* Front wheels + toe arrows — Wheel Alignment */}
      <path
        d="M7 5.5v13M17 5.5v13"
        strokeLinecap="round"
      />
      <rect x="4.25" y="7.5" width="5.5" height="9" rx="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="14.25" y="7.5" width="5.5" height="9" rx="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9.75 12h4.5" strokeLinecap="round" />
      <path d="M3.4 12H2.2M20.6 12h1.2" strokeLinecap="round" />
      <path d="M4.2 10.6 2.8 12l1.4 1.4M19.8 10.6 21.2 12l-1.4 1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function BalanceIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.85" aria-hidden {...props}>
      {/* Wheel with rim weights — Tire Balancing */}
      <circle cx="12" cy="12" r="9" strokeLinecap="round" />
      <circle cx="12" cy="12" r="4.25" strokeLinecap="round" />
      <circle cx="12" cy="12" r="1.35" strokeLinecap="round" />
      {/* Balance weight clips on rim */}
      <path d="M10.35 3.35h3.3v1.55h-3.3z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M18.9 10.2l1.1 1.9-1.55.9-1.1-1.9z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5.1 10.2l-1.1 1.9 1.55.9 1.1-1.9z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 7.75v2M12 14.25v2M9.75 12h2M12.25 12h2" strokeLinecap="round" />
    </svg>
  );
}

export function WrenchIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.85" aria-hidden {...props}>
      {/* Tire + wrench — Repair & Vulcanization */}
      <circle cx="9.25" cy="13.25" r="6.5" strokeLinecap="round" />
      <circle cx="9.25" cy="13.25" r="2.6" strokeLinecap="round" />
      <path
        d="M14.2 5.2a3.4 3.4 0 0 1 4.6 4.6l-5.35 5.35a1.15 1.15 0 0 1-1.63 0l-.97-.97a1.15 1.15 0 0 1 0-1.63L16.2 7.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M17.35 4.05l2.6 2.6" strokeLinecap="round" />
    </svg>
  );
}

export function TruckIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.85" aria-hidden {...props}>
      {/* Service van with tire mark — Mobile Within 10 Miles */}
      <path
        d="M2 15.5V7.5A1.5 1.5 0 0 1 3.5 6H14v9.5H2z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 10h3.2l2.8 2.6V15.5H14V10z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M3.5 6V4.75A.75.75 0 0 1 4.25 4H8.5" strokeLinecap="round" />
      <circle cx="6.25" cy="17.75" r="2.15" />
      <circle cx="17.5" cy="17.75" r="2.15" />
      <path d="M8.5 17.75h6.8" strokeLinecap="round" />
      <path d="M5.2 11.2h5.2M5.2 13.2h3.4" strokeLinecap="round" />
    </svg>
  );
}

export function InstallIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.85" aria-hidden {...props}>
      {/* Two tires + mount mark — Install Your Tires */}
      <circle cx="8" cy="13" r="6" strokeLinecap="round" />
      <circle cx="8" cy="13" r="2.35" strokeLinecap="round" />
      <circle cx="17.25" cy="9.25" r="4.35" strokeLinecap="round" />
      <circle cx="17.25" cy="9.25" r="1.65" strokeLinecap="round" />
      <path d="M17.25 3.4v2.2M17.25 13v2.2M11.4 9.25h2.2M20.9 9.25h2.2" strokeLinecap="round" />
    </svg>
  );
}

export function SmsIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden {...props}>
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 9h8M8 13h5" strokeLinecap="round" />
    </svg>
  );
}

export function FacebookIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M22 12.07C22 6.48 17.52 2 11.93 2S1.86 6.48 1.86 12.07c0 5.02 3.66 9.18 8.44 9.93v-7.03H7.9v-2.9h2.4V9.85c0-2.37 1.41-3.68 3.57-3.68 1.03 0 2.12.18 2.12.18v2.33h-1.2c-1.18 0-1.54.73-1.54 1.48v1.78h2.62l-.42 2.9h-2.2V22c4.78-.75 8.44-4.91 8.44-9.93z" />
    </svg>
  );
}

export function TikTokIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.83 2.83 0 0 1-2.83 2.7 2.84 2.84 0 0 1-2.84-2.84 2.84 2.84 0 0 1 2.84-2.84c.28 0 .56.04.82.12v-3.5a6.27 6.27 0 0 0-.82-.05A6.34 6.34 0 0 0 3.2 15.26a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.87a8.2 8.2 0 0 0 4.78 1.52V6.94a4.85 4.85 0 0 1-1.07-.25z" />
    </svg>
  );
}

export function CatalogIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden {...props}>
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 7h8M8 11h8M8 15h5" strokeLinecap="round" />
    </svg>
  );
}

export function AppleMapsIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden {...props}>
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  );
}
