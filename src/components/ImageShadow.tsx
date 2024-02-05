interface ImageShadowTypes {
  src: string;
  horizontal?: boolean;
}

export default function ImageShadow({ src, horizontal }: ImageShadowTypes) {
  return (
    <>
      {horizontal ? (
        <div className="flex pb-4">
          <div className="flex items-start h-80 w-96">
            <img
              src={src}
              alt="Jose Carrizales"
              className="h-72 w-96 z-10 rounded-2xl object-cover"
            />
          </div>
          <div
            className="flex justify-center items-center bg-gradient-to-r from-tahiti-primary via-tahiti-secondary to-tahiti-tertiary w-96 h-72 absolute ml-10 mt-10 rounded-2xl"
          >
            <div className="bg-tahiti-background w-[97%] h-[97%] rounded-xl"></div>
          </div>
        </div>
      ) : (
        <div className="flex pb-12">
          <div className="flex items-start h-96 w-96">
            <img
              src={src}
              alt="Jose Carrizales"
              className="h-96 w-80
          } z-10 rounded-2xl object-fill"
            />
          </div>
          <div
            className="flex justify-center items-center bg-gradient-to-r from-tahiti-primary via-tahiti-secondary to-tahiti-tertiary w-80
        } h-96 absolute ml-10 mt-10 rounded-2xl"
          >
            <div className="bg-tahiti-background w-[97%] h-[97%] rounded-xl"></div>
          </div>
        </div>
      )}
    </>
  );
}
