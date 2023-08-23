import { StyledInput } from "../../styles/input"
import {UseFormRegisterReturn} from "react-hook-form"
import { Paragraph } from "../typography";

export type tInput = "medium" | "big";
interface IInputProps{
    type: "text" | "number" | "email" | "password";
    placeholder: string;
    register: UseFormRegisterReturn<string>;
    error?: string;
    defaultValue?: string;
    inputsize: tInput;
}

export const Input = ({type, placeholder, register, error, inputsize, defaultValue}: IInputProps) => {
    return(
        <>
            <StyledInput type={type} placeholder={placeholder} {...register} inputsize = {inputsize} defaultValue = {defaultValue}/>
            <Paragraph>{error}</Paragraph>
        </>
    )
} 