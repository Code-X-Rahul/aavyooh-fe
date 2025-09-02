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
      "Vish is a seasoned business leader with over 30 years of experience at General Motors in fostering technology-based innovation for business outcomes such as supply chain optimization, just-in-time manufacturing and production processes. He is leading the business growth and strategy for Aavyooh to deliver solutions to industries.",
    linkedIn: "https://www.linkedin.com/in/vish-narayanan-155814/",
    image: "/team/vish_cropped.png",
    // image: "/team/vish_new.jpg",
    imageType: "cover",
  },
  {
    name: "Shweta Singh",
    position: "Co-founder & CTO",
    description:
      "Dr. Singh is an Associate Professor at Purdue University and co-inventor of mechanistic approach that inspires this company. She is leading development of core algorithms and the functionalities for automating the creation of simulation models of Manufacturing Networks",
    linkedIn: "https://www.linkedin.com/in/shweta-singh-9695a95/",
    image: "/team/shweta.jpg",
    imageType: "cover",
  },
  {
    name: "Samir Taylor",
    position: "Software Products Advisor",
    description:
      "Samir is an experienced SaaS product developer for manufacturing industries, having built and commercialized many applications that align with industry 4.0 vision. He leads the creation of cutting-edge technology for sustainable manufacturing.",
    linkedIn: "https://www.linkedin.com/in/samirtaylor/",
    image: "/team/samir.jpg",
    imageType: "cover",
  },
  {
    name: "Rich Helling",
    position: "Industrial Advisor",
    description:
      "Dr. Helling is an independent consultant, retired from Dow Chemical after 30+ years of experience in leadership roles working on sustainability in the chemical manufacturing industry.",
    linkedIn: "https://www.linkedin.com/in/richard-helling-5094a6/",
    image: "/team/rich.jpg",
    imageType: "cover",
  },
  {
    name: "Cassandra Telenko",
    position: "Industrial Advisor",
    description:
      "Dr. Telenko is a sustainability expert and currently at Ford Motor Company leading data tools for innovation in supply chain and material cost analysis. She will be advising on the growth strategy for technology.",
    linkedIn: "https://www.linkedin.com/in/cassandratelenko/",
    image: "/team/cassandra.jpg",
    imageType: "cover",
  },
  {
    name: "Apoorva Bademi",
    position: "Leading Sustainability Research and Data Analysis",
    description:
      "Apoorva Bademi earned her PhD in Sustainability with a focus on assessing the environmental and economic impacts of emerging industries. She has extensive experience applying diverse sustainability assessment methods, including life cycle analysis, input–output modeling, and material flow analysis. Her research and professional work integrate mechanistic modeling and process simulation to evaluate new technologies and manufacturing pathways. At Aavyooh, she is working on building algorithms that enable automation and scalability of sustainability modeling in manufacturing networks.",
    linkedIn: "https://www.linkedin.com/in/apoorva-bademi/",
    image: "/team/Apoorva Bademi Headshot.jpg",
    imageType: "cover",
  },
];

const Team = () => {
  return (
    <div className="bg-[#F9FFF3] grid-bg bg-blend-multiply py-10" id="team">
      <Typography variant={"h3"} className="font-bold text-center">
        Our <span className="font-playfair italic text-primary">Team</span>
      </Typography>
      {/* <LayoutWrapper className="md:grid-cols-2 gap-8 place-items-center pb-5">
        {TEAM.slice(0, 2).map((person) => (
          <PersonCard {...person} key={person.name} />
        ))}
      </LayoutWrapper> */}
      <LayoutWrapper className="md:grid-cols-2  place-items-stretch gap-8 pt-0">
        {TEAM.map((person) => (
          <PersonCard {...person} key={person.name} />
        ))}
      </LayoutWrapper>
    </div>
  );
};

export default Team;
