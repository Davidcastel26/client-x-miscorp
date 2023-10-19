import React from 'react'
import { loginModal } from '../../../interfaces/ilogin'

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    
    ModalCloseButton,
    
  } from "@chakra-ui/react";
import { Login } from '../Login';

export const LoginModal: React.FC<loginModal> = (
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
          <ModalHeader>Log In</ModalHeader>
          <ModalCloseButton />
          
          <Login onClose={onClose} />
          {/*  initialRef={initialRef}  */}
          

        </ModalContent>
      </Modal>
    </>
  )
}
