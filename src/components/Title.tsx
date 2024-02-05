import Dot from "./Dot";

interface TitleTypes {
  text: string;
  dot?: boolean;
}
export default function Title({ text, dot }: TitleTypes) {
  return (
    <div className="flex flex-row">
      <h1 className=" text-white text-8xl font-extrabold font-serif tracking-wide">
        {text}
      </h1>
      {dot && <Dot />}
    </div>
  );
}
