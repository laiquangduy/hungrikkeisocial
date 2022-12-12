import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import NavigateBar from "./components/NavigateBar";

function App() {
  return (
    <>
      <NavigateBar/>
      <Routes>
        <Route path='/feed' />
        <Route path='/mynetwork' />
        <Route path='/jobs' />
        <Route path='/messaging' />
        <Route path='/notifications' />
      </Routes>
    </>
  );
}

export default App;
