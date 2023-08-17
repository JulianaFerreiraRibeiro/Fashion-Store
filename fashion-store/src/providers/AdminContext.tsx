import { ReactNode, createContext } from "react"
import { api } from "../services/api"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { IRegisterFormData } from "../components/registerForm";
import { ILoginFormData } from "../components/loginForm";

export interface IAdminContext{
    handleRegister: (formData: IRegisterFormData) => Promise<void>;
    handleLogin: (formData: ILoginFormData) => Promise<void>;
}

export interface IAdminProviderProps {
    children: ReactNode;
}

export interface IAdmin{
    email: string;
    name: string;
    id: number;
}

export interface IAdminResponse{
    acessToken: string;
    user: IAdmin;
}

export const AdminContext = createContext({} as IAdminContext)

export const AdminProvider = ({children}: IAdminProviderProps) => {

    const navigate = useNavigate()
    
    const handleRegister = async (formData: IRegisterFormData) => {
        try{
            const {data} = await api.post<IAdminResponse>("/users", formData)
            console.log(data)
            toast.success("Cadastro realizado com sucesso")
            navigate("/login")
        } catch (error) {
            console.log(error)
            toast.error("Cadastro não realizado")
        }
    }

    const handleLogin = async (formData: ILoginFormData) => {
        try{
            const {data} = await api.post<IAdminResponse>("/login", formData)
            console.log(data)
            toast.success("Login realizado com sucesso")
            navigate("/dashboard")
        } catch (error) {
            console.log(error)
            toast.error("Login não realizado")
        }
    }

    return(
        <AdminContext.Provider value = {{handleRegister, handleLogin}}>
            {children}
        </AdminContext.Provider>
    )

}