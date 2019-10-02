import React from "react";
import { Box, Text, Anchor } from "grommet";
import { Article, Facebook, Github } from "grommet-icons";

function Footer() {
  return (
    <Box background={{ color: "brand" }} pad="small">
      <Box
        direction="row"
        justify="center"
        align="center"
        gap="medium"
      >
        <Anchor icon={<Facebook />} href="https://www.facebook.com/quangson.nguyen.399" target="_blank" color="#fff" />
        <Anchor icon={<Github />} href="https://github.com/KuaqSon" target="_blank" color="#fff" />
      </Box>
      <Box
        direction="row"
        justify="center"
        align="center"
        gap="medium"
        pad="small"
      >
        <Text>2019</Text>
        <Article />
        <Text>Made by Nguyen Quang Son</Text>
      </Box>
    </Box>
  );
}

export default Footer;
