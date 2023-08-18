import { StyledInput } from "../../styles/input"
import {UseFormRegisterReturn} from "react-hook-form"
import { Paragraph } from "../typography";

export type tInput = "medium" | "big";
interface IInputProps{
    type: "text" | "number" | "email";
    placeholder: string;
    register: UseFormRegisterReturn<string>;
    error?: string;
    inputsize: tInput;
}

export const Input = ({type, placeholder, register, error, inputsize}: IInputProps) => {
    return(
        <>
            <StyledInput type={type} placeholder={placeholder} {...register} inputsize = {inputsize}/>
            <Paragraph>{error}</Paragraph>
        </>
    )
} 