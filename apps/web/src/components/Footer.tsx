import { IconTwitterX } from "./Icons";

export function Footer() {
  return (
    <footer className="flex justify-center w-full space-x-4">
      <a
        href="https://twitter.com/wizardofhahz"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-primary/90"
      >
        <IconTwitterX size={24} />
      </a>
    </footer>
  );
}
