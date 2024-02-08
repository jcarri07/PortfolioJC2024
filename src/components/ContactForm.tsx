import CustomInput from "./CustomInput";
import CustomTextArea from "./CustomTextArea";
import DarkButton from "./DarkButton";

export default function ContactForm() {
  return (
    <div className="flex justify-center rounded-xl bg-gradient-to-r from-tahiti-primary via-tahiti-secondary to-tahiti-tertiary h-96 w-96 smartphone:h-72 smartphone:w-72 smartphone:pt-1 shadow-lg shadow-cyan-500/50 border-white border-2">
      <form className="flex flex-col items-start justify-center space-y-2 w-[85%]">
        <CustomInput placeholder="Name" />
        <CustomInput placeholder="Email" />
        <CustomTextArea />
        <DarkButton />
      </form>
    </div>
  );
}
