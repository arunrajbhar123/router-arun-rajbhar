import Home from "./components/home/Home.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import { Routes, Route,  } from "react-router-dom";
import Store from "./components/store/Store.jsx";
import NotFound from "./components/404/NotFound.jsx";
import Bottom from "./components/navbar/Bottom.jsx";
import Support from "./components/support/Support.jsx";
import Iphone from "./components/iphone/Iphone.jsx";
import NoMatchExample from "./components/Demo.jsx"
function App() {
  return (
    <div className="App">
      <Navbar />
    
        <Routes>
          <Route exact path="" element={<Home />} />
          <Route path="store/" element={<Store />} />
          <Route path="support/" element={<Support />} />
          <Route path="iphone/" element={<Iphone />} />
          <Route path="*" element={<NotFound />}/>
         
        </Routes>

    
        <Bottom/>
    </div>
  );
}

export default App;
