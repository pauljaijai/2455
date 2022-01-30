import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  ModalProps,
} from "@chakra-ui/react";

export interface IBaseModalProps extends ModalProps {}

const BaseModal: React.FunctionComponent<IBaseModalProps> = ({
  children,
  ...props
}) => {
  return (
    <Modal {...props}>
      <ModalOverlay>
        <ModalBody>
          <ModalCloseButton onClick={props.onClose} />
          <ModalContent>{children}</ModalContent>
        </ModalBody>
      </ModalOverlay>
    </Modal>
  );
};

export default BaseModal;
