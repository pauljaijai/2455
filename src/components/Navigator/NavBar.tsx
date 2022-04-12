import { Box, Icon } from "@chakra-ui/react";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import GlobalContext from "../../context";
import AuthButtonGroup from "../ButtonGroup/Auth";
import AuthModal from "../Modal/Auth";

const NavBar = () => {
  const { state, setState } = useContext(GlobalContext);

  const onAuthClose = () => {
    setState({ ...state, isAuthOpen: false });
  };
  return (
    <Box
      borderBottomWidth={"1px"}
      borderColor={"black"}
      display={"flex"}
      justifyContent={"space-between"}
      padding={"4"}
    >
      <AuthModal isOpen={state.isAuthOpen} onClose={onAuthClose}>
        {}
      </AuthModal>
      <Link to={"/"}>Service Hub</Link>
      <AuthButtonGroup />
    </Box>
  );
};

export default NavBar;
