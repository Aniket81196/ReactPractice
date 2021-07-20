import logo from './logo.svg';
import './App.css';
import {Navbar} from "./Components/Navbar";
import {Carousel} from "./Components/Carousel";
import {Cake} from "./Components/Cake";
import { Login } from './Components/Login';
import {SignUp} from './Components/SignUp';
import {CakeDetails} from './Components/CakeDetails';
let cake1={
  name: "Choc1",
  price: 500,
  image: "cake1.jfif"
}
let cake2={
  name: "Choc2",
  price: 400,
  image: "cake2.jfif"
}
let cake3={
  name: "Vanilla",
  price: 400,
  image: "cake3.jfif"
}
function App() {
  return (
    <div>
      <Navbar></Navbar>
      <SignUp></SignUp>
      <Carousel></Carousel>
      <div className="row ml-0 mr-0 mt-5 d-flex justify-content-around">
        <Cake data={cake1}></Cake>
        <Cake data={cake2}></Cake>
        <Cake data={cake3}></Cake>
      </div>
      <Login></Login>
      <CakeDetails></CakeDetails>
    </div>
  );
}

export default App;
