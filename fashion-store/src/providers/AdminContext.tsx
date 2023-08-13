import { ReactNode, createContext } from "react"
import { api } from "../services/api"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { IRegisterFormData } from "../components/registerForm";

export interface IAdminContext{
    handleRegister: (formData: IRegisterFormData) => Promise<void>;
}

export interface IAdminProviderProps {
    children: ReactNode;
}

export interface IAdmin{
    email: string;
    name: string;
    id: number;
}

export interface IAdminRegisterResponse{
    acessToken: string;
    user: IAdmin;
}

export const AdminContext = createContext({} as IAdminContext)

export const AdminProvider = ({children}: IAdminProviderProps) => {

    const navigate = useNavigate()
    
    const handleRegister = async (formData: IRegisterFormData) => {
        try{
            const {data} =await api.post<IAdminRegisterResponse>("/users", formData)
            console.log(data)
            toast.success("Cadastro realizado com sucesso")
        } catch (error) {
            console.log(error)
            toast.error("Cadastro não realizado")
        }
    }

    return(
        <AdminContext.Provider value = {{handleRegister}}>
            {children}
        </AdminContext.Provider>
    )

}