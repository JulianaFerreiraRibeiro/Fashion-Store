import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { SessionContext } from "../../providers/SessionContext"

export const ProtectedPages = () => {
    const {admin} = useContext(SessionContext)

    return admin ? <Outlet/> : <Navigate to = "/"/>
}