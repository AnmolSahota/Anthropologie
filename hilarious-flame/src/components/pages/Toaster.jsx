import React from "react";
import { useToast, CloseButton } from "@chakra-ui/react";
function Toaster() {
  const toast = useToast();
  return (
    <button
      onClick={() =>
        toast({
          description: "Product has deleted from Cart .",
          status: "success",
          duration: 9000,
          isClosable: true,
        })
      }
    >
      <CloseButton />
    </button>
  );
}

export default Toaster;
