import React from "react";
import { Box, Text, Anchor } from "grommet";
import { MailOption } from "grommet-icons";

function Contact() {
  return (
    <Box height={{ min: "80vh" }} id="contact">
      <div className="container">
        <Box direction="column" justify="center" pad={{ top: "48px" }}>
          <Text textAlign="center" size="48px">
            Let's connect
          </Text>
          <Text margin={{ vertical: "medium" }} textAlign="center" size="24px">
            Although I'm not currently looking for freelance opportunities, my
            inbox is always open. Feel free to connect with me. I'll try my best
            to answer your email!
          </Text>

          <Box pad={{ vertical: "large" }} alignSelf="center">
            <Anchor
              icon={<MailOption />}
              label="Get in touch"
              href="mailto:qson.ng@gmail.com"
              size="large"
            />
          </Box>
        </Box>
      </div>
    </Box>
  );
}

export default Contact;
