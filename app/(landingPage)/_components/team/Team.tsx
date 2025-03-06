import LayoutWrapper from "@/components/wrappers/LayoutWrapper";
import React from "react";
import PersonCard from "./PersonCard";

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
      "Vish is a seasoned business leader with over 30 years of experience at General Motors in fostering technology-based innovation for business outcomes such as supply chain optimization, just-in-time manufacturing and production processes. He is leading the business growth and strategy for Aavyooh to deliver solutions to industries",
    linkedIn: "",
    image: "/team/vish.jpg",
    imageType: "contain",
  },
  {
    name: "Shweta Singh",
    position: "Co-founder and CTO ",
    description:
      "Dr Singh brings in more than 15 years of research experience in manufacturing networks design and modeling for achieving circularity and resilience. She leads the algorithm development and R&D team at Aavyooh to create next generation technology solutions for manufacturing industries, leveraging data science and mechanistic first-principles models.",
    linkedIn: "",
    image: "/team/shweta.jpg",
    imageType: "cover",
  },
  {
    name: "Samir Taylor",
    position: "Lead Software Product Developer and Architect",
    description:
      "Samir is an experienced SaaS product developer for manufacturing industries, having built and commercialized many applications that align with industry 4.0 vision",
    linkedIn: "",
    image: "/team/samir.jpg",
    imageType: "cover",
  },
  {
    name: "Rich Helling",
    position: "Sustainability Advisor",
    description:
      "Dr. Helling is an independent consultant, retired from Dow Chemical after 30+ years of experience in leadership roles working on sustainability in the chemical manufacturing industry.",
    linkedIn: "",
    image: "/team/rich.jpg",
    imageType: "cover",
  },
  {
    name: "Dr. Cassandra Telenko",
    position: "Industrial Advisory Board Member",
    description:
      "Dr. Telenko is a sustainability expert and currently at Ford Motor Company leading data tools for innovation in supply chain and material cost analysis. She will be advising on the growth strategy for technology.",
    linkedIn: "",
    image: "/team/cassandra.jpg",
    imageType: "cover",
  },
];

const Team = () => {
  return (
    <div className="bg-[#F9FFF3] grid-bg">
      <LayoutWrapper className="grid-cols-2  gap-8 place-items-center">
        {TEAM.slice(0, 2).map((person) => (
          <PersonCard {...person} key={person.name} />
        ))}
      </LayoutWrapper>
      <LayoutWrapper className="grid-cols-3 place-items-stretch gap-8">
        {TEAM.slice(2).map((person) => (
          <PersonCard {...person} key={person.name} />
        ))}
      </LayoutWrapper>
    </div>
  );
};

export default Team;
