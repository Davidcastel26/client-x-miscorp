import * as Yup from "yup";

export const formSchema = Yup.object({
    username: Yup.string().
        required("User Name is required!"),
    password: Yup.string().
        required("Password is required!"),
})