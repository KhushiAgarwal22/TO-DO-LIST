// import logo from './logo.svg';
import './App.css';
import LandingPage from './Components/LandingPage';
import ToList from './Components/ToList';
import {Route,Routes,BrowserRouter} from 'react-router-dom'
import LogIn from './Components/LogIn'
import SignUp from './Components/SignUp';


function App() {
//  const [user,setUser] = useState(null);
//  useEffect(()=>{
//    onAuthStateChanged(auth, (user)=>{
//      if(user)
//      {
//        console.log('hi' ,user);
//        setUser(user);
//      }
//      else{
//        console.log('no user');
//        setUser(null);
//      }
//    })
//  },[])
//  if(user===null)
//  {
//    return(
//     <div className="App">
//      <LandingPage/>
//      </div>
//    )
//  }
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
