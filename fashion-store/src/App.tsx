
import { GlobalStyle } from './styles/globalStyles';
import { RoutesMain } from './Routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Header } from './components/header';
import { AdminProvider } from './providers/AdminContext';


function App() {
  return (
    <>
      <GlobalStyle/>
      <AdminProvider>
        <Header/>
        <ToastContainer/>
        <RoutesMain/>
      </AdminProvider>
    </>
  )
}

export default App
