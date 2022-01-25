import { BrowserRouter, Route } from "react-router-dom";
import Home from "../pages/home";

function OtherRoutes() {
  return (
    <BrowserRouter>
      <Route path="/home" component={Home} />
    </BrowserRouter>
  )
}

export default OtherRoutes;