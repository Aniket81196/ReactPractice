import logo from './logo.svg';
import './App.css';
import Navbar from "./Components/Navbar"; //For export default components we donot use {} 
import {Carousel} from "./Components/Carousel";
import {Cake} from "./Components/Cake";
import Login from './Components/Login';
import {SignUp} from './Components/SignUp';
import {CakeDetails} from './Components/CakeDetails';
import {Home} from './Components/Home';
import {PageNotFound} from './Components/PageNotFound';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { Search } from './Components/Search';
import { useState } from 'react';

function App() {
  let [isUserLoggedIn, setUserLogin]= useState(false);
  // let [isUserLoggedIn, setUserLogin]= useState(localStorage.token?true:false);
  function loggedin(){
    setUserLogin(true);
  }
  return (
    // Below <Navbar> component will be common in all the <Route>
    // as we can see below we have used <Switch> which when used around <Route> can be used to utilize switch case's break keyword feature, React by default in below <Route> will go through all <Route> one by one same like switch case, if we want React to stop when exact match is found then we must use <Switch> around <Route> which will enable break feature, by which React wont go through other <Route> ones a exact match of path in <Route> is found 
    // :parametername(can be changed to some other name, we have used details) means whatever we type after cake/ in URL always CakeDetails component will open
    <div style={{height:"100%"}}>
      <BrowserRouter>
        <Navbar isUserLoggedIn={isUserLoggedIn}></Navbar>  
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/login"><Login loggedin={loggedin}/></Route>
          <Route exact path="/signup" component={SignUp}></Route>
          <Route exact path="/search" component={Search}></Route>
          <Route exact path="/cake/:details" component={CakeDetails}></Route> 
          <Route exact path="**" component={PageNotFound}></Route>
        </Switch>
      </BrowserRouter>
      {/* <Navbar></Navbar>
      <SignUp></SignUp>
      <Carousel></Carousel>
      <div className="row ml-0 mr-0 mt-5 d-flex justify-content-around">
        <Cake data={cake1}></Cake>
        <Cake data={cake2}></Cake>
        <Cake data={cake3}></Cake>
      </div>
      <Login></Login>
      <CakeDetails></CakeDetails> */}
    </div>
  );
}

export default App;
