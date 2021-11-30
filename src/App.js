import "./App.css";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import ButtonAppBar from "./components/AppBar/appBar";
import FetchData from "./components/Fetch/FetchData";
import HomePage from "./components/Home/HomePage";

function App() {
  return (
    <div className="App">
      <ButtonAppBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element= {<HomePage/>}/>
          <Route path="/weather" element={<FetchData/>}/> 


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
