import { GlobalStyle } from './styles/globalStyles';
import { RoutesMain } from './Routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Footer } from './components/footer';
import { UserProvider } from './providers/UserContext';
import { SessionProvider } from './providers/SessionContext';


function App() {
  return (
    <>
      <GlobalStyle/>
      <SessionProvider>
        <UserProvider>
          <ToastContainer/>
          <RoutesMain/>
        </UserProvider>
      </SessionProvider>
      <Footer/>
    </>
  )
}

export default App
