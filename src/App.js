// import logo from './logo.svg';
import Home from './components/home/Home.jsx';
import Navbar from './components/navbar/Navbar.jsx';
import {Routes,Route} from 'react-router-dom';
import Store from './components/store/Store.jsx'
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="" element={<Home/>}/>
        <Route path="/store" element={<Store/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
