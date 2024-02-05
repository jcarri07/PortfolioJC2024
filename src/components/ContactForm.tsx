import CustomInput from "./CustomInput";
import CustomTextArea from "./CustomTextArea";
import DarkButton from "./DarkButton";

export default function ContactForm() {
  return (
    <div className="flex justify-center rounded-xl bg-gradient-to-r from-tahiti-primary via-tahiti-secondary to-tahiti-tertiary h-72 w-72">
      <form className="flex flex-col items-start justify-center space-y-2 w-[85%]">
        <CustomInput placeholder="Name" />
        <CustomInput placeholder="Email" />
        <CustomTextArea />
        <DarkButton />
      </form>
    </div>
  );
}
