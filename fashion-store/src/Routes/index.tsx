import { AdminDashboardCreateProductsPage } from '../pages/adminProductsPage';
import { AdminDashboardPage } from '../pages/adminDashboardHomePage';
import { LoginPage } from '../pages/loginPage';
import { RegisterPage } from '../pages/registerPage/index';
import { Route, Routes } from 'react-router-dom';
import { UserDashboardPage } from '../pages/userDashboardPage';
import { ProductPage } from '../pages/productPage';

export const RoutesMain = () => {
   return(
    <>
        <Routes>
                <Route path="/register" element={<RegisterPage/>}/>
                <Route path = "/login" element = {<LoginPage/>} /> 
                <Route path = "/dashboard" element={<AdminDashboardPage/>}/>
                <Route path = "/dashboard/products" element={<AdminDashboardCreateProductsPage/>}/>
                <Route path = "/" element = {<UserDashboardPage/>}/>
                <Route path="/product" element = {<ProductPage/>}/>
        </Routes>
    </>
   )
}