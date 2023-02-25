import React from "react";
import styles from "../style/Navbarcss.module.css";
import {
  Grid,
  GridItem,
  Image,
  Box,
  Button,
  Divider,
  Text,
  Flex,
  Hide,
} from "@chakra-ui/react";
import Lastthree from "./Lastthree";
import { Link } from "react-router-dom";
function Four() {
  return (
    <Box w={"95%"} m="auto">
      <Grid
        gridTemplateColumns={{ base: "repeat(2,1fr)", md: "repeat(4,1fr)" }}
        gap={4}
        h={"70px"}
        alignItems="center"
      >
        <GridItem>
          <Image src="https://images.ctfassets.net/5de70he6op10/12Fav7kMsNCFfp6IlqCoHg/ea5ea1b9ecc44d58249cd482bc3a580d/473929275-ls_m0_banner_f.jpg?w=630&q=80&fm=webp" />
        </GridItem>
        <GridItem>
          <Image src="https://images.ctfassets.net/5de70he6op10/5AHOqJRlFibi2rOS0C77aP/3e8dc2dfc62dd089f2cb2e53357a78d3/473929274-ls_m0_banner_e.jpg?w=630&q=80&fm=webp" />{" "}
        </GridItem>
        <GridItem display={{ base: "none", md: "grid" }}>
          <Image src="https://images.ctfassets.net/5de70he6op10/5KjWlD2oXag0PlTbafqAWL/2a4e32e4cfc0b818e4cda11687d1498b/473929283-ls_m0_banner_h.jpg?w=630&q=80&fm=webp" />
        </GridItem>
        <GridItem display={{ base: "none", md: "grid" }}>
          <Image src="https://images.ctfassets.net/5de70he6op10/5KjWlD2oXag0PlTbafqAWL/2a4e32e4cfc0b818e4cda11687d1498b/473929283-ls_m0_banner_h.jpg?w=630&q=80&fm=webp" />
        </GridItem>
      </Grid>
      <Box position={"relative"}>
        <Image src="https://images.ctfassets.net/5de70he6op10/3eri4S7CUYNA223W694QUo/890cffce3e1cc21308f3051be0a76baa/473929293-ls_m1.jpg?w=2694&q=80&fm=webp"></Image>
        <Button
          variant="link"
          position={"absolute"}
          bottom="20px"
          left={{ base: "40%", md: "50%" }}
          className={styles.btn}
          height={"40px"}
          borderRadius={"0%"}
          fontWeight={400}
          fontSize="13px"
        >
          Shop Address
        </Button>
      </Box>
      <Grid
        gridTemplateColumns={{ base: "repeat(1,1fr)", md: "repeat(3,1fr)" }}
        gap={6}
        marginTop={"35px"}
      >
        <GridItem position={"relative"}>
          <Image src="https://images.ctfassets.net/5de70he6op10/24XjZK35JsGCP4fmCO8580/6d8469a59dd0fea277acaa832dac4786/473929297-ls_m2a.jpg?w=856&q=80&fm=webp" />
          <Button
            variant="link"
            position={"absolute"}
            bottom="20px"
            left={{ base: "40%", md: "40%" }}
            className={styles.btn}
            height={"40px"}
            borderRadius={"0%"}
            fontWeight={400}
            fontSize="13px"
          >
            Shop new Clothing
          </Button>
        </GridItem>
        <GridItem position={"relative"}>
          <Image src="https://images.ctfassets.net/5de70he6op10/3i7R768ERr5ciI56znod56/151bbbbe9b52ff4c5fca01f76720fcbe/473929303-ls_m2b.jpg?w=856&q=80&fm=webp" />
          <Button
            variant="link"
            position={"absolute"}
            bottom="20px"
            left={{ base: "40%", md: "40%" }}
            className={styles.btn}
            height={"40px"}
            borderRadius={"0%"}
            fontWeight={400}
            fontSize="13px"
          >
            The Gateway Shop
          </Button>
        </GridItem>
        <GridItem position={"relative"}>
          <Image src="https://images.ctfassets.net/5de70he6op10/EO7OfU3ZWf8n7njPYNrCo/097740c34d53fbad8d6bbae669514b4a/473929312-ls_m2c.jpg?w=856&q=80&fm=webp" />
          <Button
            variant="link"
            position={"absolute"}
            bottom="20px"
            left={{ base: "40%", md: "40%" }}
            className={styles.btn}
            height={"40px"}
            borderRadius={"0%"}
            fontWeight={400}
            fontSize="13px"
          >
            Shop Swimmer
          </Button>
        </GridItem>
      </Grid>
      <Grid
        gridTemplateColumns={{ base: "repeat(1,1fr)", md: "repeat(2,1fr)" }}
        gap={6}
        marginTop={"35px"}
      >
        <GridItem position={"relative"}>
          <Image src="https://images.ctfassets.net/5de70he6op10/5SpSw7RKfexkiiBBqnTSz0/020ab583c49d60f3053868bbaf0ed2e8/473929316-ls_m3a.jpg?w=1302&q=80&fm=webp" />
          <Button
            variant="link"
            position={"absolute"}
            bottom="20px"
            left={{ base: "40%", md: "40%" }}
            className={styles.btn}
            height={"40px"}
            borderRadius={"0%"}
            fontWeight={400}
            fontSize="13px"
          >
            Shop Kitchen & Dining
          </Button>
        </GridItem>
        <GridItem position={"relative"}>
          <Image src="https://images.ctfassets.net/5de70he6op10/6VLdLozl8tBTMYC7Bjy39f/29875f9e1e26ad89cd2a502f70dc9eba/473929321-ls_m3b.jpg?w=1302&q=80&fm=webp" />
          <Button
            variant="link"
            position={"absolute"}
            bottom="20px"
            left={{ base: "40%", md: "40%" }}
            className={styles.btn}
            height={"40px"}
            borderRadius={"0%"}
            fontWeight={400}
            fontSize="13px"
          >
            Shop Furniture
          </Button>
        </GridItem>
      </Grid>
      <Grid
        gridTemplateColumns={{ base: "repeat(1,1fr)", md: "repeat(3,1fr)" }}
        gap={6}
        marginTop={"35px"}
      >
        <GridItem position={"relative"}>
          <Image src="https://images.ctfassets.net/5de70he6op10/wH3s9ULThzua1X1ZTzDMx/3a9607dc9e8636eb96ca159919afa542/473929336-ls_m4a.jpg?w=856&q=80&fm=webp" />
          <Button
            variant="link"
            position={"absolute"}
            bottom="20px"
            left={{ base: "40%", md: "40%" }}
            className={styles.btn}
            height={"40px"}
            borderRadius={"0%"}
            fontWeight={400}
            fontSize="13px"
          >
            Shop new Clothing
          </Button>
        </GridItem>
        <GridItem position={"relative"}>
          <Image src="https://images.ctfassets.net/5de70he6op10/2ABHGD0yJQ3NHq6iiJWTUw/194b56bf722572e79d65a9ed6293bb46/473929340-ls_m4b.jpg?w=856&q=80&fm=webp" />
          <Button
            variant="link"
            position={"absolute"}
            bottom="20px"
            left={{ base: "40%", md: "40%" }}
            className={styles.btn}
            height={"40px"}
            borderRadius={"0%"}
            fontWeight={400}
            fontSize="13px"
          >
            The Gateway Shop
          </Button>
        </GridItem>
        <GridItem position={"relative"}>
          <Image src="https://images.ctfassets.net/5de70he6op10/7yrEmAMeP6Kx7XthafpP8b/cb1869eb48809f1b667c1b1262cc8085/473929343-ls_m4c.jpg?w=856&q=80&fm=webp" />
          <Button
            variant="link"
            position={"absolute"}
            bottom="20px"
            left={{ base: "40%", md: "40%" }}
            className={styles.btn}
            height={"40px"}
            borderRadius={"0%"}
            fontWeight={400}
            fontSize="13px"
          >
            Shop Swimmer
          </Button>
        </GridItem>
      </Grid>
      <Divider />
      <Flex
        position={"relative"}
        my={"15px"}
        borderBottom="1px solid #A0AEC0"
        paddingBottom={"10px"}
        marginTop="30px"
      >
        <Text fontSize={"18px"} color="#26262C" fontWeight={600}>
          Top Rated Pics
        </Text>
        <Text
          fontSize={"14px"}
          position={"absolute"}
          right={"1px"}
          textDecoration="underline"
          color="#167A92"
        >
          <Link to="/products/Dresses">Show All</Link>
        </Text>
      </Flex>
      <Grid
        gridTemplateColumns={{ base: "repeat(2,1fr)", md: "repeat(4,1fr)" }}
        gap={6}
        w={"95%"}
        m="auto"
        mt="25px"
      >
        <GridItem>
          <Link to={"/product/Dresses/139"}>
            <Box>
              <Image src="https://images.ctfassets.net/5de70he6op10/1h9gkbrJB6rfKMEsrQsrlE/75fdaefe631d2d0e38d24b5e5d68ec10/473929238-ls_customerfave_a.jpg?w=630&q=80&fm=webp" />
            </Box>
            <Text my={"10px"}>CUSTOMER FAVORITE</Text>
            <Text fontWeight={700}>The Marais Chiffon Maxi Dress</Text>
            <Text>★★★★★</Text>
            <Text fontSize={"14px"} mt="10px">
              Love - I have this in three colors. Why? Because you can throw it
              on, and the fit is seamless, it’s comfy it’s breezy.
            </Text>
            <Text fontSize={"14px"} textDecoration="underline" color="#167A92">
              shop now
            </Text>
          </Link>
        </GridItem>
        <GridItem>
          <Link to={"/product/Dresses/140"}>
            <Box>
              <Image src="https://images.ctfassets.net/5de70he6op10/2bvup8dYlhV23fJF8JWtBi/f007eb7c84134bfe87c3dd3669ffd06f/473929242-ls_customerfave_b.jpg?w=630&q=80&fm=webp" />
            </Box>
            <Text my={"10px"}>CUSTOMER FAVORITE</Text>
            <Text fontWeight={700}>The Super Mini Slouchy Bag</Text>
            <Text>★★★★★</Text>
            <Text fontSize={"14px"} mt="10px">
              Super cute, perfect little crossbody. Holds your phone, money,
              lipstick and keys.
            </Text>
            <Text fontSize={"14px"} textDecoration="underline" color="#167A92">
              shop now
            </Text>
          </Link>
        </GridItem>
        <GridItem>
          <Link to={"/product/Dresses/141"}>
            <Box>
              <Image src="https://images.ctfassets.net/5de70he6op10/7e6CTKkxyvEGN65qcfAD6e/833ca12cd46657912e24e81a42fc086a/473929246-ls_customerfave_c.jpg?w=630&q=80&fm=webp" />
            </Box>
            <Text my={"10px"}>CUSTOMER FAVORITE</Text>
            <Text fontWeight={700}>The Bennet Buttondown Shirt</Text>
            <Text>★★★★★</Text>
            <Text fontSize={"14px"} mt="10px">
              Oversized in the best way...it's a perfect cotton shirt.
            </Text>
            <Text fontSize={"14px"} textDecoration="underline" color="#167A92">
              shop now
            </Text>
          </Link>
        </GridItem>
        <GridItem>
          <Link to={"/product/Dresses/142"}>
            <Box>
              <Image src="https://images.ctfassets.net/5de70he6op10/IRIRM5boIBRZTPtM9RGo2/d5a954acdea330f877f48ee00b9dd9e7/473929254-ls_customerfave_d.jpg?w=630&q=80&fm=webp" />
            </Box>
            <Box my={"10px"}>CUSTOMER FAVORITE</Box>
            <Text fontWeight={700}>The Colette Wide-Leg Pants</Text>
            <Text>★★★★★</Text>
            <Text fontSize={"14px"} mt="10px">
              I LOVE THESE PANTS! They feel good on, whether I'm standing,
              sitting, or walking. Overall 10/10 would recommend!
            </Text>
            <Text fontSize={"14px"} textDecoration="underline" color="#167A92">
              shop now
            </Text>
          </Link>
        </GridItem>
      </Grid>{" "}
      <Text
        fontSize={"18px"}
        color="#26262C"
        fontWeight={600}
        my={"15px"}
        borderBottom="1px solid #A0AEC0"
        paddingBottom={"10px"}
        marginTop="30px"
      >
        You may also like this
      </Text>
      <Lastthree />
    </Box>
  );
}

export default Four;
