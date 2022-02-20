import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Navigation from './Component/Navigation';
import Home from './Component/Home';
import Deshbord from './Component/Deshbord/Deshbord';
import Contacts from './Component/Contacts/Contacts';
import AllProduct from './Component/AllProduct';
import Details from './Component/Details';
import AuthProvider from './Component/Login/AuthProvider';
import Login from './Component/Login/Login';
import Register from './Component/Login/Register';
import Allorder from './Component/Deshbord/Allorder';
import Edit from './Component/Contacts/Edit';
import Profile from './Component/Profile';
import ProfileUpdate from './Component/ProfileUpdate';
import Features from './Component/Features';
import WatchHome from './Component/WatchHome';




function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Navigation></Navigation>
          <Switch>

            <Route path="/home">
              <Home />
            </Route>
            <Route path="/deshbord">
              <Deshbord />
            </Route>
            <Route path="/contact">
              <Contacts />
            </Route>
            <Route path="/allproduct">
              <AllProduct />
            </Route>
            <Route path="/watch/details/:id">
              <Details />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/allorder">
              <Allorder />
            </Route>
            <Route path="/edit/watch/:id">
              <Edit />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/update/:id">
              <ProfileUpdate />
            </Route>
            <Route path="/feature">
              <Features />
            </Route>
            <Route path="/homewatvh">
              <WatchHome />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
