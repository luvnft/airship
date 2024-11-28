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
    <path d="M12 2a5.556 5.556 0 0 0 5.394 5.556 6.764 6.764 0 0 1-.15 1.31 7.476 7.476 0 0 1-1.073 2.334 7.065 7.065 0 0 1-1.98 2.08 6.772 6.772 0 0 1-2.675 1.007V13.45a2.516 2.516 0 1 0-2.182 2.487v5.133a8.09 8.09 0 0 0 3.315-.952 8.654 8.654 0 0 0 3.042-2.518 8.862 8.862 0 0 0 1.352-2.74 9.365 9.365 0 0 0 .5-2.955 10.106 10.106 0 0 0 .906-.104c.32-.044.638-.103.955-.175v-3.106a8.144 8.144 0 0 1-1.055-.192 8.46 8.46 0 0 1-1.835-.665A7.457 7.457 0 0 1 12 2Z" />
  </svg>
);

export {
  IconTwitterX,
  IconTikTok,
};

