interface ButtonTypes {
  text: string;
  size: "sm" | "md" | "lg";
}

export default function PrimaryButton({ text, size }: ButtonTypes) {
  return (
    <button
      className={
        size === "sm"
          ? "font-semibold py-4 rounded-lg px-8 border-none bg-gradient-to-r from-tahiti-primary via-tahiti-secondary to-tahiti-tertiary"
          : size === "md"
          ? "font-semibold py-4 rounded-lg px-12 border-none bg-gradient-to-r from-tahiti-primary via-tahiti-secondary to-tahiti-tertiary"
          : "font-semibold py-4 rounded-lg px-14 border-none bg-gradient-to-r from-tahiti-primary via-tahiti-secondary to-tahiti-tertiary"
      }
    >
      {text}
    </button>
  );
}
