import Dot from "./Dot";

interface TitleTypes {
  text: string;
  dot?: boolean;
  size?: number;
}
export default function Title({ text, dot}: TitleTypes) {
  return (
    <div className="flex flex-row w-full ">
      <h1 className= " smartphone:text-5xl text-white laptop:text-6xl text-9xl font-extrabold font-serif tracking-wide">
        {text}
      </h1>
      {dot && <Dot />}
    </div>
  );
}
