interface GrayTitleTypes {
  text: string;
}
export default function GrayTtitle({ text }: GrayTitleTypes) {
  return <h1 className=" smartphone:text-2xl text-gray-500 text-5xl font-bold font-mono ">{text}</h1>;
}
