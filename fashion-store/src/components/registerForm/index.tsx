import { useContext } from "react"
import { Input } from "../input"
import { StyledRegisterForm } from "./style"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { IRegisterFormValues, schema } from "./registerSchema"
import { StyledButton } from "../../styles/button"
import { SessionContext } from "../../providers/SessionContext"

export interface IRegisterFormData{
    name: string;
    email: string;
    password: string;
    confirm: string;
}

export const RegisterForm = () => {
    const {handleRegister} = useContext(SessionContext)

    const {register, handleSubmit, reset, formState: {errors}} = useForm<IRegisterFormValues>({
        resolver: zodResolver(schema)
    })

    const submit = async (formData: IRegisterFormData) => {
        console.log(formData)
        await handleRegister(formData)
        reset()
    }

    return(
        <StyledRegisterForm onSubmit={handleSubmit(submit)}>
            <Input type = "text" placeholder="NOME" register = {register("name")} error={errors.name?.message} inputsize="medium"/>
            <Input type = "email" placeholder="EMAIL" register = {register("email")} error={errors.email?.message} inputsize="medium"/>
            <Input type = "password" placeholder="SENHA" register = {register("password")} error={errors.password?.message} inputsize="medium"/>
            <Input type = "password" placeholder="CONFIRMAR SENHA" register = {register("confirm")} error={errors.confirm?.message} inputsize="medium"/>
            <StyledButton buttonsize = "medium" buttoncolor = "black">CADASTRAR-SE</StyledButton>
        </StyledRegisterForm>
    )
}