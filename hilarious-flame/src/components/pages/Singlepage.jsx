import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import axios from "axios";
import Carousler from "../chakra/Carousler";
import Dollor from "../chakra/Dollor";
import Header from "../chakra/Header";
import Navbar from "../chakra/Navbar";
import styles from "../style/Navbarcss.module.css";
import {
  Show,
  Hide,
  Center,
  Grid,
  GridItem,
  Image,
  Text,
  Flex,
  Box,
} from "@chakra-ui/react";
import Drawermenu from "../chakra/Drawermenu";
import Footer from "../chakra/Footer";
import Overlay from "../chakra/Overlay";

function Singlepage() {
  let current = useParams();
  let [data, setData] = useState({});
  let [five, setfive] = useState([]);
  let [quantity, setquantity] = useState(1);
  let location = useLocation();
  let addtocart = (val) => {
    let cart = JSON.parse(localStorage.getItem("Cart")) || [];
    cart.push({ ...val, quantity });
    localStorage.setItem("Cart", JSON.stringify(cart));
    setquantity(1);
  };
  useEffect(() => {
    axios
      .get(`https://bewildered-tick-costume.cyclic.app/allData/${current.id}`)
      .then((res) => {
        setData(res.data);
      });
    axios
      .get(`https://bewildered-tick-costume.cyclic.app/five${current.catogary}`)
      .then((res) => {
        setfive(res.data);
      });
  }, [location]);
  return (
    <>
      <Carousler />
      <Dollor />
      <Header />
      <Show below="md">
        <Drawermenu />
      </Show>
      <Hide below="md">
        <Navbar />
      </Hide>
      <Center color={"#26262c"} my={"30px"} fontSize={"15px"}>
        Clothing / {current.catogary}
      </Center>
      <Grid
        gridTemplateColumns={{ base: "repeat(1,1fr)", md: "12% 1fr 1fr" }}
        w={{ base: "100%", md: "95%" }}
        margin={"auto"}
        gap={6}
      >
        <GridItem padding={"10px"} display={{ base: "none", md: "block" }}>
          <Grid gap={6}>
            {five.map((e) => {
              return <Image src={e.url}></Image>;
            })}
          </Grid>
        </GridItem>
        <GridItem>
          <Image src={data.url}></Image>
        </GridItem>
        <GridItem>
          <Text className={styles.singletitle}>{data.title}</Text>
          <Text className={styles.singlebrand}>{data.brand}</Text>
          <Text>
            <span>★★★★★</span>
            <span className={styles.singlestars}>Write a Review</span>
          </Text>
          <Text className={styles.singleprice}>${data.price}</Text>
          <Text className={styles.singleintrest}>
            Or 4 interest-free installments of $54.50 with Klarna orAfterpay
          </Text>
          <Text color={"#26262c"} fontSize="15px">
            Online Exclusive
          </Text>
          <Text fontWeight={500}>Fit*</Text>
          <button className={styles.Fit}>Standard</button>
          <button className={styles.Fit} id={styles.one}>
            Petite
          </button>
          <Text fontWeight={500}>Size*</Text>
          <button className={styles.size}>XXS</button>
          <button className={styles.size}>XS</button>
          <button className={styles.size}>S</button>
          <button className={styles.size}>M</button>
          <button className={styles.size}>L</button>
          <Text className={styles.singlegleguide}>Size Guide</Text>
          <Text fontSize={"14px"} fontWeight={500}>
            Qty*
          </Text>
          <select
            className={styles.singleselect}
            onChange={(e) => setquantity(e.target.value)}
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
          <Box position={"absolute"} w={"300px"}>
            <button
              className={styles.singlebasket}
              onClick={() => addtocart(data)}
            >
              <Overlay
                position={"absolute"}
                left={"0px"}
                top={"40%"}
                text={`${data.title} has added`}
                bg={"#4b5666"}
              />
            </button>
          </Box>
          <Text position={"relative"}>
            <span className={styles.register}>Add To Registry</span>
            <span id={styles.right} className={styles.register}>
              Add to Wish List
            </span>
          </Text>
          <Text className={styles.singlebold}>Product Details</Text>
          <Text className={styles.subpara}>
            Style No. 80509094; Color Code: 054
          </Text>
          <li>Polyamide</li>
          <li>Detachable hood</li>
          <li>Front pockets</li>
          <li>Cinched waist</li>
          <li>Front zip</li>
          <li>Machine wash</li>
          <li>Imported</li>
          <Text className={styles.singlebold}>Dimensions</Text>
          <Text className={styles.subpara}>
            Standard falls 56" from shoulder Petite falls 52" from shoulder Plus
            falls 58.5" from shoulder
          </Text>
          <Text className={styles.singlebold}>{data.brand}</Text>
          <p className={styles.subpara}>
            The name "Maeve" references a purple flower, a Greek goddess, and a
            famously beautiful Irish warrior queen. In light of these
            inspirations, it's no surprise that their collection is structured
            yet delicate, a representation of beauty and strength at once. Each
            Maeve design is refined, flattering, and - best of all - exclusively
            ours.
          </p>
          <Text className={styles.singlebold}>Shipping Return</Text>
          <Text className={styles.singlebold}>Shipping</Text>
          <Text className={styles.subpara}>
            At checkout, we’ll provide you with an estimated delivery date for
            your order based on your shipping method. Standard shipping charges
            may apply based on the order value. AnthroPerks members enjoy free
            Standard Shipping on all orders $50+. Learn more about our shipping
            here.
          </Text>
          <Text className={styles.singlebold}>Returns</Text>
          <Text className={styles.subpara}>
            Within 30 days of purchase, we accept returns for unworn, unwashed,
            and unaltered items. Items must be returned in original packaging
            with all tags attached. A refund will be issued to the original form
            of payment at the original selling price. If returned after 30 days,
            a merchandise credit will be issued for the original selling price.
          </Text>
        </GridItem>
      </Grid>
      <Flex
        position={"relative"}
        borderBottom="1px solid #A0AEC0"
        paddingBottom={"10px"}
        marginTop="30px"
        w={"95%"}
        m="auto"
        my={"15px"}
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
      </Grid>
      <Footer />
    </>
  );
}

export default Singlepage;
