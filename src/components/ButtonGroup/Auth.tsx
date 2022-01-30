import { Box, Button } from "@chakra-ui/react";

import { useContext } from "react";
import GlobalContext from "../../context";
import { signOut } from "firebase/auth";
import { auth } from "../../Services/firebase/config";
import { Link } from "react-router-dom";

const AuthButtonGroup = () => {
  const { state, setState } = useContext(GlobalContext);
  const handleClick = () => {
    setState({ ...state, isAuthOpen: true });
  };

  const handleOutClick = () => {
    signOut(auth)
      .then(() => {
        setState({ username: "", user: false });
      })
      .catch((error) => {
        console.log(error);
      });

    console.log(state);
  };
  return (
    <Box>
      {state.user ? (
        <>
          <Link to="/create">
            <Button colorScheme="teal" variant="solid" marginRight={"1rem"}>
              Sell Service
            </Button>
          </Link>

          <Button colorScheme="teal" variant="outline" onClick={handleOutClick}>
            Sign Out
          </Button>
        </>
      ) : (
        <>
          <Button
            colorScheme="teal"
            variant="solid"
            onClick={handleClick}
            marginRight={"1rem"}
          >
            Register
          </Button>
          <Button colorScheme="teal" variant="outline" onClick={handleClick}>
            Sign In
          </Button>
        </>
      )}
    </Box>
  );
};

export default AuthButtonGroup;
