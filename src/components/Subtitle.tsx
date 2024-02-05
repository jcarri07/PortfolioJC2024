interface SubtitleTypes {
  text: string;
}

export default function Subtitle({ text }: SubtitleTypes) {
  return <h1 className="font-mono text-white text-3xl py-4">{text}</h1>;
}
