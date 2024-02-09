import { IconBrandReact } from "@tabler/icons-react";

interface CardTypes {
  title: string;
  text: string;
}
export default function Card({ title, text }: CardTypes) {
  return (
    <div className="flex justify-center items-center bg-gradient-to-r from-tahiti-primary via-tahiti-secondary to-tahiti-tertiary w-80 h-80 rounded-2xl shadow-lg shadow-cyan-500/50 ...">
      <div className="bg-tahiti-background w-[97%] h-[97%] rounded-xl p-5">
        <div className="flex flex-row items-center pb-5">
          <IconBrandReact size={40} color="#4EAEDA" />
          <h3 className=" text-white ml-2 font-semibold">{title}</h3>
        </div>
        <p className="text-justify text-white">{text}</p>
      </div>
    </div>
  );
}
