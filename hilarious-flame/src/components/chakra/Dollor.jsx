import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
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
      <Box color="#319795">
        <span style={{ marginLeft: "10px" }}>
          <Link to={"/signin"}>
            <FontAwesomeIcon icon={faUser} fontSize={"18px"} /> Sign in
          </Link>{" "}
          / <Link to={"/signup"}>Sign Up</Link>
        </span>
      </Box>
    </Flex>
  );
}

export default Dollor;
