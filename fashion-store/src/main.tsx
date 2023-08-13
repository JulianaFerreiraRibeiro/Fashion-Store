import { GlobalStyle } from './styles/globalStyles';
import { RoutesMain } from './Routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <>
      <GlobalStyle/>
      <ToastContainer/>
      <RoutesMain/>
    </>
  )
}

export default App