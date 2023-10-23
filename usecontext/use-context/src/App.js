
import './App.css';
import {useState ,createContext} from 'react'
import GetName from "./UseContext/GetName"
import DisplayName from "./UseContext/DisplayName"

export const AppContext = createContext(null);


export default function App() {
  const [name,setName] = useState("");
  return (
    <div className='App'>
      <div><h1>useContext Hook</h1></div>
      <br></br>
      <AppContext.Provider value={{name,setName}}>
      <GetName/>
      <br></br>
      <br></br>
      <DisplayName/>
      
      </AppContext.Provider>

    </div>
  );
}

