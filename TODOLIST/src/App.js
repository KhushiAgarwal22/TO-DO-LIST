// import logo from './logo.svg';
import './App.css';
import LandingPage from './Components/LandingPage';
import ToList from './Components/ToList';
import {Route,Routes,BrowserRouter} from 'react-router-dom'
import LogIn from './Components/LogIn'
import SignUp from './Components/SignUp';


function App() {

  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
              <Route path='/' element={<LandingPage/>}/>
              <Route path='/todo' element={<ToList/>}/>
              <Route path='/login' element={<LogIn/>}/>
              <Route path='/signup' element={<SignUp/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
