import { useNavigate } from "react-router-dom";
import { Formik } from "formik";


import {
  ModalFooter,
  Button,
  VStack,
} from "@chakra-ui/react";

import { login } from "../../interfaces/ilogin";
import { TextField } from "./components/TextField";
import { formSchema } from "../../utils/validationForm";

export const Login: React.FC<login> = ({
  onClose,
}) => {

  // const navigate = useNavigate();

  const url = import.meta.env.VITE_API_CONNECTION || "http://localhost:8440";
 
  const submitForm = (values: any, actions: any) => {
     console.log('submiteand al gran puta pero en minusculas');
    const vals = {...values}
    console.log(vals)
    actions.resetForm();
    fetch(`${url}/xcompany/auth/login`,{
    // fetch(`http://localhost:8440/xcompany/auth/login`,{
      method: "POST",
      credentials:"include",
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

        console.log(data +' ------- POST DATA DONE')
        
      })
  }

  return (
    <Formik
      initialValues={{ username: "", password: "" }}
      validationSchema={formSchema}
      onSubmit={submitForm}
    >
      <VStack
        as="form"
        w={{
          base: "90%",
          md: "400px",
        }}
        m="auto"
      >
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
