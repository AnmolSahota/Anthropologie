import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
function Carousler() {
  let [first, setFirst] = useState(true);
  let obj = {
    first: "FROCKS FULL OF SUNSHINE ",
    firstmiddle: "these spring favorites had us at yellow ",
    firstlast: "shop the new collection",
    second: "our latest edit has moves",
    secondmiddle: "Lets Get Physical",
    secondlast: "shop new activewear",
  };
  let handlefirst = () => {
    setFirst(!first);
  };
  return (
    <>
      {first ? (
        <Flex
          bg="#A26A02"
          height={{ base: "70px", md: "40px" }}
          justifyContent="Center"
          alignItems="center"
          position={"relative"}
          flexDirection={{ base: "column", md: "row" }}
        >
          <ChevronLeftIcon
            color={"white"}
            fontSize={40}
            position={"absolute"}
            left={{ base: 0, md: 3 }}
            onClick={handlefirst}
            cursor={"pointer"}
          />
          <ChevronRightIcon
            color={"white"}
            fontSize={40}
            position={"absolute"}
            right={{ base: 0, md: 3 }}
            onClick={handlefirst}
            cursor={"pointer"}
          />
          <Box
            pr="30"
            fontWeight="400"
            color="#fff"
            fontSize={12}
            letterSpacing={1}
          >
            {obj.first}
          </Box>
          <Box
            pr="30"
            fontWeight="200"
            color="#fff"
            fontSize={14}
            letterSpacing={1}
          >
            {obj.firstmiddle}
          </Box>
          <Box
            pr="30"
            fontWeight="200"
            color="#fff"
            textDecoration="underline"
            fontSize={14}
            letterSpacing={1}
          >
            {obj.firstlast}
          </Box>
        </Flex>
      ) : (
        <Flex
          bg="#668f6e"
          height={{ base: "70px", md: "40px" }}
          justifyContent="Center"
          alignItems="center"
          flexDirection={{ base: "column", md: "row" }}
          position={"relative"}
        >
          <ChevronLeftIcon
            color={"white"}
            fontSize={40}
            position={"absolute"}
            left={{ base: 0, md: 3 }}
            onClick={handlefirst}
            cursor={"pointer"}
          />
          <ChevronRightIcon
            color={"white"}
            fontSize={40}
            position={"absolute"}
            right={{ base: 0, md: 3 }}
            onClick={handlefirst}
            cursor={"pointer"}
          />
          <Box
            pr="30"
            fontWeight="400"
            color="#fff"
            fontSize={14}
            letterSpacing={1}
          >
            {obj.second}
          </Box>
          <Box
            pr="30"
            fontWeight="200"
            color="#fff"
            fontSize={12}
            letterSpacing={1}
          >
            {obj.secondmiddle}
          </Box>
          <Box
            pr="30"
            fontWeight="200"
            color="#fff"
            textDecoration="underline"
            fontSize={14}
            letterSpacing={1}
          >
            {obj.secondlast}
          </Box>
        </Flex>
      )}
    </>
  );
}

export default Carousler;
