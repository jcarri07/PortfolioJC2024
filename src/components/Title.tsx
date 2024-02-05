interface TitleTypes {
  text: string;
}
export default function Title({ text }: TitleTypes) {
  return (
    <h1 className=" text-white text-8xl font-extrabold font-serif tracking-wide">
      {text}
    </h1>
  );
}
