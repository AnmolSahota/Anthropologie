import React from "react";
import { useToast, CloseButton, Button } from "@chakra-ui/react";
import styles from "../style/Navbarcss.module.css";

function Buttontoaster({ title }) {
  const toast = useToast();
  return (
    <Button
      className={styles.Fit}
      borderRadius="0px"
      bg="#f7f6f2"
      mt={"10px"}
      color={"#26262c"}
      onClick={() =>
        toast({
          description: "Selected",
          status: "success",
          duration: 9000,
          isClosable: true,
        })
      }
    >
      {title}
    </Button>
  );
}

export default Buttontoaster;
