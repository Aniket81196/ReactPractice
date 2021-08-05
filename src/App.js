import logo from './logo.svg';
import './App.css';
import Navbar from "./Components/Navbar"; //For export default components we donot use {} 
import {Carousel} from "./Components/Carousel";
import Cake from "./Components/Cake";
import Login from './Components/Login';
import {SignUp} from './Components/SignUp';
import CakeDetails from './Components/CakeDetails';
import {Home} from './Components/Home';
import {PageNotFound} from './Components/PageNotFound';
import Cart from "./Components/Cart";
import {BrowserRouter, Route, Switch, withRouter} from 'react-router-dom';
import { Search } from './Components/Search';
import ForgotPass from './Components/ForgotPass';
import PurchaseDetails from './Components/PurchaseDetails';
import { useEffect, useState } from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from "react-loader-spinner";
import PastOrders from './Components/PastOrders';

function App(props) {
  let isUserLoggedIn=false;
  let [loader1, setLoader1]=useState(true);
  useEffect(()=>{
    setTimeout(()=>{
      setLoader1(false)
    },2000)
  })
  // let [isUserLoggedIn, setUserLogin]=useState(localStorage.token?true:false)
  // useEffect(()=>{
  //   console.log("use effect ran")
  //   if(localStorage.token){
  //     setUserLogin(true)
  //   }
  //   else{
  //     setUserLogin(false)
  //   }
  // })
  // let route;
  // if(isUserLoggedIn){
  //   console.log("Login", isUserLoggedIn)
  //   route=(
  //    <Switch>
  //       <Route exact path="/" component={Home}></Route>
  //       <Route path='/login' render={() => 
  //         (
  //           <Redirect to="/"/>
  //         )
  //       }/>
  //       <Route path='/signup' render={() => 
  //         (
  //           <Redirect to="/"/>
  //         )
  //       }/>
  //       <Route exact path="/cart" component={Cart}></Route>
  //       <Route exact path="/search" component={Search}></Route>
  //       <Route exact path="/cake/:details" component={CakeDetails}></Route> 
  //       <Route exact path="**" component={PageNotFound}></Route>
  //    </Switch>
  //   );
  // }
  // else{
  //   console.log("Logout", isUserLoggedIn)
  //   route=(
  //     <Switch>
  //       <Route exact path="/" component={Home}></Route>
  //       <Route exact path="/login"><Login/></Route>
  //       <Route exact path="/signup" component={SignUp}></Route>
  //       {/* <Route path='/cart' render={() => 
  //         (
  //           <Redirect to="/"/>
  //         )
  //       }/> */}
  //       <Route exact path="/search" component={Search}></Route>
  //       <Route exact path="/cake/:details" component={CakeDetails}></Route> 
  //       <Route exact path="**" component={PageNotFound}></Route>
  //     </Switch>
  //   );
  // }
  let loaderStyle={display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "100%"}
  return (
    // Below <Navbar> component will be common in all the <Route>
    // as we can see below we have used <Switch> which when used around <Route> can be used to utilize switch case's break keyword feature, React by default in below <Route> will go through all <Route> one by one same like switch case, if we want React to stop when exact match is found then we must use <Switch> around <Route> which will enable break feature, by which React wont go through other <Route> ones a exact match of path in <Route> is found 
    // :parametername(can be changed to some other name, we have used details) means whatever we type after cake/ in URL always CakeDetails component will open
    <div style={{height:"100%"}}>
      <ToastContainer />
      {loader1?(
        <Loader
        style={loaderStyle}
          type="Oval"
          color="black"
        />
      ):(
        <BrowserRouter>
        <Navbar isUserLoggedIn={props.isUserLoggedIn}></Navbar>  
        <Switch>
          <Route exact path="/" component={Home}></Route>
          {props.isUserLoggedIn && <Route path='/login' render={() => 
            (
              <Redirect to="/" />
            )
          }/>}
          {console.log("app3", props)}
          {!props.isUserLoggedIn && <Route exact path="/login" component={Login}></Route>}
          {props.isUserLoggedIn && <Route path='/signup' render={() => 
            (
              <Redirect to="/"/>
            )
          }/>}
          {!props.isUserLoggedIn && <Route exact path="/signup" component={SignUp}></Route>}
          {props.isUserLoggedIn && <Route exact path="/cart" component={Cart}></Route>}
          {props.isUserLoggedIn==false && <Route path='/cart' render={() => 
            (
              <Redirect to="/login"/>
            )
          }/>}
          {props.isUserLoggedIn && <Route exact path="/pastorders" component={PastOrders}></Route>}
          {props.isUserLoggedIn==false && <Route path='/pastorders' render={() => 
            (
              <Redirect to="/login"/>
            )
          }/>}
          {props.isUserLoggedIn && <Route exact path="/forgot-pass" render={
            ()=>(
              <Redirect to="/"/>
            )
          }></Route>}
          {props.isUserLoggedIn==false && <Route exact path="/forgot-pass" component={ForgotPass}></Route>}
          {/* <Route exact path="/login" component={Login}></Route>
          <Route exact path="/signup" component={SignUp}></Route> */}

          <Route exact path="/search" component={Search}></Route>
          <Route exact path="/cake/:details" component={CakeDetails}></Route> 
          {props.isUserLoggedIn && <Route exact path="/purchaseDetails" component={PurchaseDetails}></Route>}
          {props.isUserLoggedIn==false && <Route path='/purchaseDetails' render={() => 
            (
              <Redirect to="/"/>
            )
          }/>}
          <Route exact path="**" component={PageNotFound}></Route>
        </Switch>
        {/* {route}
        {console.log("hello", route)} */}
      </BrowserRouter>
      )}
    </div>
  );
}

// export default App;
App= withRouter(App)
export default connect(function(state, props){
  console.log("Store State", state)
  return { 
    isUserLoggedIn: state["AuthReducer"]["isUserLoggedIn"], //this state object is state of store which contains AuthReducer function object and this function object contains isUserLoggedIn, and then value fetched is stored in isUserLoggedIn prop of Navbar component, same goes for below name.
    name: state["AuthReducer"]["user"] && state["AuthReducer"]["user"]["name"]
  }
})(App) 