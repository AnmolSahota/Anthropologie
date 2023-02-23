import {
  Box,
  Flex,
  InputGroup,
  Input,
  InputRightElement,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import React from "react";

function Header() {
  return (
    <>
      <Grid
        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
        gap={6}
        w={{ base: "100%", md: "95%" }}
        m={"auto"}
        h="70px"
        border={"1px solid #E2E8F0"}
        alignItems={"center"}
      >
        <GridItem>
          <Flex alignItems="center">
            <Box marginRight={"5%"} marginLeft="4%">
              <img src="https://images.ctfassets.net/5de70he6op10/53ZOE4rRqrxcvv0hg2eSLV/a849085e5f600c618132be2475017746/anthro-logo.svg"></img>
            </Box>
            <Box>
              <img src="https://images.ctfassets.net/5de70he6op10/y1O9tEDOvCGliGUvT9RoJ/eb8ab4734c5e3778b8b61da70ed441ac/AL_NewLogo_2.svg"></img>{" "}
            </Box>
          </Flex>
        </GridItem>
        <GridItem h="10" display={{ base: "none", md: "block" }}>
          <Flex justifyContent={"flex-end"} marginRight="10px">
            <InputGroup width={"50%"} fontSize="1em">
              <Input placeholder="  Anthropologie" />
              <InputRightElement children={<SearchIcon color="green.500" />} />
            </InputGroup>
          </Flex>
        </GridItem>
      </Grid>
    </>
  );
}

export default Header;
