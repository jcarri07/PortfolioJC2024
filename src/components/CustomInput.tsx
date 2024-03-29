interface InputTypes {
    placeholder: string;
}

export default function CustomInput({placeholder}: InputTypes) {
  return (
    <input className="bg-tahiti-background rounded-md p-4 smartphone:p-2 w-full" placeholder={placeholder}></input>
  )
}
