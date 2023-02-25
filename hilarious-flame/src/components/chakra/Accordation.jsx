import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Input,
} from "@chakra-ui/react";
import styles from "../style/Navbarcss.module.css";
function Accordation() {
  return (
    <>
      <Accordion allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Promo Code
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <input  className={styles.accorinput} ></input>
            <button className={styles.accorbtn} >Apply</button>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
}

export default Accordation;
