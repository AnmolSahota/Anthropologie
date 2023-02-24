import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Carousler from "../chakra/Carousler";
import Dollor from "../chakra/Dollor";
import Header from "../chakra/Header";
import Drawermenu from "../chakra/Drawermenu";
import {
  Show,
  Hide,
  GridItem,
  Grid,
  Text,
  Center,
  Box,
  Image,
} from "@chakra-ui/react";
import Navbar from "../chakra/Navbar";
import styles from "../style/Navbarcss.module.css";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { useLocation } from "react-router-dom";
function Product() {
  let [data, setData] = useState([]);
  let current = useParams();
  let [page, setCount] = useState(1);
  let [datalength, setlength] = useState([]);
  const location = useLocation();
  let getData = () => {
    console.log("fire from getdata", new Date());
    axios
      .get(
        `https://bewildered-tick-costume.cyclic.app/${current.Value}?_page=${page}&_limit=14`
      )
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {});
  };
  let changer = (e) => {
    let arr = [];
    switch (e.target.value) {
      case "L2H":
        arr = data.sort((a, b) => {
          return a.price - b.price;
        });
        console.log("l2h");
        break;
      case "H2L":
        console.log("Mangoes and papayas are $2.79 a pound.");
        break;
      case "A2Z":
        console.log("a2z");
        break;
      case "Z2A":
        console.log("a2z");
        break;
      default:
        getData();
    }
    if (arr.length) {
      console.log("array push");
      setData(arr);
    }
    console.log(data);
  };
  let getcount = () => {
    axios
      .get(`https://bewildered-tick-costume.cyclic.app/${current.Value}`)
      .then((res) => {
        setlength(res.data);
      });
  };
  let updater = (value) => {
    setCount(page + value);
  };
  useEffect(() => {
    getData();
    getcount();
  }, [location, page]);
  useEffect(() => {
    setCount(1);
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
      <Center color={"#26262c"} my={"30px"}>
        {current.Value} : Top Rated
      </Center>
      <Grid
        gridTemplateColumns={{ base: "repeat(1,1fr)", md: "25% 1fr" }}
        w={{ base: "100%", md: "95%" }}
        m={"auto"}
        gap={6}
      >
        <GridItem
          display={{ base: "none", md: "grid" }}
          height={"450px"}
          borderBottom="1px solid #A0AEC0"
        >
          <Text>Browse by:</Text>
          <Box className={styles.para}>Outdoor Living</Box>
          <Text className={styles.para}>Fire Pits & Accessories</Text>
          <Text className={styles.para}>Lighting & Lanterns</Text>
          <Text className={styles.para}>Doormats & Outdoor Rugs</Text>
          <Text className={styles.para}>Outdoor Dining</Text>
          <Text className={styles.para}>Sun & Insect Protection</Text>
          <Text className={styles.para}>Wedding vacation</Text>
          <Text className={styles.para}>Pary time with Sneakers</Text>
          <Text className={styles.para}>Cocktail Wedding</Text>
          <Text className={styles.para}>Lounge & Casual Dresses</Text>
          <Text className={styles.para}>Jumpsuits</Text>
          <Text className={styles.para}>Cocktail & Party Dresses</Text>
        </GridItem>
        <GridItem position={"relative"}>
          <Box fontWeight={500}>
            {current.Value} : {datalength.length}
            <span style={{ paddingLeft: "10px" }}>Products</span>
          </Box>
          <Box position={"absolute"} right={"10px"}>
            <span style={{ fontSize: "15px" }}>Sort :</span>
            <select className={styles.select} onChange={changer}>
              <option value="option1" style={{ textAlign: "center" }}>
                Featured
              </option>
              <option value="L2H">Price : Low To High</option>
              <option value="H2L">Price : High To Low</option>
              <option value="option3">Newest</option>
              <option value="option3">Best Selling</option>
              <option value="A2Z">A-Z</option>
              <option value="Z2A">Z-A</option>
            </select>

            <button disabled={page <= 1} onClick={() => updater(-1)}>
              <ChevronLeftIcon fontSize={"38px"} />
            </button>
            <span style={{ color: "#718096" }}>{page} / 4</span>
            <button onClick={() => updater(+1)} disabled={page >= 4}>
              <ChevronRightIcon fontSize={"38px"} />
            </button>
          </Box>
          <Grid
            gridTemplateColumns={"repeat(3,1fr)"}
            marginTop={"50px"}
            gap={6}
            rowGap={10}
          >
            {data.map((e) => {
              return (
                <GridItem position={"relative"} key={e.id}>
                  <Image
                    height={"300px"}
                    margin={"auto"}
                    w={"100%"}
                    src={e.url}
                  ></Image>
                  <Text color={"#26262C"} fontSize={"15px"}>
                    {e.title}
                  </Text>
                  <Text fontWeight={500}>$ {e.price}</Text>
                  <Text color={"#26262C"} fontSize={"15px"}>
                    {e.brand.includes("By") ? e.brand : `By ${e.brand}`}
                  </Text>
                  <Text>★★★★★ </Text>
                  <button className={styles.cartbtn}>Add To cart</button>
                </GridItem>
              );
            })}
          </Grid>
        </GridItem>
      </Grid>
    </>
  );
}

export default Product;
