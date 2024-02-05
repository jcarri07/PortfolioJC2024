interface GrayTitleTypes {
  text: string;
}
export default function GrayTtitle({ text }: GrayTitleTypes) {
  return <h1 className="text-gray-500 text-5xl font-black ">{text}</h1>;
}
