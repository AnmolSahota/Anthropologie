import { Center, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import React from "react";

function Lastthree() {
  return (
    <>
      <Grid
        gridTemplateColumns={{ base: "repeat(2,1fr)", md: "repeat(3,1fr)" }}
        gap={6}
        mt="25px"
      >
        <GridItem>
          <Image src="https://images.ctfassets.net/5de70he6op10/1Th4OWf9mWwZ5CZ8SQVxvp/eb5e76d1b3573ce5929ec9d44c6ef5bd/MTE_1.jpg?w=856&q=80&fm=webp"></Image>
          <Text my={"10px"}>Good Jeans: The Denim Fit Guide</Text>
          <Text fontSize={"14px"} mt="10px">
            Introducing the perfect pairs for every wear. From rise to size,
            here's how to find your new favorite jeans.
          </Text>
          <Text fontSize={"14px"} textDecoration="underline" color="#167A92">
            find your fit
          </Text>
        </GridItem>
        <GridItem>
          <Image src="https://images.ctfassets.net/5de70he6op10/5WIsO3hQfTDgsRbgTRuL1C/7f94871142c50d9ac7ed25e3afe8be92/469633343-020623_hpg_mte_2.jpg?w=856&q=80&fm=webp"></Image>
          <Text my={"10px"}>2023 | routine refresh</Text>
          <Text fontSize={"14px"} mt="10px">
            From fresh-faced skincare formulas to floral-inflected fragrances to
            now-trending nails, we have everything you need.
          </Text>
          <Text fontSize={"14px"} textDecoration="underline" color="#167A92">
            get into the swing of spring
          </Text>
        </GridItem>
        <GridItem>
          <Image src="https://images.ctfassets.net/5de70he6op10/6i8iGrDlh9MWYQ5Za3Ifb8/b3bb93892619d7317eaffc08861f5b60/473929355-mte_3.jpg?w=856&q=80&fm=webp"></Image>
          <Text my={"10px"}>Spring 2023: Pattern + Texture</Text>
          <Text fontSize={"14px"} mt="10px">
            Blurring the lines of indoors and out, our Spring 2023 collection
            fits naturally into the 1953 residence of landscape-architect James
            Rose.
          </Text>
          <Text fontSize={"14px"} textDecoration="underline" color="#167A92">
            take the full house tour
          </Text>
        </GridItem>
      </Grid>
    </>
  );
}

export default Lastthree;
