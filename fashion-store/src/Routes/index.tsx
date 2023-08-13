import { RegisterPage } from '../pages/registerPage/index';
import { Route, Routes } from 'react-router-dom';
import { AdminProvider } from '../providers/AdminContext';

export const RoutesMain = () => {
   return(
    <>
        <Routes>
                <Route path="/register" element={
                    <AdminProvider>
                        <RegisterPage/>
                    </AdminProvider>
                }/>
        </Routes>
    </>
   )
}