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
import { Link } from "react-router-dom";
function Drawermenu() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = React.useState("right");
  return (
    <Box width={"95%"} m={"auto"}>
      <HamburgerIcon onClick={onOpen} cursor={"pointer"} />
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">
            Explore from Here!
          </DrawerHeader>
          <DrawerBody>
            <Link to="/products/Dresses">
              <p className={styles.ham}>New !</p>
            </Link>
            <Link to="/products/Dresses">
              <p className={styles.ham}>Dresses</p>
            </Link>
            <Link to="/products/Dresses">
              <p className={styles.ham}>Clothing</p>
            </Link>
            <Link to="/products/Shoes">
              <p className={styles.ham}>Shoes</p>
            </Link>
            <Link to="/products/Jewelry">
              <p className={styles.ham}>Accessories</p>
            </Link>
            <p className={styles.ham}>Wedding</p>
            <Link to="/products/Jewelry">
              <p className={styles.ham}>Buety</p>
            </Link>
            <Link to="/products/Dresses">
              <p className={styles.ham}>Gift & Candies</p>
            </Link>
            <Link to="/products/Shoes">
              <p className={styles.ham}>Garden & Outdoor</p>
            </Link>
            <Link to="/products/Shoes">
              <p className={styles.ham}>Sale</p>
            </Link>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

export default Drawermenu;
