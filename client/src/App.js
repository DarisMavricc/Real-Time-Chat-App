import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Home} from './Home/Home'
import {Login} from './Login/Login'
import {Register} from './Register/Register'
import "./App.css"

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
