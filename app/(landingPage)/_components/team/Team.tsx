import LayoutWrapper from "@/components/wrappers/LayoutWrapper";
import React from "react";
import PersonCard from "./PersonCard";
import { Typography } from "@/components/ui/typography";

export interface TeamPerson {
  name: string;
  position: string;
  description: string;
  linkedIn: string;
  image: string;
  imageType?: "cover" | "contain";
}

const TEAM: Array<TeamPerson> = [
  {
    name: "Vish Narayanan",
    position: "Co-founder and CEO",
    description:
      "Vish has over 20 years of leadership experience in supply chain management. As the CEO of Aavyooh, he leads with a vision to implement innovative solutions that promote sustainability across the manufacturing sector, ensuring that Aavyooh's efforts make a significant impact globally.",
    linkedIn: "",
    image: "/team/vish.jpg",
    imageType: "contain",
  },
  {
    name: "Shweta Singh",
    position: "Co-founder",
    description:
      "Shweta brings her expertise in financial strategy and operations to ensure that  Aavyooh’s initiatives are financially sound and focused on long-term sustainability. With over a decade of experience in research and innovation, she is a driving force behind the company's mission.",
    linkedIn: "",
    image: "/team/shweta.jpg",
    imageType: "cover",
  },
  {
    name: "Samir Taylor",
    position: "Software Products Advisor",
    description:
      "Samir lends his deep expertise in software development to Aavyooh, guiding the creation of cutting-edge technology for sustainable manufacturing. His advice helps to shape Aavyooh’s software solutions, making them both efficient and scalable.",
    linkedIn: "",
    image: "/team/samir.jpg",
    imageType: "cover",
  },
  {
    name: "Rich Helling",
    position: "Sustainability Advisor",
    description:
      "With a keen focus on environmental impact, Rich is dedicated to advancing Aavyooh’s sustainability goals. He ensures that the company's strategies in waste reduction and emission control are grounded in innovative, eco-friendly practices.",
    linkedIn: "",
    image: "/team/rich.jpg",
    imageType: "cover",
  },
  {
    name: "Cassandra Telenko",
    position: "Advisor",
    description:
      "Cassandra’s expertise in sustainable technologies helps Aavyooh stay ahead of the curve. She integrates the latest advancements in environmental technology into Aavyooh's mission, pushing the boundaries of what’s possible in sustainable manufacturing.",
    linkedIn: "",
    image: "/team/cassandra.jpg",
    imageType: "cover",
  },
];

const Team = () => {
  return (
    <div className="bg-[#F9FFF3] grid-bg bg-blend-multiply py-10" id="team">
      <Typography variant={"h3"} className="font-bold text-center">
        Our <span className="font-playfair italic text-primary">Teams</span>
      </Typography>
      <LayoutWrapper className="md:grid-cols-2  gap-8 place-items-center pb-5">
        {TEAM.slice(0, 2).map((person) => (
          <PersonCard {...person} key={person.name} />
        ))}
      </LayoutWrapper>
      <LayoutWrapper className="md:grid-cols-2 lg:grid-cols-3 place-items-stretch gap-8 pt-0">
        {TEAM.slice(2).map((person) => (
          <PersonCard {...person} key={person.name} />
        ))}
      </LayoutWrapper>
    </div>
  );
};

export default Team;
