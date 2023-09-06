import { useForm } from "react-hook-form"
import { Input } from "../input"
import { useContext } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { ILoginFormValues, schema } from "./loginSchema";
import { StyledLoginForm } from "./styles";
import { StyledButton } from './../../styles/button';
import { Link } from "react-router-dom";
import { SessionContext } from "../../providers/SessionContext";

export interface ILoginFormData{
    email: string;
    password: string;
}

export const LoginForm = () => {
    const {handleSubmit, register, reset, formState: {errors}} = useForm<ILoginFormValues>({
        resolver: zodResolver(schema)
    })
    const {handleLogin} = useContext(SessionContext)

    const submit = async (formData: ILoginFormData) => {
        await handleLogin(formData)
        reset()
    }

    return(
        <StyledLoginForm onSubmit={handleSubmit(submit)}>
            <Input type = "email" placeholder = "EMAIL" error = {errors.email?.message} register={register("email")} inputsize="medium"/>
            <Input type = "password" placeholder = "SENHA" error = {errors.password?.message} register={register("password")} inputsize="medium"/>
            <div className = "buttonsSection">
               <StyledButton buttoncolor = "black" buttonsize = "small">ACESSAR</StyledButton>
               <Link to = "/register">
                <StyledButton buttoncolor = "white" buttonsize = "medium">CADASTRE-SE</StyledButton> 
               </Link>
            </div>
        </StyledLoginForm>
    )
}