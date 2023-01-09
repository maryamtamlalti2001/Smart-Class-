import Home from "./Pages/home/Home"
import Login from "./Pages/login/Login"
import New from "./Pages/new/New"
import Filiere from "./Pages/list/Filiere"
import Single from "./Pages/single/Single"
import Cloud from "./Pages/list/Cloud"
import Cours from "./Pages/list/Cours"
import {
  Route,
  BrowserRouter,
  Routes,
  Navigate,
} from "react-router-dom";
import { userInputs } from "./formSource"
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext"
import AbscenceList from "./Pages/list/AbscenceList"

function App() {
  const {currentUser} = useContext(AuthContext)
  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };
  
  return (
    <div className="App">
      
      <BrowserRouter>
      <Routes>
        <Route path="/" >
        <Route path="login" element={<Login/>}/>
        <Route index element ={<RequireAuth><Home/></RequireAuth>}/>
        <Route path="Users">
          <Route index element={<RequireAuth><Filiere/></RequireAuth>}/>
          <Route path="cloud" element={<Cloud/>}/>
          <Route path="courses" element={<Cours/>}/>
          <Route path="Abscence" element={<AbscenceList/>}/>
          <Route path="cloud/new" element={<New inputs={userInputs} title="Add new student"/>}/>
          <Route path="cloud/single" element={<Single/>}/>


        
        </Route>



        </Route>
      </Routes>


      </BrowserRouter>
    
    </div>
  );
}


export default App;
