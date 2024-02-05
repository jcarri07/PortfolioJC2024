interface ImageShadowTypes {
  src: string;
  horizontal?: boolean;
}

export default function ImageShadow({ src, horizontal }: ImageShadowTypes) {
  return (
    <div className="flex pb-12">
      <div className="flex items-start h-96 w-96">
        <img
          src={src}
          alt="Jose Carrizales"
          className={`h-${horizontal ? "80" : "96"} w-${
            horizontal ? "96" : "80"
          } z-10 rounded-2xl object-fill`}
        />
      </div>
      <div
        className={`flex justify-center items-center bg-gradient-to-r from-tahiti-primary via-tahiti-secondary to-tahiti-tertiary w-${
          horizontal ? "96" : "80"
        } h-${horizontal ? "80" : "96"} absolute ml-10 mt-10 rounded-2xl`}
      >
        <div className="bg-tahiti-background w-[97%] h-[97%] rounded-xl"></div>
      </div>
    </div>
  );
}
