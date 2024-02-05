import { IconArrowRight } from "@tabler/icons-react";

interface ArticleTypes {
    title: string;
    subtitle: string;
    text: string;
}

export default function Article({title, subtitle, text}: ArticleTypes) {
  return (
    <div className="flex flex-col items-start">
      <h1>{title}</h1>
      <h3>{subtitle}</h3>
      <p>{text}</p>
      <div className="flex flex-row items-center justify-center">
        <IconArrowRight size={18} width={30} color="#ffff" />
        <a href="" className=" text-white">Read more</a>
      </div>
    </div>
  );
}
