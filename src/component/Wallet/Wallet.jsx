import React from "react";
import { Box, GridItem, Text } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import Listed from "./Listed";
import UnListed from "../Unlisted/Unlisted";

function Wallet() {
  return (
    <Box w="100%" maxW="1350px" margin="auto" mt="4rem" pb="20rem" paddingX={{base:"16px",md:"24px"}}>
      <Box
        w="70%"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="start"
      >
      <Text fontSize="37px" color="white" fontWeight="bold">
        Wallet
      </Text>
      <Tabs defaultIndex={0}>
        <TabList>
          <Tab>Unlisted</Tab>
          <Tab>Listed</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <UnListed/>
          </TabPanel>
          <TabPanel>
          <Listed />

          </TabPanel>
        </TabPanels>
      </Tabs>
      </Box>
    </Box>
  );
}

export default Wallet;
