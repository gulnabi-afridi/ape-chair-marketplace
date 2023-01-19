import React from "react";
import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";
import { Button, ButtonGroup } from "@chakra-ui/react";
import ProductSection from "../ProductSection/ProductSection";

function Hero() {
  return (
    <Box w="100vw" minH="100vh" bg="#25272E">
      {/* ======= hero section image*/}
      <Box w="100%" h="300px" position="relative">
        <Box w="100%" h="300px" position="relative">
          <Image src="/home.png" fill alt="home image"></Image>
        </Box>
        {/* ========> profile image */}
        <Box
          w="100%"
          maxW="1350px"
          paddingLeft="46px"
          position="absolute"
          bottom="-90px"
        >
          <Box w="200px" h="200px" borderRadius="50%" position="relative">
            <Image src="/profile.png" fill alt="profile pic"></Image>
          </Box>
        </Box>
      </Box>
      <Box
        w="100%"
        maxW="1350px"
        margin="auto"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="start"
        mt="6.5rem"
      >
        {/* =====>text */}
        <Text color="white" fontWeight="bold" fontSize="40px">
          Apes Cabin Furniture
        </Text>
        <Text
          color="white"
          lineHeight="30px"
          fontWeight="normal"
          fontSize="16px"
        >
          Purchase furniture that you will be able to use to furnish your Ape
          Society
          <br /> Cabins. Merchants receive 1% of all sales.
        </Text>
      </Box>
      <ProductSection />
    </Box>
  );
}

export default Hero;
