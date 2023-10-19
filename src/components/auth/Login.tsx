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
  const { setUser } = useAccountUser()
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  // const formRef = useRef<HTMLFormElement>(null);
  
  // const submitt = (values:any, actions:any) => {
  //    console.log('submiteand al gran puta pero en minusculas');
  //   const vals = {...values}
  //   console.log(vals+ '------------------ VALUES')
  //   actions.resetForm();
  //   // fetch(`${url}/xcompany/auth/login`,{
  //   fetch(`http://localhost:8440/xcompany/auth/login`,{
  //     method: "POST",
  //     // credentials:"include",
  //     headers:{
  //         "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify(vals)
  //   })
  //     .catch( err => {
  //       console.log(`${err} ------- IN FORM POST`);
  //       return;
  //     })
  //     .then( res => {
  //       if(!res || !res.ok || res.status >= 400){
  //         return
  //       }
  //       return res.json()
  //     })
  //     .then( (data:any) => {
  //       if( !data ) return;

  //       setUser({...data})

  //       if(data.status){
  //           setErrorSigUp(data.status)
  //       }else if( data.loggedIn){
  //           console.log(data + '---------------DATA LOGGEDIN');
  //           navigate('/actividades')
  //       }
  //     })
  // }

  const onChange = (e:any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    fetch(`${url}/xcompany/auth/login`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((data:any) => {
      if( !data ) return;

      setUser({...data})
      navigate('/actividades')
      console.log(data)
      if(data.status){
          setErrorSigUp(data.status)
          
      }
      else if( data.loggedIn){
          console.log(data + '---------------DATA LOGGEDIN');
          
      }
      
    }).catch( err => {
      console.log(`${err} ------- IN FORM POST`);
      return;
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
        <Button colorScheme="blue" type="submit" onClick={onClose}>
            Login
          </Button>
          <Button variant="ghost" mr={3} onClick={onClose}>
            Cancel
          </Button>
          {/* <Button type="submit" colorScheme="teal" mr={3}>
            Login
          </Button>
          <Button onClick={onClose}>Cancel</Button> */}
        </ModalFooter>
    </form>
  );
};
