import React from "react";
import { Box, Text } from "grommet";
import { Article } from "grommet-icons";

function Footer() {
  return (
    <Box
      direction="row"
      justify="center"
      align="center"
      gap="medium"
      pad="medium"
      background={{ color: "brand" }}
    >
      <Text>2019</Text>
      <Article />
      <Text>Made by Nguyen Quang Son</Text>
    </Box>
  );
}

export default Footer;
