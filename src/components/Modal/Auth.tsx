import { Button, Center, ModalBody, ModalCloseButton } from "@chakra-ui/react";
import React, { useContext } from "react";
import { auth, GoogleProvider } from "../../Services/firebase/config";
import BaseModal, { IBaseModalProps } from "./Base";
import { signInWithPopup } from "firebase/auth";
import GlobalContext from "../../context";
import { FcGoogle } from "react-icons/fc";

interface IAuthModalProps extends IBaseModalProps {}

const AuthModal: React.FunctionComponent<IAuthModalProps> = ({ ...props }) => {
  const { state, setState } = useContext(GlobalContext);
  const handleClick = async () => {
    try {
      await signInWithPopup(auth, GoogleProvider);
      const user = auth.currentUser;

      setState({
        ...state,
        user: true,
        username: user?.displayName,
        isAuthOpen: false,
      });
    } catch (err) {
      console.log(err);
    } finally {
      console.log(state);
    }
  };

  return (
    <BaseModal {...props}>
      <ModalBody>
        <ModalCloseButton onClick={props.onClose} />
        <Center>
          <Button
            rounded={"full"}
            fontSize={"8rem"}
            padding={"4rem"}
            onClick={handleClick}
          >
            <FcGoogle />
          </Button>
        </Center>
      </ModalBody>
    </BaseModal>
  );
};

export default AuthModal;
