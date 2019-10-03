import React from "react";
import { Box, Text, Image, Heading } from "grommet";
import SectionTitle from "./SectionTitle";
import Fade from "react-reveal/Fade";

const projectsList = [
  {
    name: "Instadolo",
    gitUrl:
      "https://raw.githubusercontent.com/KuaqSon/instadolo/master/demo_images/instadolo.png",
    image_url:
      "https://raw.githubusercontent.com/KuaqSon/instadolo/master/demo_images/instadolo.png",
    demo_url:
      "https://raw.githubusercontent.com/KuaqSon/instadolo/master/demo_images/instadolo.png",
    specs: ["Reactjs", "Html & Css"],
    desc: ""
  },
  {
    name: "Good Sleep",
    gitUrl:
      "https://raw.githubusercontent.com/KuaqSon/good-sleep/master/demo_images/goodsleep.png",
    image_url:
      "https://raw.githubusercontent.com/KuaqSon/good-sleep/master/demo_images/goodsleep.png",
    demo_url:
      "https://raw.githubusercontent.com/KuaqSon/good-sleep/master/demo_images/goodsleep.png",
    specs: ["Reactjs", "Html & Css"],
    desc: ""
  },
  {
    name: "Git Checkout",
    gitUrl:
      "https://raw.githubusercontent.com/KuaqSon/gcb-extension/master/screenshots/demo.png",
    image_url:
      "https://raw.githubusercontent.com/KuaqSon/gcb-extension/master/screenshots/demo.png",
    demo_url:
      "https://raw.githubusercontent.com/KuaqSon/gcb-extension/master/screenshots/demo.png",
    specs: ["Reactjs", "Html & Css"],
    desc: ""
  }
];

const ProjectItem = ({ name, gitUrl, image_url, demo_url, specs, desc }) => (
  <Fade bottom>
    <div className="prj-item">
      <div className="prj-img-cont">
        <Box direction="row" justify="center">
          <Box height="medium" width="medium">
            <Image fit="cover" src={image_url} />
          </Box>
        </Box>
      </div>
      <div className="prj-detail">
        <div className="prj-name">{name}</div>
        <div className="prj-specs">
          {specs.map(x => (
            <span key={name + x}>{x}</span>
          ))}
        </div>
        <div className="prj-desc">{desc || "loremipsum"}</div>
        <div className="prj-demo">Demo</div>
      </div>
      {/* <Box>
          <Text>{name}</Text>
          <Text>Reactjs</Text>
          <Text>{index}</Text>
        </Box> */}
    </div>
  </Fade>
);

function Projects() {
  return (
    <Box height={{ min: "100vh" }} id="projects">
      <div className="container">
        {SectionTitle("Here're some funny projects made by me")}
        <Box>
          {projectsList.map(prj => (
            <ProjectItem
              key={prj.name}
              index={projectsList.indexOf(prj)}
              name={prj.name}
              gitUrl={prj.gitUrl}
              image_url={prj.image_url}
              demo_url={prj.demo_url}
              specs={prj.specs}
              desc={prj.desc}
            />
          ))}
        </Box>
      </div>
    </Box>
  );
}

export default Projects;
