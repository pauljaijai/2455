import { Box, Wrap, WrapItem } from "@chakra-ui/react";
import React from "react";
import { AiOutlineScissor, AiOutlineEdit, AiOutlineCar } from "react-icons/ai";
import CategroyCard from "./Card";
import { BiBookOpen, BiBaseball } from "react-icons/bi";
import { RiComputerLine } from "react-icons/ri";

const categories = [
  { category: "HairCut", title: "Hair Cut", icon: <AiOutlineScissor /> },
  { category: "Education", title: "Education", icon: <BiBookOpen /> },
  { category: "IT", title: "IT", icon: <RiComputerLine /> },
  {
    category: "Editing",
    title: "CV & Resume Editing",
    icon: <AiOutlineEdit />,
  },
  { category: "CarWashing", title: "Car Washing", icon: <AiOutlineCar /> },
  { category: "Sport", title: "Sport", icon: <BiBaseball /> },
];
const CategoryList = () => {
  return (
    <Box display={"flex"} flexDirection={"row"}>
      <Wrap>
        {categories.map((data) => {
          return (
            <WrapItem>
              <CategroyCard
                key={data.category}
                category={data.category}
                title={data.title}
                icon={data.icon}
              />
            </WrapItem>
          );
        })}
      </Wrap>
    </Box>
  );
};

export default CategoryList;
