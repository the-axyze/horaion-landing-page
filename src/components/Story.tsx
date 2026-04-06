import { Box, Typography } from "@mui/material";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";

const Story = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography
        variant="h3"
        color="#FFFCF6"
        align="center"
        fontWeight="bold"
        sx={{ pb: 2 }}
      >
        Our Story
      </Typography>
      <Timeline position="alternate-reverse">
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent color="#CCDDE8">In the beginning...</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent color="#CCDDE8">Prototype 1</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent color="#CCDDE8">Prototype 2</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
          </TimelineSeparator>
          <TimelineContent color="#CCDDE8">Final Product</TimelineContent>
        </TimelineItem>
      </Timeline>
    </Box>
  );
};

export default Story;
