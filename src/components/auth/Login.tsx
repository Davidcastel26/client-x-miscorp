import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { Formik } from "formik";
import { useAccountUser } from "../../hooks/useAccountUser";

import {
  ModalFooter,
  Button,
  // VStack,
  Text,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";

import { login } from "../../interfaces/ilogin";
// import { TextField } from "./components/TextField";
// import { formSchema } from "../../utils/validationForm";

export const Login: React.FC<login> = ({
  onClose,
}) => {

  const navigate = useNavigate();
  const [ errorSigUp, setErrorSigUp ] = useState< null | any>(null)
  const url = import.meta.env.VITE_API_CONNECTION || "http://localhost:8440";
  const { user, setUser } = useAccountUser()
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
 
  const onChange = (e:any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();

    fetch(`${url}/xcompany/auth/login`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).catch( err => {
      console.log(`${err} ------- IN FORM POST`);
      return;
    }).then((data:any) => {
      if( !data ) return;

      setUser({...data})
      // console.log(typeof data.status)
      console.log(typeof data.statusText)
      if(data.status === 400 ){
          setErrorSigUp(data.statusText)
      }
      // else if( data.loggedIn ){
          // onClose()
          // 'onclick'={(e) => onClose(e)}
      return navigate('/actividades')
      // }
      
    })
  };

  return (
    <form onSubmit={handleSubmit}>
        <Text as="p" color="red.500"> { errorSigUp }</Text>
        <FormControl>
        <FormLabel>Name: </FormLabel>
        <Input
          type="text"
          name="username"
          id="username"
          value={formData.username}
          onChange={onChange}
          placeholder="User Name"
          autoComplete="off"
        />
        </FormControl>
        <FormControl>
        <FormLabel>Password: </FormLabel>
        <Input
          type="password"
          name="password"
          id="password"
          value={formData.password}
          onChange={onChange}
          placeholder="Password"
          autoComplete="off"
        />
        </FormControl> 
        <ModalFooter>
        <Button colorScheme="blue" type="submit" >
            Login
          </Button>
          <Button variant="ghost" mr={3} onClick={onClose}>
            Cancel
          </Button>
        </ModalFooter>
    </form>
  );
};
