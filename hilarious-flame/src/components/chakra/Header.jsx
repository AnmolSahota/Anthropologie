import {
  Box,
  Flex,
  InputGroup,
  Input,
  InputRightElement,
  Grid,
  GridItem,
  Text,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons/faShoppingBag";
function Header() {
  return (
    <>
      <Grid
        templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(2, 1fr)" }}
        gap={6}
        w={{ base: "100%", md: "95%" }}
        m={"auto"}
        h="70px"
        border={"1px solid #E2E8F0"}
        alignItems={"center"}
        position="sticky"
        top={"1px"}
        zIndex={1}
        bg={"white"}
      >
        <GridItem>
          <Flex alignItems="center">
            <Box marginRight={"5%"} marginLeft="4%">
              <Link to="/">
                <img src="https://images.ctfassets.net/5de70he6op10/53ZOE4rRqrxcvv0hg2eSLV/a849085e5f600c618132be2475017746/anthro-logo.svg"></img>
              </Link>
            </Box>
            <Box>
              <Link to="/">
                <img src="https://images.ctfassets.net/5de70he6op10/y1O9tEDOvCGliGUvT9RoJ/eb8ab4734c5e3778b8b61da70ed441ac/AL_NewLogo_2.svg"></img>{" "}
              </Link>
            </Box>
          </Flex>
        </GridItem>
        <GridItem h="10" display={{ base: "none", md: "block" }}>
          <Flex justifyContent={"flex-end"} marginRight="10px">
            <InputGroup width={"50%"} fontSize="1em">
              <Input placeholder="  Anthropologie" />
              <InputRightElement children={<SearchIcon color="green.500" />} />
            </InputGroup>
            <Text marginLeft={"10px"} marginRight={"10px"} marginTop={"10px"}>
              <Link to="/cart">
                <FontAwesomeIcon icon={faShoppingBag} fontSize="18px" />
              </Link>
            </Text>
          </Flex>
        </GridItem>
        <GridItem
          display={{ base: "grid", md: "none" }}
          position={"absolute"}
          right={"10px"}
        >
          <Text marginLeft={"10px"} marginRight={"10px"} marginTop={"10px"}>
            <Link to="/cart">
              <FontAwesomeIcon icon={faShoppingBag} fontSize="18px" />
            </Link>
          </Text>
        </GridItem>
      </Grid>
    </>
  );
}

export default Header;
