interface ImageShadowTypes {
  src: string;
  horizontal?: boolean;
}

export default function ImageShadow({ src, horizontal }: ImageShadowTypes) {
  return (
    <>
      {horizontal ? (
        <div className="flex w-96 h-72 smartphone:w-64 smartphone:h-52">
          <div className="flex items-start h-80 w-96 smartphone:h-52 smartphone:w-96">
            <img
              src={src}
              alt="Jose Carrizales"
              className="h-72 w-96 smartphone:h-40 smartphone:w-60 z-30 rounded-2xl object-cover border-white border-2"
            />
          </div>
          <div className="flex justify-center items-center bg-gradient-to-r from-tahiti-primary via-tahiti-secondary to-tahiti-tertiary w-96 h-72 smartphone:h-44 smartphone:w-60 absolute ml-10 mt-10 smartphone:ml-5 smartphone:mt-5 rounded-2xl shadow-lg shadow-cyan-500/50">
            <div className="bg-tahiti-background w-[97%] h-[97%] rounded-xl"></div>
          </div>
        </div>
      ) : (
        <div className="flex pb-12">
          <div className="flex items-start h-96 w-96 ">
            <img
              src={src}
              alt="Jose Carrizales"
              className="h-96 w-80
          } z-30 rounded-2xl object-fill border-white border-2"
            />
          </div>
          <div
            className="flex justify-center items-center bg-gradient-to-r from-tahiti-primary via-tahiti-secondary to-tahiti-tertiary w-80
        h-96 absolute ml-10 mt-10 rounded-2xl shadow-lg shadow-cyan-500/50"
          >
            <div className="bg-tahiti-background w-[97%] h-[97%] rounded-xl"></div>
          </div>
        </div>
      )}
    </>
  );
}
