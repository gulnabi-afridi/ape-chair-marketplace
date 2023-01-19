import { React, useState, useDisclosure } from "react";
import { Box, GridItem, Text } from "@chakra-ui/react";
import Image from "next/image";
import { Button, ButtonGroup, Input, Select, Grid } from "@chakra-ui/react";
import { RiSearchLine } from "react-icons/ri";
import { FiRefreshCcw } from "react-icons/fi";
import Card from "../common/Card";

function ProductSection() {
  return (
    <Box
      w="100%"
      maxW="1350px"
      margin="auto"
      display="flex"
      justifyContent="center"
      alignItems="start"
      mt="4rem"
      pb="20rem"
    >
      {/* ======> filter */}
      <Box
        w="25%"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="start"
      >
        <Text color="white" fontWeight="bold" fontSize="18px" mb="4rem">
          2,341 results
        </Text>
        <Box
          w="100%"
          display="flex"
          flexDirection="column"
          gap="2px"
          justifyContent="center"
          alignItems="start"
        >
          <Text color="white">Furniture Name (50)</Text>
          {filters.map((filter, index) => {
            return (
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                gap="10px"
                color="white"
              >
                <input type="checkbox" id="checkBox" name="checkBox" />
                <label>Blue</label>
              </Box>
            );
          })}
        </Box>
      </Box>

      {/* =========> product section */}
      <Box w="75%" display="flex" flexDirection="column">
        {/* ======> Top header bar */}
        <Box
          w="100%"
          h="50px"
          display="flex"
          justifyContent="space-between"
          alignItems="start"
        >
          <Box
            w="35%"
            h="90%"
            display="flex"
            bg="white"
            justifyContent="center"
            alignItems="center"
            borderRadius="5px"
            pl="10px"
          >
            <RiSearchLine
              style={{ color: "#a3a3a3", width: "30px", height: "40px" }}
            />
            <Input
              borderRadius="10px"
              border="none"
              h="100%"
              w="100%"
              pl="10px"
              placeholder="Search"
              _focus={{
                outline: "none",
              }}
            />
          </Box>
          {/* ======> select box */}
          <Box
            h="100%"
            borderRadius="10px"
            gap="20px"
            display="flex"
            justifyContent="center"
            alignItems="start"
          >
            <FiRefreshCcw
              style={{ color: "white", width: "30px", height: "40px" }}
            />
            <Select h="42px" placeholder="Select option">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </Box>
        </Box>
        {/* =======> products */}
        <Grid templateColumns="repeat(3,1fr)" gap={36} mt="3rem">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => {
            return (
              <GridItem w="100%">
                <Card/>
              </GridItem>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
}

const filters = [
  {
    name: "Blue",
  },
  {
    name: "Blue",
  },
  {
    name: "Blue",
  },
  {
    name: "Blue",
  },
  {
    name: "Blue",
  },
  {
    name: "Blue",
  },
];

export default ProductSection;
