import React from "react";
import { Box } from "@chakra-ui/react";
import Image from "next/image";
import { Button, ButtonGroup } from "@chakra-ui/react";



function Header() {
  
  return (
    <Box
      w="100vw"
      h={{ base: "80px", md: "110px" }}
      bg="#25272E"
      paddingX={{ base: "16px", md: "24px" }}
    >
      <Box
        w="100%"
        maxW="1350px"
        h="100%"
        m="auto"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        {/* logo */}
        <Box
          w={{ base: "180px", md: "230px" }}
          h={{ base: "48px", md: "48px" }}
          position="relative"
        >
          <Image src="/header.png" alt="" fill></Image>
        </Box>
        {/* =====> buttons */}
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          gap="50px"
        >
          <Button
            fontSize={{ base: "16px", md: "22px" }}
            color="white"
            fontWeight={{ base: "semibold", md: "bold" }}
          >
            Back to City
          </Button>
          <Button
            fontSize={{ base: "16px", md: "22px" }}
            color="white"
            fontWeight={{ base: "semibold", md: "bold" }}
            border="2px solid white"
            borderRadius="10px"
            w="240px"
            py="10px"
          >
            Connect Wallet
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Header;
