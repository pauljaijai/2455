import { Box, Button, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import ServiceModal from "../Modal/Service";

const ServiceCard: React.FunctionComponent<any> = ({
  title,
  BasicValue,
  BasicPrice,
  AdvanceValue,
  AdvancePrice,
  PremiumValue,
  PremiumPrice,
  username,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(false);
  };
  return (
    <>
      <ServiceModal
        title={title}
        BasicValue={BasicValue}
        BasicPrice={BasicPrice}
        AdvanceValue={AdvanceValue}
        AdvancePrice={AdvancePrice}
        PremiumValue={PremiumValue}
        PremiumPrice={PremiumPrice}
        username={username}
        onClick={onClose}
        isOpen={isOpen}
      />
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"space-between"}
        width={{ base: "20rem" }}
        height={{ base: "10rem" }}
        borderWidth={"1px"}
        borderColor={"teal"}
        rounded={"3xl"}
        shadow={"lg"}
        padding={"1rem"}
      >
        <Box>
          <Text textAlign={"left"} fontWeight={"black"} color={"teal"}>
            {title}
          </Text>
          <Text
            fontSize={"xs"}
            fontStyle={"italic"}
            color={"gray"}
          >{`Service Provider : ${username}`}</Text>
        </Box>
        <Box
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"space-between"}
        >
          <Text
            fontWeight={"extrabold"}
            color={"green"}
            left={"1rem"}
          >{`Price : ${BasicPrice} Up`}</Text>

          <Button
            onClick={handleClick}
            right={"1rem"}
            variant={"outline"}
            borderColor={"teal"}
          >
            View
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default ServiceCard;
