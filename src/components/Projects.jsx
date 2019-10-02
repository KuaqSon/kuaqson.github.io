import React from "react";
import { Box, Text, Heading } from "grommet";
import SectionTitle from "./SectionTitle";

function Projects() {
  return (
    <Box height={{ min: "100vh" }} id="projects">
      <div className="container">
        {SectionTitle("Here're some funny projects made by me")}
      </div>
    </Box>
  );
}

export default Projects;
