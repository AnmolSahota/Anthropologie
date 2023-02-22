import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
function Dollor() {
  return (
    <Flex
      justifyContent={"flex-end"}
      paddingRight={5}
      backgroundColor="#F7FAFC"
      height={"40px"}
      lineHeight="40px"
    >
      <Menu>
        <MenuButton marginRight={5}>
          English <ChevronDownIcon fontSize={20} />
        </MenuButton>
        <MenuList>
          <MenuItem  height={'30px'} >Currency</MenuItem>
          <MenuItem textDecoration={"underline"} color="#319795">
            USD($)
          </MenuItem>
          <MenuItem height={'30px'} >Language</MenuItem>
          <MenuItem>
            <Text textDecoration={"underline"} color="#319795" paddingRight={3}>
              English
            </Text>
            Freanch
          </MenuItem>
        </MenuList>
        <Box color="#319795">Sign in / Sign Up</Box>
      </Menu>
    </Flex>
  );
}

export default Dollor;
