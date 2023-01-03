import { useEffect, useState } from "react";
import Axios from "axios";
import Css from './Css.css'

function App() {
 
  const [data, setData] = useState([]);
  useEffect(() => {
    Axios.get('http://127.0.0.1:8000/student/').then((res) => setData(res.data));}, []);
   return (
    <div className="App">
      {data.map((value) => 
        
        
    <div>
         
           <p className="head">Student Name= {value.stud_name}</p> 
          <p>Grade= { value.grade}</p>
        <br></br>
          
        </div>
      
      )}
      
    {}
    </div>
  );
}

export default App;

