import React from "react";
import { Box, Text, Heading } from "grommet";
import { Terminal } from "grommet-icons";

const SectionTitle = title => {
  return (
    <Box direction="row" gap="medium" align="start" pad={{vertical: "medium"}}>
      <Terminal size="large" />
      <Text size="36px">
        {title}
      </Text>
    </Box>
  );
};

export default SectionTitle;
