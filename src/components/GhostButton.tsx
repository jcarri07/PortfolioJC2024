interface ButtonGhostTypes {
  text: string;
  size: "sm" | "md" | "lg";
}
export default function GhostButton({ text, size }: ButtonGhostTypes) {
  return (
    <button
      className={
        size === "sm"
          ? "font-semibold py-4 rounded-lg px-8 bg-gradient-to-r border-tahiti-tertiary border-2"
          : size
          ? "font-semibold py-4 rounded-lg px-12 bg-gradient-to-r border-tahiti-tertiary border-2"
          : "font-semibold py-4 rounded-lg px-14 bg-gradient-to-r border-tahiti-tertiary border-2"
      }
    >
      {text}
    </button>
  );
}
