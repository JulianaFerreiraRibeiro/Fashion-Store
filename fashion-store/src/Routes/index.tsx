import { LoginPage } from '../pages/loginPage';
import { RegisterPage } from '../pages/registerPage/index';
import { Route, Routes } from 'react-router-dom';

export const RoutesMain = () => {
   return(
    <>
        <Routes>
                <Route path="/register" element={<RegisterPage/>}/>
                <Route path = "/login" element = {<LoginPage/>} /> 
        </Routes>
    </>
   )
}