import { Box, Grid, GridItem, Hide, Image, Text } from "@chakra-ui/react";
import { ChevronUpIcon, ChevronDownIcon, UpDownIcon } from "@chakra-ui/icons";
import { useState } from "react";
import styles from "../style/Navbarcss.module.css";
import FooterCloth from "./FooterCloth";
import FooterDress from "./FooterDress";
import Footernew from "./Footernew";
import Footershoes from "./Footershoes";
import FooterAcces from "./FooterAcces";
import FooteWedding from "./FooteWedding";
import FooterBuety from "./FooterBuety";
import Footergift from "./Footergift";
import FooterGarden from "./FooterGarden";
export default function Navbar() {
  let [shop, setShop] = useState(true);
  let handleshop = () => {
    setShop(false);
  };
  let shophandle = () => {
    setShop(true);
  };
  let [dress, setDress] = useState(true);
  let handledress = () => {
    setDress(false);
  };
  let dresshanlde = () => {
    setDress(true);
  };
  let [cloth, setCloth] = useState(true);
  let handlecloth = () => {
    setCloth(false);
  };
  let clothhandle = () => {
    setCloth(true);
  };
  let [shoes, setShoes] = useState(true);
  let handleshoes = () => {
    setShoes(false);
  };
  let shoeshanlde = () => {
    setShoes(true);
  };
  let [accces, setAcces] = useState(true);
  let handleAcces = () => {
    setAcces(false);
  };
  let acccesHandle = () => {
    setAcces(true);
  };
  let [wedd, setWedd] = useState(true);
  let hanldwedd = () => {
    setWedd(false);
  };
  let weedHandle = () => {
    setWedd(true);
  };
  let [buety, setBuety] = useState(true);
  let handleBuet = () => {
    setBuety(false);
  };
  let BurtyHandle = () => {
    setBuety(true);
  };
  let [gift, setGift] = useState(true);
  let handlegift = () => {
    setGift(false);
  };
  let Gifthandle = () => {
    setGift(true);
  };
  let [garden, setGarden] = useState(true);
  let handlegarden = () => {
    setGarden(false);
  };
  let gardenhandle = () => {
    setGarden(true);
  };
  return (
    <Box
      position={"sticky"}
      w={"95%"}
      m="auto"
      top={"70px"}
      bg={"white"}
      zIndex={2}
      border={"1px solid #E2E8F0"}
    >
      <Grid
        gridTemplateColumns={{ base: "repeat(8,1fr)", md: "repeat(10,1fr)" }}
        borderBottom="2px solid #EDF2F7"
        alignItems={"center"}
        fontWeight={450}
        fontSize={"13px"}
        color="#26262C"
        paddingLeft={"20px"}
        cursor={"pointer"}
      >
        <GridItem
          onMouseEnter={handleshop}
          onMouseLeave={shophandle}
          className={styles.height}
        >
          New!
          <Hide below="md">
            {shop ? (
              <ChevronDownIcon fontSize={"18px"} />
            ) : (
              <ChevronUpIcon fontSize={"18px"} />
            )}
          </Hide>
        </GridItem>
        <GridItem
          className={styles.height}
          onMouseEnter={handledress}
          onMouseLeave={dresshanlde}
        >
          Dresses
          <Hide below="md">
            {dress ? (
              <ChevronDownIcon fontSize={"18px"} />
            ) : (
              <ChevronUpIcon fontSize={"18px"} />
            )}
          </Hide>
        </GridItem>
        <GridItem
          className={styles.height}
          onMouseEnter={handlecloth}
          onMouseLeave={clothhandle}
        >
          Clothing
          <Hide below="md">
            {cloth ? (
              <ChevronDownIcon fontSize={"18px"} />
            ) : (
              <ChevronUpIcon fontSize={"18px"} />
            )}
          </Hide>
        </GridItem>
        <GridItem
          className={styles.height}
          onMouseEnter={handleshoes}
          onMouseLeave={shoeshanlde}
        >
          Shoes
          <Hide below="md">
            {shoes ? (
              <ChevronDownIcon fontSize={"18px"} />
            ) : (
              <ChevronUpIcon fontSize={"18px"} />
            )}
          </Hide>
        </GridItem>
        <GridItem
          className={styles.height}
          onMouseEnter={handleAcces}
          onMouseLeave={acccesHandle}
        >
          Accessories{" "}
          {accces ? (
            <ChevronDownIcon fontSize={"18px"} />
          ) : (
            <ChevronUpIcon fontSize={"18px"} />
          )}
        </GridItem>
        <GridItem
          className={styles.height}
          onMouseEnter={hanldwedd}
          onMouseLeave={weedHandle}
        >
          Wedding
          <Hide below="md">
            {wedd ? (
              <ChevronDownIcon fontSize={"18px"} />
            ) : (
              <ChevronUpIcon fontSize={"18px"} />
            )}
          </Hide>
        </GridItem>
        <GridItem
          className={styles.height}
          onMouseEnter={handleBuet}
          onMouseLeave={BurtyHandle}
        >
          Buety
          <Hide below="md">
            {buety ? (
              <ChevronDownIcon fontSize={"18px"} />
            ) : (
              <ChevronUpIcon fontSize={"18px"} />
            )}
          </Hide>
        </GridItem>
        <GridItem
          className={styles.height}
          onMouseEnter={handlegift}
          onMouseLeave={Gifthandle}
          display={{ base: "none", md: "grid" }}
        >
          Gift & Candles
        </GridItem>
        <GridItem
          className={styles.height}
          onMouseEnter={handlegarden}
          onMouseLeave={gardenhandle}
          display={{ base: "none", md: "grid" }}
        >
          Garden & Outdoor
        </GridItem>
        <GridItem className={styles.height}>
          Sale
          <Hide below="md">
            {shop ? (
              <ChevronDownIcon fontSize={"18px"} />
            ) : (
              <ChevronUpIcon fontSize={"18px"} />
            )}
          </Hide>
        </GridItem>
      </Grid>
      <Footernew
        shop={shop}
        setShop={setShop}
        handleshop={handleshop}
        shophandle={shophandle}
      />
      {/* Dress section */}
      <FooterDress
        dress={dress}
        setDress={setDress}
        handledress={handledress}
        dresshanlde={dresshanlde}
      />
      <FooterCloth
        cloth={cloth}
        setCloth={setCloth}
        handlecloth={handlecloth}
        clothhandle={clothhandle}
      />
      <Footershoes
        shoes={shoes}
        setShoes={setShoes}
        handleshoes={handleshoes}
        shoeshanlde={shoeshanlde}
      />
      <FooterAcces
        accces={accces}
        handleAcces={handleAcces}
        acccesHandle={acccesHandle}
      />
      <FooteWedding wedd={wedd} hanldwedd={hanldwedd} weedHandle={weedHandle} />
      <FooterBuety
        buety={buety}
        handleBuet={handleBuet}
        BurtyHandle={BurtyHandle}
      />

      <Footergift gift={gift} handlegift={handlegift} Gifthandle={Gifthandle} />
      <FooterGarden
        garden={garden}
        handlegarden={handlegarden}
        gardenhandle={gardenhandle}
      />
    </Box>
  );
}
