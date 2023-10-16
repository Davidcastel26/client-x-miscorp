import React from 'react'
import { Button, useDisclosure } from '@chakra-ui/react'
import { ModalLogin } from './ModalLogin'

export const BtnLogin = () => {

  const { isOpen, onOpen, onClose } = useDisclosure()
  const finalRef = React.useRef(null)
  const initialRef = React.useRef(null)

  return (
    <>
    <Button mt={4} onClick={onOpen}>
        Login
    </Button>

    <ModalLogin
      initialRef={initialRef} 
      finalRef={finalRef} 
      isOpen={isOpen}
      onClose={onClose}
    />
    </>
  )
}
