
import { GlobalStyle } from './styles/globalStyles';
import { RoutesMain } from './Routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AdminProvider } from './providers/AdminContext';
import { Footer } from './components/footer';
import { UserProvider } from './providers/UserContext';


function App() {
  return (
    <>
      <GlobalStyle/>
      <AdminProvider>
        <UserProvider>
          <ToastContainer/>
          <RoutesMain/>
        </UserProvider>
      </AdminProvider>
      <Footer/>
    </>
  )
}

export default App
