import React from "react";
import Link from "next/link";
import Image from "next/image";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem from "@mui/lab/TimelineItem";
import Typography from "@mui/material/Typography";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";

import { RoadmapStationType } from "@/types/roadmap";

import { IranYekan } from "@/assets/fonts";

function RoadmapStation({
  icon,
  link,
  header,
  description,
}: RoadmapStationType) {
  return (
    <TimelineItem>
      <TimelineOppositeContent
        sx={{ m: "auto 0" }}
        align="right"
        variant="body2"
        className={`${IranYekan.className} text-brand p-0 md:p-2`}
      >
        <Link href={link} className="text-xs md:text-sm">
          مشاهده دوره ها
        </Link>
      </TimelineOppositeContent>

      <TimelineSeparator>
        <TimelineConnector className="!bg-secondary opacity-30" />
        <TimelineDot className="!p-0 w-[4rem] h-[4rem] !bg-background dark:!bg-background-dark !shadow-none !border-0">
          <Link href={link}>
            <Image src={icon} alt={header} width={75} height={75} />
          </Link>
        </TimelineDot>
        <TimelineConnector className="!bg-secondary opacity-30" />
      </TimelineSeparator>

      <TimelineContent className="!flex flex-col !justify-center py-0 sm:py-14 p-2">
        <Link href={link}>
          <Typography
            variant="h6"
            component="span"
            className={`${IranYekan.className} text-primary dark:text-primary-dark text-sm md:text-base font-semibold overflow-hidden text-ellipsis whitespace-nowrap`}
          >
            {header}
          </Typography>

          <Typography
            className={`${IranYekan.className} text-secondary dark:text-secondary-dark text-[.5rem] md:text-base opacity-75 line-clamp-1`}
          >
            {description}
          </Typography>
        </Link>
      </TimelineContent>
    </TimelineItem>
  );
}

export default RoadmapStation;
