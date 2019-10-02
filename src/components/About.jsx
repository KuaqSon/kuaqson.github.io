import React from "react";
import { Box, Text, Grid, Image } from "grommet";
import SectionTitle from "./SectionTitle";
import avaimg from "../images/avatar-1.jpg";
import Fade from "react-reveal/Fade";
import {
  Html5,
  Reactjs,
  Node,
  Diamond,
  Shield,
  SettingsOption,
  Windows,
  Css3
} from "grommet-icons";

function About() {
  return (
    <Fade bottom>
      <Box height={{ min: "100vh" }} id="about">
        <div className="container about-container">
          {SectionTitle("A little bit about me")}
          <Box direction="row-responsive" align="start" gap="large">
            <Box>
              <Box width={{ max: "768px" }}>
                <Text>
                  Hello! I'm Quang Son, a web developer based in Ho Chi Minh,
                  Viet Name who enjoys building things that live on the
                  internet. I develop exceptional websites and web apps that
                  provide intuitive, pixel-perfect user interfaces with
                  efficient and modern backends.
                </Text>
              </Box>
              <Fade bottom>
                <Box pad={{ vertical: "medium" }}>
                  <Text>
                    Here's a few technologies I've been working with recently:
                  </Text>
                  <div className="tech-types">
                    <Box width={{ min: "220px" }} pad={{ vertical: "small" }}>
                      <Box direction="row" gap="small">
                        <Html5 /> Javascript
                      </Box>
                      <Box direction="row" gap="small">
                        <Css3 /> HTML & CSS
                      </Box>
                      <Box direction="row" gap="small">
                        <Reactjs /> ReactJs
                      </Box>
                      <Box direction="row" gap="small">
                        <Shield /> Angular
                      </Box>
                    </Box>
                    <Box width={{ min: "220px" }} pad={{ vertical: "small" }}>
                      <Box direction="row" gap="small">
                        <Windows /> ASP.NET & ASP.NET Core
                      </Box>
                      <Box direction="row" gap="small">
                        <Node /> NodeJs
                      </Box>
                      <Box direction="row" gap="small">
                        <SettingsOption /> ExpressJs
                      </Box>
                      <Box direction="row" gap="small">
                        <Diamond /> Ruby on Rails
                      </Box>
                    </Box>
                  </div>
                </Box>
              </Fade>
            </Box>
            <Fade bottom>
              <Box direction="row" justify="center">
                <Box
                  height="medium"
                  width="medium"
                  elevation="large"
                  round="large"
                >
                  <Image fit="cover" src={avaimg} />
                </Box>
              </Box>
            </Fade>
          </Box>
        </div>
      </Box>
    </Fade>
  );
}

export default About;
