import clsx from "clsx";

export const renderGalleryImages = (images: string[], id: number) => {
  if (images.length <= 4) {
    return (
      <div className="flex gap-2">
        {images.map((image, i) => (
          <a key={i} data-fancybox={`gallery-${id}`} href={image}>
            <img className="w-12 h-12 cursor-pointer" src={image} alt="gallery-item" />
          </a>
        ))}
      </div>
    );
  } else
    return (
      <div className="flex gap-2">
        {images.slice(0, 3).map((image, i) => {
          return (
            <a className="visible" key={i} data-fancybox={`gallery-${id}`} href={image}>
              <img className="w-12 h-12 cursor-pointer" src={image} alt="gallery-item" />
            </a>
          );
        })}
        <a className="relative" data-fancybox={`gallery-${id}`} href={images[3]}>
          <img className="w-12 h-12 cursor-pointer" src={images[3]} alt="gallery-item" />
          <div
            className={clsx(
              "absolute inset-0",
              "flex items-center justify-center",
              "bg-black/50",
              "text-white text-lg"
            )}
          >{`+${images.length - 3}`}</div>
        </a>
        {images.slice(4).map((image, i) => {
          return (
            <a className="hidden" key={i} data-fancybox={`gallery-${id}`} href={image}>
              <img className="w-12 h-12 cursor-pointer" src={image} alt="gallery-item" />
            </a>
          );
        })}
      </div>
    );
};
