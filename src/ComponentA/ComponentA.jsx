import React from "react";
import ComponentB from "../ComponentB/ComponentB";
import ComponentC from "../ComponentC/ComponentC";
import { Box, useColorModeValue } from "@chakra-ui/react";

const ComponentA = () => {
  return (
    <Box bg={useColorModeValue("gray.50", "gray.800")}>
      <ComponentB />
      <ComponentC />
    </Box>
  );
};

export default ComponentA;
