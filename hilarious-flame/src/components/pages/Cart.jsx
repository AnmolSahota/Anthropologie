import React from "react";
import { Show, Hide, Box } from "@chakra-ui/react";
import FooteWedding from "../chakra/FooteWedding";
function Cart() {
  return (
    <>
      <Show above="sm">
        <Box>This text appears at the "sm" value screen width or greater.</Box>
      </Show>
      <Hide below="md">
        <Box>This text hides at the "md" value screen width and smaller.</Box>
        <FooteWedding />
      </Hide>
    </>
  );
}

export default Cart;
