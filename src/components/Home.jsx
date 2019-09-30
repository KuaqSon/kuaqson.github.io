import React from "react";
import { Box, Text, Heading } from "grommet";

function Home() {
  return (
    <Box height="100vh">
      <Box animation={{type: "zoomOut", duration: 1000, size: "large"}}>
        <div className="greeting-container">
          <div className="greeting-sm">Hello there, my name is</div>
          <div className="greeting-main">Nguyen Quang Son.</div>
          <div className="greeting-second">I'm a web developer</div>
        </div>
      </Box>
    </Box>
  );
}

export default Home;
