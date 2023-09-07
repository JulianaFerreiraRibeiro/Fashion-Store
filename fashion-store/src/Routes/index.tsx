import { AdminDashboardCreateProductsPage } from '../pages/adminProductsPage';
import { AdminDashboardPage } from '../pages/adminDashboardHomePage';
import { LoginPage } from '../pages/loginPage';
import { RegisterPage } from '../pages/registerPage/index';
import { Route, Routes } from 'react-router-dom';
import { UserDashboardPage } from '../pages/userDashboardPage';
import { ProductPage } from '../pages/productPage';
import { AdminProvider } from '../providers/AdminContext';
import { ProtectedPages } from './ProtectedRoutes';

export const RoutesMain = () => {
   return(
    <>
        <Routes>
                <Route path="/register" element={<RegisterPage/>}/>
                <Route path = "/login" element = {<LoginPage/>} /> 
                <Route path = "/" element = {<UserDashboardPage/>}/>
                <Route path="/product" element = {<ProductPage/>}/>
                <Route path = "/dashboard" element={ 
                    <AdminProvider>
                        <ProtectedPages/>
                    </AdminProvider>
                
                }>
                    <Route index element = {<AdminDashboardPage/>}/>
                    <Route path = "/dashboard/products" element ={<AdminDashboardCreateProductsPage/>}/>
                </Route>
        </Routes>
    </>
   )
}