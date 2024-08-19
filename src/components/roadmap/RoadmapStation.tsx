import React from "react";
import Link from "next/link";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem from "@mui/lab/TimelineItem";
import Typography from "@mui/material/Typography";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";

import { RoadmapStationType } from "@/types/roadmap";

import { IranYekan } from "@/assets/fonts";

import "@/styles/material-ui.css";

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
        <TimelineDot className="w-fit !bg-[#F4F5FA] !shadow-none">
          {icon}
        </TimelineDot>
        <TimelineConnector className="!bg-secondary opacity-30" />
      </TimelineSeparator>

      <TimelineContent className="!flex flex-col !justify-center py-0 sm:py-14 p-2">
        <Typography
          variant="h6"
          component="span"
          className={`${IranYekan.className} text-primary text-sm md:text-base font-semibold overflow-hidden text-ellipsis whitespace-nowrap`}
        >
          {header}
        </Typography>

        <Typography
          className={`${IranYekan.className} text-secondary text-[.5rem] md:text-base opacity-75 line-clamp-1`}
        >
          {description}
        </Typography>
      </TimelineContent>
    </TimelineItem>
  );
}

export default RoadmapStation;
