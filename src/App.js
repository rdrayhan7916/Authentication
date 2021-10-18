import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';
import About from './Component/About/About';
import Appointment from './Component/Appoinment/Appointment';
import Footer from './Component/Footer/Footer';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import Services from './Component/Services/Services';
import AuthProvider from './Context/AuthProvider';
import Login from './Login/Login';
import NotFound from './NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <AuthProvider>

        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute exact path="/appoinment/:id">
              <Appointment></Appointment>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>

      </AuthProvider>
    </div>
  );
}

export default App;
