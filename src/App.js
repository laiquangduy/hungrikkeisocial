import "./App.css";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { Routes, Route } from "react-router-dom";
import { useCookies } from "react-cookie";
// import SignIn from './components/Sign

function App() {
  return (
    <Routes>
      <Route path='/auth/login' element={<Login />} />
      <Route path='/auth/register' element={<SignUp />} />
    </Routes>
  );
}

export default App;
