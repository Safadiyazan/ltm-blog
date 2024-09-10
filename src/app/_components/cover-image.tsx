import cn from "classnames";
import Link from "next/link";
import Image from "next/image";

type Props = {
  title: string;
  src: string;
  slug?: string;
};

const CoverImage = ({ title, src, slug }: Props) => {
  return (
    <div className="sm:mx-0">
      {src ? (
        <Image
          src={src}
          alt={`Cover Image for ${title}`}
          className={cn("shadow-sm w-full", {
            "hover:shadow-lg transition-shadow duration-200": slug,
          })}
          width={500}
          height={500}
        />
      ) : (
        <div className="w-12 h-12 mr-4" /> // Empty space placeholder
      )}
    </div>
  );
};

export default CoverImage;
