import { ReactNode, createContext, useEffect, useState } from "react"
import { api } from "../services/api"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { IRegisterFormData } from "../components/registerForm";
import { ILoginFormData } from "../components/loginForm";
import { ICreateProducts } from "../components/modalDashboardCreate";

export interface IAdminContext{
    handleRegister: (formData: IRegisterFormData) => Promise<void>;
    handleLogin: (formData: ILoginFormData) => Promise<void>;
    isModalCreateOpen: boolean;
    setIsModalCreateOpen: React.Dispatch<React.SetStateAction<boolean>>; 
    handleCreateProduct: (formData: ICreateProducts) => Promise<void>;
    productsList: IListProducts[];
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
    accessToken: string;
    user: IAdmin;
}

export interface IListProducts {
    id: number;
    name: string;
    price: number;
    description: string;
    image:string;
}

export const AdminContext = createContext({} as IAdminContext)

export const AdminProvider = ({children}: IAdminProviderProps) => {
    const [isModalCreateOpen, setIsModalCreateOpen] = useState(false)
    const [productsList, setProductsList] = useState<IListProducts[]>([])

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
            localStorage.setItem("@FashionStore:token", data.accessToken)
            toast.success("Login realizado com sucesso")
            navigate("/dashboard")
        } catch (error) {
            console.log(error)
            toast.error("Login não realizado")
        }
    }

    const handleCreateProduct = async(formData: ICreateProducts) => {
        const token = localStorage.getItem("@FashionStore:token")
        try{
            const {data} = await api.post("/products", formData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            setProductsList([...productsList, data])
            console.log(data)
            toast.success("Produto criado com sucesso")
        } catch (error) {
            console.log(error)
            toast.error("Produto não foi criado")
        }
    }

    useEffect(() => {
        const handleReadProducts = async () => {
            try{
                const {data} = await api.get("/products")
                setProductsList(data)
            } catch (error) {
                console.log(error)
            }
        }
        handleReadProducts()
    }, [])


    return(
        <AdminContext.Provider value = {{handleRegister, handleLogin, isModalCreateOpen, setIsModalCreateOpen, handleCreateProduct, productsList}}>
            {children}
        </AdminContext.Provider>
    )

}