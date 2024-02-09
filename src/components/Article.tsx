import { IconArrowRight } from "@tabler/icons-react";

interface ArticleTypes {
  title: string;
  subtitle: string;
  text: string;
}

export default function Article({ title, subtitle, text }: ArticleTypes) {
  return (
    <div className="flex flex-col items-start justify-between smartphone:h-94 tablet:h-94 w-full smartphone:pb-10 space-y-5">
      <h1 className=" text-tahiti-primary text-4xl ">{title}</h1>
      <h3 className="text-left font-mono font-semibold text-3xl text-white">
        {subtitle}
      </h3>
      <p className="w-full text-justify text-balance text-white smartphone:w-[90%] tablet:w-[90%] smartphone:line-clamp-4 tablet:line-clamp-4 laptop:line-clamp-none tablet:text-ellipsis smartphone:text-ellipsis">
        {text}
      </p>
      <div className="flex flex-row items-center justify-center">
        <IconArrowRight size={18} width={30} color="#ffff" />
        <a href="" className=" text-white">
          Leer mas
        </a>
      </div>
    </div>
  );
}
