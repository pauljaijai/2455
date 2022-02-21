import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import React from "react";

const ServiceModal: React.FunctionComponent<any> = ({
  title,
  BasicValue,
  BasicPrice,
  AdvanceValue,
  AdvancePrice,
  PremiumValue,
  PremiumPrice,
  username,
  onClick,
  ...props
}) => {
  return (
    <Modal {...props}>
      <ModalOverlay />
      <ModalContent padding={"1rem"}>
        <ModalCloseButton onClick={onClick} />
        <ModalHeader>{title}</ModalHeader>

        <ModalBody>
          <Text> {`Provided by ${username}`}</Text>
          <ModalHeader color={"teal"} marginTop={"10"}>
            Basic
          </ModalHeader>
          <Text whiteSpace={"pre-wrap"}>{BasicValue}</Text>
          <Box float={"right"} colorScheme="teal" variant="solid">
            <Button backgroundColor={"teal"}>{`Buy ${BasicPrice}`}</Button>
          </Box>

          <ModalHeader color={"red.600"} marginTop={"10"}>
            Advance
          </ModalHeader>
          <Text whiteSpace={"pre-wrap"}>{AdvanceValue}</Text>
          <Box float={"right"} colorScheme="teal" variant="solid">
            <Button backgroundColor={"red.600"}>{`Buy ${AdvancePrice}`}</Button>
          </Box>

          <ModalHeader color={"purple.300"} marginTop={"10"}>
            Premium
          </ModalHeader>
          <Text whiteSpace={"pre-wrap"}>{PremiumValue}</Text>

          <Box float={"right"} colorScheme="teal" variant="solid">
            <Button backgroundColor={"purple.300"}>
              {`Buy ${PremiumPrice}`}
            </Button>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ServiceModal;
