// import { useState } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/layout/Header/Header";
// import Intro from "./components/views/Intro/Intro";
import Home from "./components/views/Home/Home";
import Stats from "./components/views/Stats/Stats";
import UserList from "./components/views/UserList/UserList";
import Login from "./components/views/Login/Login";
import Register from "./components/views/Register/Register";

const App = () => {
  // const [isIntro, setIsIntro] = useState(true);

  return (
    <>
      {/* {isIntro && <Intro setIsIntro={setIsIntro} />} */}
      <Header />
      <main>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/statystyki">
            <Stats />
          </Route>
          <Route path="/twoja-lista">
            <UserList />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
        </Switch>
      </main>
    </>
  );
};

export default App;
