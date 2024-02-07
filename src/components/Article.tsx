import { IconArrowRight } from "@tabler/icons-react";

interface ArticleTypes {
    title: string;
    subtitle: string;
    text: string;
}

export default function Article({title, subtitle, text}: ArticleTypes) {
  return (
    <div className="flex flex-col items-start justify-between h-60 w-full space-y-5">
      <h1 className=" text-tahiti-primary text-2xl ">{title}</h1>
      <h3 className="text-left font-mono font-semibold text-2xl text-white">{subtitle}</h3>
      <p className="w-full text-justify text-balance text-white line-clamp-4 text-ellipsis">{text}</p>
      <div className="flex flex-row items-center justify-center">
        <IconArrowRight size={18} width={30} color="#ffff" />
        <a href="" className=" text-white">Read more</a>
      </div>
    </div>
  );
}
