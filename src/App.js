import React, { useContext } from "react";
import "./Style/Style.scss"
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import { Home } from "./Pages/Home/Home";
import { List } from "./Pages/List/List";
import { Login } from "./Pages/Login/Login";
import { New } from "./Pages/New/New";
import { Single } from "./Pages/Single/Single";
import { DarkModeContext } from "./Context/darkModeContext";
import { AuthContext } from "./Context/AuthContext";
                                                                           
function App() {
  const { currentUser } = useContext(AuthContext);
  const { darkMode } = useContext(DarkModeContext);

  const RequireAuth = ({children})=>{
    return currentUser?children:<Navigate to="/login" />;
  };
  return (
    <div className={darkMode?"app dark":"app"}>
      <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route path='login' element={<Login/>}/>
          <Route index element={<RequireAuth><Home/></RequireAuth>}/>
          <Route path='users'>
            <Route  index element={<RequireAuth><List/></RequireAuth>}/>
            <Route  path='new' element={<RequireAuth><New input={userInputs} title="Add new user"/></RequireAuth>}/>
            <Route  path=':userId' element={<RequireAuth><Single/></RequireAuth>}/>
          </Route>
          <Route path='products'>
            <Route  index element={<RequireAuth><List/></RequireAuth>}/>
            <Route  path='new' element={<RequireAuth><New input={productInputs} title="Add new product"/></RequireAuth>}/>
            <Route  path=':productId' element={<RequireAuth><Single/></RequireAuth>}/>
          </Route>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
