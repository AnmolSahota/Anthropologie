import Overlay from "../chakra/Overlay";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios, { Axios } from "axios";
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
import Footer from "../chakra/Footer";
function Product() {
  let [data, setData] = useState([]);
  let current = useParams();
  let [page, setCount] = useState(1);
  let [datalength, setlength] = useState([]);
  const location = useLocation();
  let getData = () => {
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
    if (e.target.value == "L2H") {
      axios
        .get(
          `https://bewildered-tick-costume.cyclic.app/${current.Value}?&_sort=price&_order=asc&_limit=14&_page=${page}`
        )
        .then((res) => {
          setData(res.data);
        });
    } else if (e.target.value == "H2L") {
      axios
        .get(
          `https://bewildered-tick-costume.cyclic.app/${current.Value}?&_sort=price&_order=desc&_limit=14&_page=${page}`
        )
        .then((res) => {
          setData(res.data);
        });
    } else if (e.target.value == "A2Z") {
      axios
        .get(
          `https://bewildered-tick-costume.cyclic.app/${current.Value}?&_sort=title&_order=asc&_limit=14&_page=${page}`
        )
        .then((res) => {
          setData(res.data);
        });
    } else if (e.target.value == "Z2A") {
      axios
        .get(
          `https://bewildered-tick-costume.cyclic.app/${current.Value}?&_sort=title&_order=desc&_limit=14&_page=${page}`
        )
        .then((res) => {
          setData(res.data);
        });
    } else {
      getData();
      console.log(e.target.value);
    }
  };

  let addtocart = (val) => {
    console.log(val);
    let cart = JSON.parse(localStorage.getItem("Cart")) || [];
    cart.push({ ...val, quantity: 1 });
    localStorage.setItem("Cart", JSON.stringify(cart));
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
            gridTemplateColumns={{ base: "repeat(2,1fr)", md: "repeat(3,1fr)" }}
            marginTop={"50px"}
            gap={6}
            rowGap={14}
          >
            {data.map((e) => {
              return (
                <GridItem
                  position={"relative"}
                  key={e.id}
                  borderBottom="1px solid #A0AEC0"
                  paddingBottom={"13%"}
                >
                  <Link to={`/product/${e.catogory}/${e.id}`}>
                    <Image
                      height={"300px"}
                      margin={"auto"}
                      w={"100%"}
                      src={e.url}
                    ></Image>
                  </Link>
                  <Text
                    color={"#26262C"}
                    fontSize={"15px"}
                    className={styles.title}
                  >
                    {e.title.substring(0, 30)}
                  </Text>
                  <Text fontWeight={500} className={styles.price}>
                    $ {e.price}.00
                  </Text>
                  <Text color={"#26262C"} fontSize={"15px"}>
                    {e.brand.includes("By") ? e.brand : `By ${e.brand}`}
                  </Text>
                  <Text>★★★★★</Text>
                  <button onClick={() => addtocart(e)}>
                    <Overlay
                      text={`${e.title} has added`}
                      position={"absolute"}
                    />
                  </button>
                </GridItem>
              );
            })}
          </Grid>
          <Text marginTop={"40px"} className={styles.bold}>
            Best Dresses of 2023 - In Every Style, Color & Silhouette
          </Text>
          <Text className={styles.subpara}>
            The Dresses Every Woman Needs in 2023– In Every Style, Color &
            Silhouette
          </Text>
          <Text className={styles.subpara}>
            Treat yourself to a dress—the one that will turn heads. But don’t
            forget the one that brings you from day to night with the right
            detailing. And the one that could coax you out of the house, even if
            the occasion is just to show off your stunning look. Our collection
            of unique dresses is curated with you in mind.
          </Text>
          <Text className={styles.subpara}>
            These are the top 7 types of dresses every woman needs in her
            closet, as per our expert stylist. We’d say you can never have too
            many, but these are a great place to start.
          </Text>
          <Text className={styles.bold}>1. The go-to party dress:</Text>
          <Text className={styles.subpara}>
            Head out to a party in a cocktail dress that can take you from
            drinks to dancing, from sunset to early-morning-hours. Wherever the
            night takes you, you’ll take the spotlight. Think sequins, tulle,
            silks, and embroidery in all lengths. Dare to go bare? Try a cutout
            number that’s sure to catch compliments. The party circuit never
            looked so appealing.
          </Text>
          <Text className={styles.bold}>2. The chic minimalist:</Text>
          <Text className={styles.subpara}>
            From neutral numbers to little black dresses, you’ll need a dress
            that's fit for function and fashion. From the office to happy hour,
            from a blazer dress to a timeless shift dress, these smart dresses
            work paired with a denim jacket, bomber, or even your favorite pair
            of tennis shoes.
          </Text>
          <Text className={styles.bold}>3. The for-every-occasion:</Text>
          <Text className={styles.subpara}>
            When you need the dress that always dutifully falls in line, we
            recommend a midi dress. With a hemline that hits at the calf and
            features details like a gathered hem or ruched waistline, midi
            dresses can be dressed up with heels or down with flats. Appropriate
            for all seasons and all circumstances.
          </Text>
          <Text className={styles.bold}>4. The playful jumpsuit:</Text>
          <Text className={styles.subpara}>
            We welcome the resurgence of the jumpsuits with open arms. These
            one-piece-wonders are as ubiquitous as dresses, belonging everywhere
            from bridal showers to the office to nighttime soirees. From
            wide-leg to ultra-fitted, jumpsuits say that you came to play and
            are seriously on-trend.
          </Text>
          <Text className={styles.bold}>5. The fit-for-a-gala:</Text>
          <Text className={styles.subpara}>
            There’s nothing quite like slipping into full-length,
            absolutely-to-die-for formal attire. A dress with elegance and
            esteem that makes you feel sexy and sensual: the one that makes you
            the It-Girl of the evening. The right gown will elevate a closet to
            new heights. We recommend timeless dark colors with delicate
            details.
          </Text>
          <Text className={styles.bold}>6. The wedding guest du jour:</Text>
          <Text className={styles.subpara}>
            As a wedding guest, you can never go wrong with a floral dress –
            whether it's casual or black tie. They’re as tried and true as
            something blue. Want to look a little more sleek? A strappy slip
            dress will do the trick. These dresses are cut on the bias, ensuring
            the most flattering silhouette. From minis to maxis, and every
            silhouette in between, you’ll be coming up roses with this RSVP
            choice.
          </Text>
          <Text className={styles.bold}>7. The ultra-flattering:</Text>
          <Text className={styles.subpara}>
            From time to time, we all need to go big and bold. And these
            eye-catching dresses will help you stand out from the crowd. Our
            short and micro mini dresses guarantee oodles of flirty fun while
            accentuating your sartorial sensibility.
          </Text>
        </GridItem>
      </Grid>
      <Footer />
    </>
  );
}

export default Product;
