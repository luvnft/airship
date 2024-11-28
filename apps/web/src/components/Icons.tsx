export type IconProps = {
  size?: number;
  className?: string;
};

const IconTwitterX = ({ size = 24, className }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height="16"
    fill="currentColor"
    className={className}
    viewBox="0 0 16 16"
  >
    <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
  </svg>
);

const IconTikTok = ({ size = 24, className }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="currentColor"
    className={className}
    viewBox="0 0 24 24"
  >
    <path d="M12 2c1.198 0 2.31.37 3.254 1.008A7.067 7.067 0 0 1 19.5 3v3.5c-.86-.014-1.7-.205-2.5-.562v3.67c0 4.522-3.593 8.124-8 8.392A7.956 7.956 0 0 1 3 10.7a7.957 7.957 0 0 1 2.696-6.21A7.998 7.998 0 0 1 10 3.44V7c-2.03 0-3.74 1.66-3.87 3.72a3.913 3.913 0 0 0 4.2 4.3c2.05 0 3.7-1.64 3.87-3.72V2h2z" />
  </svg>
);

export {
  IconTwitterX,
  IconTikTok,
};

