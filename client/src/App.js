import './App.css';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
import Home from './components/home/Home';
import { UserAuth } from './util/AuthContext';
import PrivateRoute from './util/PrivateRoute';
import Error from './components/error/Error';



function App() {
  return (
    <>
      <UserAuth>
        <Router>
          <Routes>
            <Route exact path='/' element={<Login />} />
            <Route path='/signup' element={<Signup />} />

            <Route element={<PrivateRoute />} >
              <Route path='/home' element={<Home />} />
            </Route>
            <Route path='*' element={<Error/>} />
          </Routes>
        </Router>
      </UserAuth>
    </>
  );
}

export default App;
