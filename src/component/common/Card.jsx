import React from "react";
import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";

function Card() {
  return (
    <Box
      w="100%"
      h="400px"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="Center"
      borderRadius="6px"
      overflow="hidden"
    >
      {/* imgae */}
      <Box w="100%" h="80%" position="relative">
        <Image src="/chair.png" fill className="cover"></Image>
      </Box>
      {/* =======> bottom line */}
      <Box
        w="100%"
        h="20%"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        bg="white"
        px="8px"
      >
        <Text fontSize="22px" color="black">
          Red Maroon Chair
        </Text>
        <Text fontSize="28px" color="black" fontWeight="bold">
          323A
        </Text>
      </Box>
      </Box>
  )
}

export default Card;
