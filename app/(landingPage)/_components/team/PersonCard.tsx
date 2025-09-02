import { Typography } from "@/components/ui/typography";
import Image from "next/image";
import { TeamPerson } from "./Team";

const PersonCard = ({
  description,
  name,
  position,
  image,
  imageType,
  linkedIn,
}: TeamPerson) => {
  return (
    <div className="rounded-md flex flex-col gap-3 bg-white border border-[#E7EAEE] max-w-[520px] h-full">
      <div className="max-h-[380px] min-h-[380px] bg-primary flex items-center justify-center rounded-t-md">
        <Image
          src={image}
          alt={name}
          width={0}
          height={0}
          className="max-h-[380px] min-h-[380px] rounded-t-md"
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
          <a target="_blank" rel="noreferrer" href={linkedIn}>
            <Image src="/linkedin.svg" alt="linkedin" width={18} height={18} />
          </a>
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
