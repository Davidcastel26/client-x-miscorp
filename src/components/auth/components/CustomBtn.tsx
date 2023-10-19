import React from "react";
import { Button, useDisclosure } from "@chakra-ui/react";
import { LoginModal } from "./LoginModal";
import { AddIcon } from "@chakra-ui/icons";
import { RegisterModal } from "./RegisterModal";

export const BtnLogin = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);
  const initialRef = React.useRef(null);

  return (
    <>
      <Button mt={4} onClick={onOpen}>
        Login
      </Button>

      <LoginModal
        initialRef={initialRef}
        finalRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      />
    </>
  );
};

export const BtnCreate = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);
  const initialRef = React.useRef(null);

  return (
    <>
      <Button mt={4} onClick={onOpen} variant="outline" rightIcon={<AddIcon />}>
        Create User
      </Button>

      <RegisterModal
        initialRef={initialRef}
        finalRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      />
    </>
  );
};
