import { ReactNode, createContext, useState } from "react";
import { api } from "../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { IRegisterFormData } from "../components/registerForm";
import { ILoginFormData } from "../components/loginForm";
import { IAdmin } from "./AdminContext";

export interface ISessionProviderProps {
    children: ReactNode;
}

export interface ISessionContext {
    handleRegister: (formData: IRegisterFormData) => Promise<void>;
    handleLogin: (formData: ILoginFormData) => Promise<void>;
    admin: ISessionResponse | null;
}

export interface ISessionResponse{
    accessToken: string;
    user: IAdmin;
}

export const SessionContext = createContext({} as ISessionContext)

export const SessionProvider = ({children}: ISessionProviderProps) => {
    const [admin, setAdmin] = useState<ISessionResponse | null>(null)

    const navigate = useNavigate()

    const handleRegister = async (formData: IRegisterFormData) => {
        try{
            await api.post<ISessionResponse>("/users", formData)
            toast.success("Cadastro realizado com sucesso")
            navigate("/login")
        } catch (error) {
            console.log(error)
            toast.error("Cadastro não realizado")
        }
    }

    const handleLogin = async (formData: ILoginFormData) => {
        try{
            const {data} = await api.post<ISessionResponse>("/login", formData)
            setAdmin(data)
            console.log(admin)
            localStorage.setItem("@FashionStore:token", data.accessToken)
            toast.success("Login realizado com sucesso")
            navigate("/dashboard")
        } catch (error) {
            console.log(error)
            toast.error("Login não realizado")
        }
    }


    return(
        <SessionContext.Provider value ={{handleRegister, handleLogin, admin}} >
            {children}
        </SessionContext.Provider>
    )
}