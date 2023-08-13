import { StyledInput } from "../../styles/input"
import {UseFormRegisterReturn} from "react-hook-form"

interface IInputProps{
    type: string;
    placeholder: string;
    register: UseFormRegisterReturn<string>;
    error?: string;
}

export const Input = ({type, placeholder, register, error}: IInputProps) => {
    return(
        <>
            <StyledInput type={type} placeholder={placeholder} {...register}/>
            <p>{error}</p>
        </>
    )
} 