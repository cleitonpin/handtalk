import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import Login from "../pages/Login";
import Singup from "../pages/Signup";

function SignInRoutes() {
  return (
    <BrowserRouter>
      <Route path="/" component={Login} />
      <Route path="/create" component={Singup} />
    </BrowserRouter>
  )
}

export default SignInRoutes;