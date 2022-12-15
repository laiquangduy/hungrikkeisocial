
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import NavigateBar from "./components/NavigateBar";
import Jobs from "./components/Jobs";

function App() {
  return (
    <>
      <NavigateBar/>
      <div className="container-page">
      <Routes>
        <Route path='/feed' />
        <Route path='/mynetwork' />
        <Route path='/jobs' element={<Jobs/>}/>
        <Route path='/messaging' />
        <Route path='/notifications' />
      </Routes>
      </div>
    </>
  );
}

export default App;
