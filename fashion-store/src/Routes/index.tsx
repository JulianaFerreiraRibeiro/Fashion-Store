import { AdminDashboardCreateProductsPage } from '../pages/adminCreateDashboardPage';
import { AdminDashboardPage } from '../pages/adminDashboardHomePage';
import { LoginPage } from '../pages/loginPage';
import { RegisterPage } from '../pages/registerPage/index';
import { Route, Routes } from 'react-router-dom';

export const RoutesMain = () => {
   return(
    <>
        <Routes>
                <Route path="/register" element={<RegisterPage/>}/>
                <Route path = "/login" element = {<LoginPage/>} /> 
                <Route path = "/dashboard" element={<AdminDashboardPage/>}/>
                <Route path = "/dashboard/products" element={<AdminDashboardCreateProductsPage/>}/>
        </Routes>
    </>
   )
}