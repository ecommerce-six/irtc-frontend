import { StaticImageData } from "next/image";

export type RoadmapStationType = {
  link: string;
  header: string;
  description: string;
  icon: StaticImageData | string;
};
