import Navbar from "./components/navbar/Navbar";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import Login from "./components/login/Login";
import Registration from "./components/registration/Registration";
import Main from "./components/main/Main";

import {AuthContext} from "./context/AuthContext";
import {useAuth} from "./hooks/auth.hook";


function App() {
    const {login, logout, token, userID, isReady} = useAuth()
    const isLogin = !!token

  return (
      <AuthContext.Provider value={{login, logout, token, userID, isReady, isLogin}}>
          <BrowserRouter>
              <Navbar/>
              {isLogin ?
                  <Switch>
                      <Route path='/' exact render={() => <Main/>} />
                      <Redirect to='/' />
                  </Switch>
                  :
                  <Switch>
                      <Route path='/login' render={() => <Login/>} />
                      <Route path='/reg' render={() => <Registration/>} />
                      <Redirect to='/login' />
                  </Switch>

              }

          </BrowserRouter>
      </AuthContext.Provider>


  );
}

export default App;
