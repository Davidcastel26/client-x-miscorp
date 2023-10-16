import { TextFiledProps } from "../../../interfaces/ilogin"
import {
    Field,
    useField} from "formik"
import {
    FormControl,
    FormErrorMessage,
    FormLabel,
    } from '@chakra-ui/form-control'
import { Input } from '@chakra-ui/input'

export const TextField: React.FC<TextFiledProps> = ({
    label,
    name,
    placeholder,
    autoComplete,
    type
}) => {

    const [field, meta] = useField(name);

    const isBoolean = meta.touched && meta.error ? true : false;

  return (
    <FormControl isInvalid={isBoolean}>
        <FormLabel>{label}</FormLabel>
        <Input 
            as={Field}
            {...field}
            name={name}
            placeholder={placeholder}
            autoComplete={autoComplete}
            type={type}
        />
        <FormErrorMessage>{meta.error}</FormErrorMessage>
    </FormControl>
  )
}
