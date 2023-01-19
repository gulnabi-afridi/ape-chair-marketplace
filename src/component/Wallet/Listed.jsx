import { React, useState, useDisclosure } from "react";
import { Box, GridItem, Text } from "@chakra-ui/react";
import Image from "next/image";
import { Button, ButtonGroup, Input, Select, Grid } from "@chakra-ui/react";
import { RiSearchLine } from "react-icons/ri";
import { FiRefreshCcw } from "react-icons/fi";
import Card from "../common/Card";

function Listed() {
  return (
      <Box w="100%">
      <Grid templateColumns="repeat(3,1fr)" gap={36} mt="3rem">
        {[0,1,2,3].map((listed,index)=>{
           return  <Card/>
        })}
      </Grid>
    </Box>
  );
}

export default Listed;
