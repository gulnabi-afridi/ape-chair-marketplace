import { React, useState, useDisclosure } from "react";
import { Box, GridItem, Text,Grid } from "@chakra-ui/react";
import Card from "../common/Card";

function UnListed() {
  return (

    <Box w="100%">
      <Grid templateColumns="repeat(3,1fr)" gap={36} mt="3rem">
        {[0,1,2,3,4,5,6,7,8].map((listed,index)=>{
           return  <Card key={index}/>
        })}
      </Grid>
    </Box>
  );
}

export default UnListed;
