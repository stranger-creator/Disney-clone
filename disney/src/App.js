import './App.css';
import Login from './components/Login'
import {Route,Routes, BrowserRouter} from "react-router-dom"
function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
      <Route path="/"element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
