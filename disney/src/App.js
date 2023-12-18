import './App.css';
import Login from './components/Login'
import Header from './components/Header'
import Home from './components/Home';
import {Route,Routes, BrowserRouter} from "react-router-dom"
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Header/>
      <Routes>
      <Route path="/"element={<Login />}></Route>
      <Route path="/home"element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
