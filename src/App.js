import "react-toastify/dist/ReactToastify.css"; 
import { ToastContainer } from "react-toastify";
import ContextProvider from "./context/userContext";

import { GlobalStyle } from './style/core'
import Routes from "./routes";

function App() {
  return (
    <ContextProvider>
      <Routes />
      <GlobalStyle />
      <ToastContainer theme="colored"/>
    </ContextProvider>
  );
}

export default App;
