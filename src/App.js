import './App.css';
import Topbar from "./components/topbar/Topbar";
import { BrowserRouter,
  Routes,
  Route,} from "react-router-dom";
import Userlist from "./components/pages/Userlist";
function App() {
  return (
    <BrowserRouter>
    <Topbar/>
    <Routes>
    <Route path="/users" element={<Userlist />} />
    </Routes> 
    </BrowserRouter>
  );
}

export default App;
