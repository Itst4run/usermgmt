import './App.css';
import Topbar from "./components/topbar/Topbar";
import { BrowserRouter,
  Routes,
  Route,} from "react-router-dom";
import Userlist from "./components/pages/Userlist";
import User from './components/pages/user';
function App() {
  return (
    <BrowserRouter>
    <Topbar/>
    <Routes>
    <Route path="/users" element={<Userlist />} />
    <Route path="/users/:userId" element={<User/>} />

    </Routes> 
    </BrowserRouter>
  );
}

export default App;
