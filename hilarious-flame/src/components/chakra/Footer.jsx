import React from "react";
import {
  Box,
  Center,
  Grid,
  GridItem,
  Text,
  Input,
  Flex,
} from "@chakra-ui/react";
import { useState } from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";

function Footer() {
  let [help, setHelp] = useState(true);
  let [about, setAbout] = useState(true);
  let [service, setService] = useState(true);
  let [connect, setConnect] = useState(true);
  let handlehelp = () => {
    setHelp(!help);
  };
  let handleabout = () => {
    setAbout(!about);
  };
  let handleservice = () => {
    setService(!service);
  };
  let handleconnect = () => {
    setConnect(!connect);
  };
  return (
    <>
      <Box
        paddingTop={"30px"}
        paddingBottom="30px"
        paddingLeft={{ base: "15px", md: "0px" }}
      >
        <Box w={{ base: "100%", md: "95%" }} margin="auto" fontWeight={"bold"}>
          About Us
        </Box>
        <Text
          w={{ base: "100%", md: "95%" }}
          margin="auto"
          color={"RGBA(38, 38, 44, 1)"}
          fontSize="14px"
        >
          Our mission at Anthropologie has always been to surprise and delight
          you with unexpected, distinctive finds for your closet and home. We
          source and craft all of our just like you. Explore our dresses shop to
          find styles and fits perfect for any occasion, from cocktail party
          dresses to wedding...
        </Text>
        <Text
          w={{ base: "100%", md: "95%" }}
          margin="auto"
          textDecoration={"underline"}
          color="#167A92"
          cursor={"pointer"}
        >
          Read More
        </Text>
      </Box>
      <Box
        w={{ base: "100%", md: "100%" }}
        margin="auto"
        paddingLeft={{ base: "15px", md: "3%" }}
        paddingRight={{ base: "15px", md: "3%" }}
        bg="#FAFAFA"
        border={"1px solid #A0AEC0"}
        paddingTop="20px"
        paddingBottom={"20px"}
      >
        <Text fontWeight={"bold"}>Sign Up for Email</Text>
        <Grid
          templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
          gap={6}
        >
          <GridItem>
            <Text color={"RGBA(38, 38, 44, 1)"} fontSize="14px">
              Receive early access to new arrivals, sales, exclusive content,
              events and much more!
            </Text>
          </GridItem>
          <GridItem>
            <Text fontWeight={500}>Enter Email*</Text>
            <Flex>
              <Input placeholder="" />
              <Button bg="#4B5666" color={"white"} borderRadius="0px">
                SUBMIT
              </Button>
            </Flex>
          </GridItem>
        </Grid>
        <Text color={"RGBA(38, 38, 44, 1)"} fontSize="14px">
          By signing up, you will receive Anthropologie offers, promotions and
          other commercial messages. You are also agreeing to Anthropologie’s
          unsubscribe at any time.
          <Text textDecoration={"underline"} color="#167A92">
            Privacy Policy
          </Text>
        </Text>
      </Box>
      <Box
        w={{ base: "100%", md: "100%" }}
        margin="auto"
        bg="#FAFAFA"
        paddingTop={"10px"}
      >
        <Grid
          templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(5, 1fr)" }}
          gap={{ base: 3, md: 6 }}
          w={{ base: "100%", md: "90%" }}
          margin={"auto"}
          textAlign={"left"}
          marginBottom="30px"
        >
          <GridItem w="100%">
            <Box
              fontWeight={600}
              border={{ base: "1px solid #E2E8F0", md: "none" }}
              h={"40px"}
              lineHeight="40px"
              paddingLeft={{ base: "10px", md: "0px" }}
              onClick={handlehelp}
            >
              Help
            </Box>
            <Box display={{ base: help ? "none" : "block", md: "block" }}>
              <Box
                paddingLeft={{ base: "10px", md: "0px" }}
                h={{ base: "40px", md: "auto" }}
                lineHeight={{ base: "40px", md: "auto" }}
                borderBottom={{ base: "1px solid #E2E8F0", md: "none" }}
              >
                Track Your Order
              </Box>
              <Box
                paddingLeft={{ base: "10px", md: "0px" }}
                h={{ base: "40px", md: "auto" }}
                lineHeight={{ base: "40px", md: "auto" }}
                borderBottom={{ base: "1px solid #E2E8F0", md: "none" }}
              >
                Returns & Exchanges
              </Box>
              <Box
                paddingLeft={{ base: "10px", md: "0px" }}
                h={{ base: "40px", md: "auto" }}
                lineHeight={{ base: "40px", md: "auto" }}
                borderBottom={{ base: "1px solid #E2E8F0", md: "none" }}
              >
                Shipping
              </Box>
              <Box
                paddingLeft={{ base: "10px", md: "0px" }}
                h={{ base: "40px", md: "auto" }}
                lineHeight={{ base: "40px", md: "auto" }}
                borderBottom={{ base: "1px solid #E2E8F0", md: "none" }}
              >
                Customer Service
              </Box>
              <Box
                paddingLeft={{ base: "10px", md: "0px" }}
                h={{ base: "40px", md: "auto" }}
                lineHeight={{ base: "40px", md: "auto" }}
                borderBottom={{ base: "1px solid #E2E8F0", md: "none" }}
              >
                Current Promotions
              </Box>
              <Box
                paddingLeft={{ base: "10px", md: "0px" }}
                h={{ base: "40px", md: "auto" }}
                lineHeight={{ base: "40px", md: "auto" }}
                borderBottom={{ base: "1px solid #E2E8F0", md: "none" }}
              >
                Product Recalls
              </Box>
            </Box>
          </GridItem>
          <GridItem w="100%">
            <Box
              fontWeight={600}
              border={{ base: "1px solid #E2E8F0", md: "none" }}
              h={"40px"}
              lineHeight="40px"
              paddingLeft={{ base: "10px", md: "0px" }}
              onClick={handleabout}
            >
              About Us
            </Box>
            <Box display={{ base: about ? "none" : "block", md: "block" }}>
              <Box
                paddingLeft={{ base: "10px", md: "0px" }}
                h={{ base: "40px", md: "auto" }}
                lineHeight={{ base: "40px", md: "auto" }}
                borderBottom={{ base: "1px solid #E2E8F0", md: "none" }}
              >
                Our Story
              </Box>
              <Box
                paddingLeft={{ base: "10px", md: "0px" }}
                h={{ base: "40px", md: "auto" }}
                lineHeight={{ base: "40px", md: "auto" }}
                borderBottom={{ base: "1px solid #E2E8F0", md: "none" }}
              >
                Events
              </Box>
              <Box
                paddingLeft={{ base: "10px", md: "0px" }}
                h={{ base: "40px", md: "auto" }}
                lineHeight={{ base: "40px", md: "auto" }}
                borderBottom={{ base: "1px solid #E2E8F0", md: "none" }}
              >
                A Greater Good
              </Box>
              <Box
                paddingLeft={{ base: "10px", md: "0px" }}
                h={{ base: "40px", md: "auto" }}
                lineHeight={{ base: "40px", md: "auto" }}
                borderBottom={{ base: "1px solid #E2E8F0", md: "none" }}
              >
                Diversity & Inclusion
              </Box>
              <Box
                paddingLeft={{ base: "10px", md: "0px" }}
                h={{ base: "40px", md: "auto" }}
                lineHeight={{ base: "40px", md: "auto" }}
                borderBottom={{ base: "1px solid #E2E8F0", md: "none" }}
              >
                Stories
              </Box>
            </Box>
          </GridItem>
          <GridItem w="100%">
            <Box
              fontWeight={600}
              border={{ base: "1px solid #E2E8F0", md: "none" }}
              h={"40px"}
              paddingLeft={{ base: "10px", md: "0px" }}
              lineHeight="40px"
              onClick={handleservice}
            >
              Services
            </Box>
            <Box display={{ base: service ? "none" : "block", md: "block" }}>
              <Box
                paddingLeft={{ base: "10px", md: "0px" }}
                h={{ base: "40px", md: "auto" }}
                lineHeight={{ base: "40px", md: "auto" }}
                borderBottom={{ base: "1px solid #E2E8F0", md: "none" }}
              >
                AnthroPerks
              </Box>
              <Box
                paddingLeft={{ base: "10px", md: "0px" }}
                h={{ base: "40px", md: "auto" }}
                lineHeight={{ base: "40px", md: "auto" }}
                borderBottom={{ base: "1px solid #E2E8F0", md: "none" }}
              >
                Gift Cards
              </Box>
              <Box
                paddingLeft={{ base: "10px", md: "0px" }}
                h={{ base: "40px", md: "auto" }}
                lineHeight={{ base: "40px", md: "auto" }}
                borderBottom={{ base: "1px solid #E2E8F0", md: "none" }}
              >
                AnthroLiving Designer & Trade Program
              </Box>
              <Box
                paddingLeft={{ base: "10px", md: "0px" }}
                h={{ base: "40px", md: "auto" }}
                lineHeight={{ base: "40px", md: "auto" }}
                borderBottom={{ base: "1px solid #E2E8F0", md: "none" }}
              >
                Furniture: Guides & Services
              </Box>
              <Box
                paddingLeft={{ base: "10px", md: "0px" }}
                h={{ base: "40px", md: "auto" }}
                lineHeight={{ base: "40px", md: "auto" }}
                borderBottom={{ base: "1px solid #E2E8F0", md: "none" }}
              >
                Store Pickup & Collection Points
              </Box>
              <Box
                paddingLeft={{ base: "10px", md: "0px" }}
                h={{ base: "40px", md: "auto" }}
                lineHeight={{ base: "40px", md: "auto" }}
                borderBottom={{ base: "1px solid #E2E8F0", md: "none" }}
              >
                Klarna
              </Box>
            </Box>
          </GridItem>
          <GridItem w="100%">
            <Box
              fontWeight={600}
              border={{ base: "1px solid #E2E8F0", md: "none" }}
              h={"40px"}
              lineHeight="40px"
              paddingLeft={{ base: "10px", md: "0px" }}
              onClick={handleconnect}
            >
              Connect
            </Box>
            <Box display={{ base: connect ? "none" : "block", md: "block" }}>
              <Box
                paddingLeft={{ base: "10px", md: "0px" }}
                h={{ base: "40px", md: "auto" }}
                lineHeight={{ base: "40px", md: "auto" }}
                borderBottom={{ base: "1px solid #E2E8F0", md: "none" }}
              >
                Contact Us
              </Box>
              <Box
                paddingLeft={{ base: "10px", md: "0px" }}
                h={{ base: "40px", md: "auto" }}
                lineHeight={{ base: "40px", md: "auto" }}
                borderBottom={{ base: "1px solid #E2E8F0", md: "none" }}
              >
                Stay Connected
              </Box>
              <Box
                paddingLeft={{ base: "10px", md: "0px" }}
                h={{ base: "40px", md: "auto" }}
                lineHeight={{ base: "40px", md: "auto" }}
                borderBottom={{ base: "1px solid #E2E8F0", md: "none" }}
              >
                Careers
              </Box>
              <Box
                paddingLeft={{ base: "10px", md: "0px" }}
                h={{ base: "40px", md: "auto" }}
                lineHeight={{ base: "40px", md: "auto" }}
                borderBottom={{ base: "1px solid #E2E8F0", md: "none" }}
              >
                Styling Services
              </Box>
              <Box
                paddingLeft={{ base: "10px", md: "0px" }}
                h={{ base: "40px", md: "auto" }}
                lineHeight={{ base: "40px", md: "auto" }}
                borderBottom={{ base: "1px solid #E2E8F0", md: "none" }}
              >
                Request A Catalog
              </Box>
            </Box>
          </GridItem>
          <GridItem w="100%" h="10" paddingLeft={{ base: "15px", md: "0px" }}>
            <Text color={"#319795"}>Store Locator</Text>
            <Text color={"#319795"}>Get Email</Text>
          </GridItem>
        </Grid>
        <img src="https://images.ctfassets.net/5de70he6op10/2DRgCRXNIEkk0wIqUo2ywa/103ccf34ec8f615dab367fa63ac9c326/467884464-jan2023_sitefootbanners_update_downloadtheapp_ls.jpg"></img>
        <Center marginTop={"50px"} marginBottom="20px">
          <Text
            paddingLeft={"8px"}
            paddingRight="8px"
            borderRight={"1px solid #E2E8F0"}
          >
            US
          </Text>
          <Text
            paddingLeft={"8px"}
            paddingRight="8px"
            borderRight={"1px solid #E2E8F0"}
          >
            France
          </Text>
          <Text
            paddingLeft={"8px"}
            paddingRight="8px"
            borderRight={"1px solid #E2E8F0"}
          >
            Germany
          </Text>
          <Text
            paddingLeft={"8px"}
            paddingRight="8px"
            borderRight={"1px solid #E2E8F0"}
          >
            Italy
          </Text>
          <Text
            paddingLeft={"8px"}
            paddingRight="8px"
            borderRight={"1px solid #E2E8F0"}
          >
            Spain
          </Text>
          <Text paddingLeft={"8px"} paddingRight="8px">
            UK
          </Text>
        </Center>
      </Box>
    </>
  );
}

export default Footer;
