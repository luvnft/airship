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
    height="16"
    fill="currentColor"
    className={className}
    viewBox="0 0 16 16"
  >
    <path d="M9.125 1c.52 1.466 1.717 2.3 3.094 2.382v1.351a5.03 5.03 0 0 1-2.968-.933v4.392c0 2.18-1.772 3.88-3.958 3.808a3.96 3.96 0 0 1-2.595-6.966A3.948 3.948 0 0 1 5.156 5.23v1.442A2.563 2.563 0 0 0 4.105 6.4a2.582 2.582 0 1 0 2.582 2.582V2.006h1.872c.22.001.44.01.66.023ZM10.5 0H7.006v8.983a4.5 4.5 0 1 1-2.418-1.976V4.234a5.998 5.998 0 1 0 5.912 1.245V2.495c.507.186 1.057.288 1.62.288H13V0h-2.5Z" />
  </svg>
);

export {
  IconTwitterX,
  IconTikTok,
};

