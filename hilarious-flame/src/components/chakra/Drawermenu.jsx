import React from "react";
import styles from "../style/Navbarcss.module.css";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  Button,
  Box,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
function Drawermenu() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = React.useState("right");
  return (
    <Box width={"95%"} m={"auto"}>
      <HamburgerIcon onClick={onOpen} cursor={"pointer"} />
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Explore from Here!</DrawerHeader>
          <DrawerBody>
            <p className={styles.ham} >New !</p>
            <p className={styles.ham}>Dresses</p>
            <p className={styles.ham}>Clothing</p>
            <p className={styles.ham}>Shoes</p>
            <p className={styles.ham}>Accessories</p>
            <p className={styles.ham}>Wedding</p>
            <p className={styles.ham}>Buety</p>
            <p className={styles.ham}>Gift & Candies</p>
            <p className={styles.ham}>Garden & Outdoor</p>
            <p className={styles.ham}>Sale</p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

export default Drawermenu;
