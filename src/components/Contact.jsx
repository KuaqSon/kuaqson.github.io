import React from "react";
import { Box, Text, Heading } from "grommet";
import SectionTitle from "./SectionTitle";

function Contact() {
  return (
    <Box height={{ min: "80vh" }} id="contact">
      <div className="container">
        {SectionTitle("Let's connect")}
        <Box direction="column">
          <Text>Although I'm not currently looking for freelance opportunities, my inbox is always open. Feel free to connect with me on any of the social platforms below.</Text>
          <Text>Get in touch</Text>
          <Text>qson.ng@gmail.com</Text>
        </Box>
      </div>
    </Box>
  );
}

export default Contact;
