import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDataApi } from "../Redux/Action";
import {
  Avatar,
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Spinner,
  Stack,
  Text,
} from "@chakra-ui/react";

const ComponentC = () => {
  const dispatch = useDispatch();
  const { data, loading } = useSelector((store) => store.Product);
  console.log("data", data);
  //useEfect
  useEffect(() => {
    dispatch(getDataApi());
  }, []);
  return loading ? (
    <Center>
      <Box m={"auto"}>
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </Box>
    </Center>
  ) : (
    <Box w="95%" m={"auto"} mb={"20px"}>
      <Text fontSize={"3xl"} align={"center"} fontFamily={"fantasy"} mb={"5px"}>
        Total Users = {data.length}
      </Text>
      <SimpleGrid columns={[1, 2, 2, 4]} spacing={10}>
        {data &&
          data.map((el) => (
            <Box
              maxW={"270px"}
              w={"full"}
              bg={"white"}
              boxShadow={"2xl"}
              rounded={"md"}
              overflow={"hidden"}
              key={el.id}
              m={"auto"}
            >
              <Image
                h={"120px"}
                w={"full"}
                src={
                  "https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                }
                objectFit={"cover"}
              />
              <Flex justify={"center"} mt={-12}>
                <Avatar
                  size={"xl"}
                  src={
                    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                  }
                  alt={"Author"}
                  css={{
                    border: "2px solid white",
                  }}
                />
              </Flex>

              <Box p={6}>
                <Stack spacing={0} align={"center"} mb={5}>
                  <Heading
                    fontSize={"2xl"}
                    fontWeight={500}
                    fontFamily={"body"}
                  >
                    {el.title}
                  </Heading>
                  <Text color={"gray.500"}>{el.place}</Text>
                </Stack>

                <Button
                  w={"full"}
                  mt={8}
                  bg={"#151f21"}
                  color={"white"}
                  rounded={"md"}
                  _hover={{
                    transform: "translateY(-2px)",
                    boxShadow: "lg",
                  }}
                >
                  Follow
                </Button>
              </Box>
            </Box>
          ))}
      </SimpleGrid>
    </Box>
  );
};

export default ComponentC;
