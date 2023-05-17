import React, { useState } from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { addDataApi } from "../Redux/Action";

const ComponentB = () => {
  const toast = useToast();
  const [name, namechange] = useState("");
  const [place, setPlace] = useState("");
  const dispatch = useDispatch();

  const handlesubmit = (e) => {
    e.preventDefault();
    const userobj = { title: name, place: place };
    console.log(userobj);
    dispatch(addDataApi(userobj));
    toast({
      title: `User data save`,
      status: "success",
      position: "top",
      isClosable: true,
    });
    namechange("");
    setPlace("");
  };
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={["2xl", "4xl", "4xl"]}>
            User Credentials Entry
          </Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to enjoy all of our cool <Link color={"blue.400"}>features</Link> ✌️
          </Text>
        </Stack>
        <form onSubmit={handlesubmit}>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <FormControl id="name">
                <FormLabel>Name :</FormLabel>
                <Input
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => namechange(e.target.value)}
                  required
                />
              </FormControl>
              <FormControl id="place">
                <FormLabel>Place :</FormLabel>
                <Input
                  type="text"
                  placeholder="Enter your location"
                  value={place}
                  onChange={(e) => setPlace(e.target.value)}
                  required
                />
              </FormControl>
              <Stack spacing={10}>
                <Button
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                  type="submit"
                >
                  Submit
                </Button>
              </Stack>
            </Stack>
          </Box>
        </form>
      </Stack>
    </Flex>
  );
};

export default ComponentB;
