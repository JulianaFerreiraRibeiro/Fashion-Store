
import { GlobalStyle } from './styles/globalStyles';
import { RoutesMain } from './Routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Header } from './components/header';
import { Footer } from './components/footer';


function App() {
  return (
    <>
      <Header/>
      <GlobalStyle/>
      <ToastContainer/>
      <RoutesMain/>
      <Footer/>
    </>
  )
}

export default App
