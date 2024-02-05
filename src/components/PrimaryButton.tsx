interface ButtonTypes {
  text: string;
  size: "sm" | "md" | "lg";
}

export default function PrimaryButton({ text, size }: ButtonTypes) {
  return (
    <button
      className={
        size === "sm"
          ? " text-white font-semibold py-4 rounded-lg w-32 border-none bg-gradient-to-r from-tahiti-primary via-tahiti-secondary to-tahiti-tertiary"
          : size === "md"
          ? " text-white font-semibold py-4 rounded-lg w-48 border-none bg-gradient-to-r from-tahiti-primary via-tahiti-secondary to-tahiti-tertiary"
          : " text-white font-semibold py-4 rounded-lg w-56 border-none bg-gradient-to-r from-tahiti-primary via-tahiti-secondary to-tahiti-tertiary"
      }
    >
      {text}
    </button>
  );
}
