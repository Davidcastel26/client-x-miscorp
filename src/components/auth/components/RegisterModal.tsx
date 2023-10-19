import React from 'react'
import { loginModal } from '../../../interfaces/ilogin'

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    
    ModalCloseButton,
    
  } from "@chakra-ui/react";
// import { Login } from '../Login';
// import { BtnCreate } from './CustomBtn';
import { Register } from '../Register';

export const RegisterModal: React.FC<loginModal> = (
{
    // finalRef,
    isOpen,
    onClose,
    // init/ialRef
}) => {

  return (
    <>
       <Modal
        // initialFocusRef={initialRef}
        // finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Register New User</ModalHeader>
          <ModalCloseButton />
          
          <Register onClose={onClose} />
          {/*  initialRef={initialRef}  */}
          

        </ModalContent>
      </Modal>
    </>
  )
}
