import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { Link } from "react-router-dom";
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
          English <ChevronDownIcon fontSize={14} />
        </MenuButton>
        <MenuList>
          <MenuItem height={"30px"} fontSize={14}>
            Currency
          </MenuItem>
          <MenuItem textDecoration={"underline"} color="#319795" fontSize={14}>
            USD($)
          </MenuItem>
          <MenuItem height={"30px"} fontSize={14}>
            Language
          </MenuItem>
          <MenuItem>
            <Text
              textDecoration={"underline"}
              color="#319795"
              paddingRight={3}
              fontSize={14}
            >
              English
            </Text>
            <Text fontSize={14}>Freanch</Text>
          </MenuItem>
        </MenuList>
        <Box color="#319795">
          <span style={{ marginLeft: "10px" }}>
            <Link to={"/signin"}>
              <FontAwesomeIcon icon={faUser} fontSize={"18px"} /> Sign in
            </Link>{" "}
            / <Link to={"/signup"}>Sign Up</Link>
          </span>
        </Box>
      </Menu>
    </Flex>
  );
}

export default Dollor;
