import React from "react";
import { Anchor, Box, Text, ResponsiveContext, Menu } from "grommet";
import {
  ContactInfo,
  Code,
  Channel,
  DocumentUser,
  FormDown
} from "grommet-icons";

const CollapsedNav = () => (
  <Box
    direction="row"
    justify="center"
    pad={{ vertical: "medium", horizontal: "medium" }}
  >
    <Menu
      plain
      justifyContent="center"
      dropProps={{ align: { top: "bottom" } }}
      items={[
        {
          label: (
            <Box alignSelf="center" pad={{ right: "32px" }}>
              About me
            </Box>
          ),
          onClick: () => console.log("About me"),
          icon: (
            <Box pad={{ vertical: "16px", left: "32px", right: "16px" }}>
              <DocumentUser size="medium" />
            </Box>
          )
        },
        {
          label: (
            <Box alignSelf="center" pad={{ right: "32px" }}>
              Projects
            </Box>
          ),
          onClick: () => console.log("project"),
          icon: (
            <Box pad={{ vertical: "16px", left: "32px", right: "16px" }}>
              <Code size="medium" />
            </Box>
          )
        },
        {
          label: (
            <Box alignSelf="center" pad={{ right: "32px" }}>
              Contact
            </Box>
          ),
          onClick: () => console.log("contact"),
          icon: (
            <Box pad={{ vertical: "16px", left: "32px", right: "16px" }}>
              <ContactInfo size="medium" />
            </Box>
          )
        }
      ]}
    >
      <Box direction="row" gap="small" pad="medium" align="center">
        <Channel color="brand" size="large" />
        <Text weight="bold" size="large">
          Son Nguyen
        </Text>
        <FormDown />
      </Box>
    </Menu>
  </Box>
);

const ExpandedNav = () => (
  <Box
    direction="row"
    justify="between"
    alignSelf="center"
    align="center"
    gap="medium"
    pad={{ vertical: "medium", horizontal: "medium" }}
  >
    <Box direction="row" gap="small" align="center">
      <Channel color="brand" size="large" />
      <Text weight="bold" size="large">
        Son Nguyen
      </Text>
    </Box>

    <Box direction="row" gap="medium" justify="center">
      <Anchor
        a11yTitle="About"
        href="#about"
        label="About me"
        icon={<DocumentUser color="brand" size="medium" />}
      />
      <Anchor
        a11yTitle="Projects by me"
        href="#projects"
        label="Projects"
        icon={<Code color="brand" size="medium" />}
      />
      <Anchor
        a11yTitle="Contact me"
        href="#contact"
        label="Contact"
        icon={<ContactInfo color="brand" size="medium" />}
      />
    </Box>
  </Box>
);

function Header() {
  return (
    <ResponsiveContext.Consumer>
      {size => (
        <div>
          {size !== "xsmall" && size !== "small" && <ExpandedNav />}
          {(size === "xsmall" || size === "small") && <CollapsedNav />}
        </div>
      )}
    </ResponsiveContext.Consumer>
  );
}

export default Header;
