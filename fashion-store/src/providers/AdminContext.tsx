import { ReactNode, createContext, useEffect, useState } from "react"
import { api } from "../services/api"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { IRegisterFormData } from "../components/registerForm";
import { ILoginFormData } from "../components/loginForm";
import { ICreateProducts } from "../components/modalDashboardCreate";
import { IEditProduct } from "../components/modalDashboardEdit";

export interface IAdminContext{
    handleRegister: (formData: IRegisterFormData) => Promise<void>;
    handleLogin: (formData: ILoginFormData) => Promise<void>;
    isModalCreateOpen: boolean;
    setIsModalCreateOpen: React.Dispatch<React.SetStateAction<boolean>>; 
    handleCreateProduct: (formData: ICreateProducts) => Promise<void>;
    adminProductsList: IListProducts[];
    handleDeleteProduct: (productId: number) => Promise<void>;
    handleEditProduct: (productId: number, formData: IEditProduct) => Promise<void>;
    setEditIdProduct: React.Dispatch<React.SetStateAction<IListProducts | null>>;
    editIdProduct: IListProducts | null;
    isModalEditOpen: boolean;
    setIsModalEditOpen: React.Dispatch<React.SetStateAction<boolean>>;
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
    price: string;
    description: string;
    image: string;
}

export const AdminContext = createContext({} as IAdminContext)

export const AdminProvider = ({children}: IAdminProviderProps) => {
    const [isModalCreateOpen, setIsModalCreateOpen] = useState(false)
    const [isModalEditOpen, setIsModalEditOpen] = useState(false)
    const [adminProductsList, setAdminProductsList] = useState<IListProducts[]>([])
    const [editIdProduct, setEditIdProduct] = useState<IListProducts | null>(null)

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
            setAdminProductsList([...adminProductsList, data])
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
                setAdminProductsList(data)
            } catch (error) {
                console.log(error)
            }
        }
        handleReadProducts()
    }, [])

    const handleDeleteProduct = async (productId: number) => {
        const token = localStorage.getItem("@FashionStore:token")
        try{
            await api.delete(`/products/${productId}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            const deletedProduct = adminProductsList.filter((product) => product.id !== productId)
            setAdminProductsList(deletedProduct)
            toast.success("Produto deletado com sucesso")
        } catch (error) {
            console.log(error)
        }
    }

    const handleEditProduct = async(productId: number, formData: IEditProduct) => {
        const token = localStorage.getItem("@FashionStore:token")
        try{
            const {data} = await api.patch(`/products/${productId}`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }) 
            const editedProduct = adminProductsList.map((product) => {
                if(productId === product.id){
                    return {...product, ...formData}
                } else {
                    return product
                }
            })
            console.log(data)
            setAdminProductsList(editedProduct)
            toast.success("Produto editado com sucesso")
        } catch (error) {
            console.log(error)
        }
    }


    return(
        <AdminContext.Provider value = {{handleRegister, handleLogin, isModalCreateOpen, setIsModalCreateOpen, handleCreateProduct, adminProductsList, handleDeleteProduct, handleEditProduct, setEditIdProduct, editIdProduct, setIsModalEditOpen, isModalEditOpen}}>
            {children}
        </AdminContext.Provider>
    )

}