import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    TableCaption,
    TableContainer,
    Stack,
    Button,
    Td,
    Switch
  } from '@chakra-ui/react';
import { DeleteIcon, EditIcon } from '@chakra-ui/icons';


export const TableUsers = ({}) => {


  return (
    <>
    <div>

    
    <TableContainer>
    <Table variant='striped' colorScheme='teal'>
      <TableCaption>X CORP API</TableCaption>
      <Thead>
        <Tr>
          <Th>User Name</Th>
          <Th>Email</Th>
          <Th>role</Th>
          <Th>Is Active</Th>
          <Th>Settings</Th>
        </Tr>
      </Thead>
      <Tbody>
      <Tr>
        <Td>client2</Td>
        <Td>client@mail.com</Td>
        <Td >Client </Td>
        <Td > 
        <Switch
            //   isChecked={pokeState}
            id='isChecked'
            isChecked
              colorScheme="teal"
              size="lg"
            //   onChange={() => changeState(poke.idPokemon)}
            />
        </Td>
      
      <Td>
        <Stack direction='row' spacing={2}  >
        <Button
            leftIcon={<DeleteIcon />} 
            colorScheme='pink' 
            variant='solid'
        >
        </Button>
        <Button 
    //   onClick={onOpen} 
      colorScheme='blue' 
      variant='outline'
      rightIcon={<EditIcon />}  
    >
     edit
    </Button>
    </Stack>
      </Td>
      </Tr>
       
      </Tbody>

    </Table>
    </TableContainer>

    </div>
  </>
  )
}