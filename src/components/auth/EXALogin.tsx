import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
import { useAccountUser } from "../../hooks/useAccountUser";

import {
  ModalFooter,
  Button,
  VStack,
  Text,
} from "@chakra-ui/react";

import { login } from "../../interfaces/ilogin";
import { TextField } from "./components/TextField";
import { formSchema } from "../../utils/validationForm";
import { useState } from "react";


export const Login: React.FC<login> = ({
  onClose,
}) => {

  const navigate = useNavigate();
  const [ errorSigUp, setErrorSigUp ] = useState< null | any>(null)
  // const url = import.meta.env.VITE_API_CONNECTION || "http://localhost:8440";
  const { setUser } = useAccountUser()

  const submitt = (values:any, actions:any) => {
     console.log('submiteand al gran puta pero en minusculas');
    const vals = {...values}
    console.log(vals+ '------------------ VALUES')
    actions.resetForm();
    // fetch(`${url}/xcompany/auth/login`,{
    fetch(`http://localhost:8440/xcompany/auth/login`,{
      method: "POST",
      // credentials:"include",
      headers:{
          "Content-Type": "application/json"
      },
      body: JSON.stringify(vals)
    })
      .catch( err => {
        console.log(`${err} ------- IN FORM POST`);
        return;
      })
      .then( res => {
        if(!res || !res.ok || res.status >= 400){
          return
        }
        return res.json()
      })
      .then( (data:any) => {
        if( !data ) return;

        setUser({...data})
        // console.log(setUser)
        if(data.status){
            setErrorSigUp(data.status)
        }else if( data.loggedIn){
            console.log(data + '---------------DATA LOGGEDIN');
            navigate('/actividades')
        }
      })
  }

  return (
    <Formik
      initialValues={{ username: "", password: "" }}
      validationSchema={formSchema}
      onSubmit={submitt}
    >
      <VStack
        as="form"
        w={{
          base: "90%",
          md: "400px",
        }}
        m="auto"
      >
        <Text as="p" color="red.500"> { errorSigUp }</Text>
        <TextField
          label="User name"
          type="text"
          name="username"
          placeholder="Pepito123"
          autoComplete="off"
        />
        <TextField
          label="Password"
          type="password"
          name="password"
          placeholder="1234!@#"
          autoComplete="off"
        />
        <ModalFooter>
          <Button type="submit" colorScheme="teal" mr={3}>
          {/* onClick={() => navigate("/actividades")}  */}
            Login
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </VStack>
    </Formik>
  );
};
