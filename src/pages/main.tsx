import { Box, Center, Text } from "@chakra-ui/react";
import React from "react";
import CategoryList from "../components/Category/List";

const MainPage: React.FunctionComponent = () => {
  return (
    <Box>
      <Text textAlign={"center"} fontSize={{ base: "3xl" }}>
        Categories
      </Text>
      <Center padding={"2rem"}>
        <CategoryList />
      </Center>
    </Box>
  );
};

export default MainPage;
