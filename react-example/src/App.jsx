import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { ServiceA } from "./components/ServiceA";
import { ServiceB } from "./components/ServiceB";
import { ServiceC } from "./components/ServiceC";
import { Comunication } from "./components/Comunication";
import { NavBar } from "./Layouts/NavBar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBar />}>
            <Route index element={ <Home /> } />
            <Route path="ServiceA" element={<ServiceA />} />
            <Route path="ServiceB" element={<ServiceB />} />
            <Route path="ServiceC" element={<ServiceC />} />
            <Route path="Comunication" element={<Comunication />} />
            <Route path='*' element={ <Navigate replace to="/"/> }/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
