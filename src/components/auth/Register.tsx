// import { useNavigate } from "react-router-dom";
import { Formik } from "formik";


import {
  ModalFooter,
  Button,
  VStack,
  Select,
  FormLabel,
  FormControl,
} from "@chakra-ui/react";

// import { login } from "../../interfaces/ilogin";
import { formSchema } from "../../utils/validationForm";
import { TextField } from "./components/TextField";
import { login } from "../../interfaces/ilogin";
import { useEffect, useState } from "react";
import { RoleIdFetch } from '../../utils/DataFecth';
// import { TextField } from "./components/TextField";
// import { formSchema } from "../../utils/validationForm";

export const Register: React.FC<login> = ({
  onClose,
}) => {

  // const navigate = useNavigate();
  const [roleId, setRoleId] = useState<[]>([])
  const [form, setForm] = useState<{}>({
    // name: "",
    roleId: "",
  });

  const url = import.meta.env.VITE_API_CONNECTION || "http://localhost:8440";
  
  const submitForm = (values: any, actions: any) => {
    console.log('submiteand al gran puta pero en minusculas');
   const vals = {...values}
   console.log(vals)
   actions.resetForm();
   fetch(`${url}/xcompany/auth/register`,{
   // fetch(`http://localhost:8440/xcompany/auth/login`,{
     method: "POST",
    //  credentials:"include",
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
  
  useEffect(()=> {
    RoleIdFetch().then((role) => setRoleId(role));
  },[])
  // console.log(roleId)
  return (
    <Formik
      initialValues={{ username: "", password: "", email:"", roleId:"" }}
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
          label="Email"
          type="email"
          name="email"
          placeholder="Pepito123@mail.com"
          autoComplete="off"
        />
        <FormControl>
         <FormLabel>Tipo</FormLabel>
        <Select placeholder='Seleciona Tipo de Cuenta' name="roleId">
          {
            roleId.map((role:any)=>{
              
              return <option 
                key={role.idRole} 
                value={role.idRole}>
                  {role.role_Name }
                  
              </option>
            })
          }
        </Select>
        </FormControl>
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
            Create User
          </Button>
          <Button variant="ghost" onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </VStack>
    </Formik>
  );
};
