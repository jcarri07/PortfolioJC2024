interface AncleTypes {
  text: string;
  src: string;
  active?: boolean;
}
export default function Ancle({ src, text, active = false }: AncleTypes) {
  return (
    <a className={`text-${active ? " text-tahiti-primary" :"white"} font-sans text-lg font-semibold`} href={src}>
      {text}
    </a>
  );
}
