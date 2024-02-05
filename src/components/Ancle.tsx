interface AncleTypes {
  text: string;
  src: string;
}
export default function Ancle({ src, text }: AncleTypes) {
  return (
    <a className=" text-white font-sans text-xl" href={src}>
      {text}
    </a>
  );
}
