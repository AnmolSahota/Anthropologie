import React from "react";
import Carousler from "../chakra/Carousler";
import Dollor from "../chakra/Dollor";
import Four from "../chakra/Four";
import Header from "../chakra/Header";
import Navbar from "../chakra/Navbar";
import Drawermenu from "../chakra/Drawermenu";
import { Hide, Show } from "@chakra-ui/react";
import Footer from "../chakra/Footer";
function Home() {
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
      <Four />
    <Footer/>
    </>
  );
}

export default Home;
