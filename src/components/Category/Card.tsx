import { Box, Center, Text } from "@chakra-ui/react";
import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
interface ICategroyCardProps {
  icon: ReactElement;
  title: string;
  category: string;
}

const CategroyCard: React.FunctionComponent<ICategroyCardProps> = ({
  icon,
  title,
  category,
}) => {
  return (
    <Link to={`/category/${category}`}>
      <Box
        display={"flex"}
        flexDirection={"column"}
        width={{ base: "20rem" }}
        height={{ base: "15rem" }}
        padding={"12"}
        alignItems={"center"}
        justifyContent={"center"}
        textAlign={"center"}
        borderWidth={"1px"}
        borderColor={"teal"}
        rounded={"3xl"}
        shadow={"lg"}
      >
        <Center>
          <Text fontSize={"5rem"}>{icon}</Text>
        </Center>
        <Center>
          <Text fontSize={"1.5rem"} color={"teal"} fontWeight={"black"}>
            {title}
          </Text>
        </Center>
      </Box>
    </Link>
  );
};

export default CategroyCard;
