import './App.css';
import Login from './components/Login'
import Header from './components/Header'
import {Route,Routes, BrowserRouter} from "react-router-dom"
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Header/>
      <Routes>
      <Route path="/"element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
