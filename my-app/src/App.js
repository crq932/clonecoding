import logo from './logo.svg';
import './App.css';
import {Routes, Route, Link} from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import Login from './components/Login'
function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Main/>} />
      <Route path="/login" element={<Login/>}/>
    </Routes>
    </>
  );
}

export default App;
