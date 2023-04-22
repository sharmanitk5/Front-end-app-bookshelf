import logo from "./logo.svg";
import "./App.css";

import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Signin from "./Login/Signin";
import Signout from "./Logout/Signout";
import Signup from "./Login/Signup";
import Home from "./Components/Home";
import BookList from "./Components/BookList";
import Mybooks from "./Components/Mybooks";
import Addbooks from "./Components/Addbooks";
import Community from "./Components/Community";
import Friends from "./Components/Friends";

import Library from "./Components/Library";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={"/booklist/:category"} element={<BookList />}></Route>
        <Route path={"/home"} element={<Home />}></Route>
        <Route path={"*"} element={<Home />}></Route>
        <Route path={"/Signin"} element={<Signin />}></Route>
        <Route path={"/Signout"} element={<Signout />}></Route>
        <Route path={"/Signup"} element={<Signup />}></Route>
        <Route path={"/Mybooks"} element={<Mybooks />}></Route>
        <Route path={"/Addbooks"} element={<Addbooks />}></Route>
        <Route path={"/Community"} element={<Community />}></Route>
        <Route path={"/Friends"} element={<Friends />}></Route>

        <Route path={"/library"} element={<Library />}></Route>
      </Routes>
    </div>
  );
}

export default App;
