import React from "react";
import styles from "../style/Navbarcss.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons/faShoppingBag";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Text,
} from "@chakra-ui/react";
function Overlay({ text, position, top, bottom, left, bg }) {
  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = React.useState(<OverlayOne />);

  return (
    <>
      <Button
        className={styles.cartbtn}
        position={position}
        top={top}
        bottom={bottom}
        left={left}
        w={"100%"}
        borderRadius={"0px"}
        bg={bg}
        _hover={{
          background: "white",
          color: "teal.500",
          border:'1px solid '
        }}
        onClick={() => {
          setOverlay(<OverlayOne />);
          onOpen();
        }}
      >
        <Text display={{ base: "none", md: "block" }}>Add To Cart</Text>
        <Text display={{ base: "block", md: "none" }}>
          <FontAwesomeIcon icon={faShoppingBag} fontSize="18px" />
        </Text>
      </Button>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent>
          <ModalHeader>Congrulations ! </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>{text}</Text>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Overlay;
