import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";

import {
  // ModalBody,
  ModalFooter,
  Button,
  VStack,
} from "@chakra-ui/react";

import { login } from "../../interfaces/ilogin";
import { TextField } from "./components/TextField";

export const Login: React.FC<login> = ({
  onClose,
  // initialRef
}) => {

  const navigate = useNavigate()

  // const formik = useFormik({

  // })

  return (
    <Formik
      initialValues={{ username: "", password: "" }}
      validationSchema={Yup.object({
        username: Yup.string().required("User Name is required!"),
        password: Yup.string().required("Password is required!"),
      })}
      onSubmit={(values, actions) => {
        alert(JSON.stringify(values, null, 2));
        actions.resetForm();
      }}
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
          <Button type="submit" onClick={() => navigate("/actividades")} colorScheme="teal" mr={3}>
            Login
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </VStack>
    </Formik>
  );
};
