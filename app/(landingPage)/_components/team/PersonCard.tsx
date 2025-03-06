import { Typography } from "@/components/ui/typography";
import Image from "next/image";
import { TeamPerson } from "./Team";

const PersonCard = ({
  description,
  name,
  position,
  image,
  imageType,
}: TeamPerson) => {
  return (
    <div className="rounded-md flex flex-col gap-3 border border-[#E7EAEE] max-w-[520px]">
      <div className="max-h-[280px] bg-primary flex items-center justify-center rounded-t-md">
        <Image
          src={image}
          alt={name}
          width={0}
          height={0}
          className="max-h-[280px] rounded-t-md"
          style={{
            objectFit: imageType,
          }}
          layout="responsive"
        />
      </div>
      <div className="flex flex-col gap-4 p-5">
        <div className="flex justify-between items-center">
          <Typography
            variant={"h5"}
            className="font-black font-playfair italic"
          >
            {name}
          </Typography>
          <Image src="/linkedin.svg" alt="linkedin" width={18} height={18} />
        </div>
        <Typography variant={"span"} className="font-bold">
          {position}
        </Typography>
        <Typography variant={"span"}>{description}</Typography>
      </div>
    </div>
  );
};

export default PersonCard;
