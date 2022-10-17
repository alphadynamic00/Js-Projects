import {
  Routes,
  Route
} from "react-router-dom";
import Imptodos from './components/Imptodos';
import Navbar from './components/Navbar';
import Todos from './components/Todos';

function App() {

  

  

  return (
    <div className="App">
      <Navbar />
      <Routes >
         <Route exact path="/" element={<Todos />} />
         <Route exact path="/imp" element={<Imptodos />} />    
        </Routes>
      {/* <Textbox /> */}
      {/* <hr /> */}
      
      {/* {console.log(data)} */}
    </div>
  );
}

export default App;
