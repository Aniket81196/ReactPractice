import {Cake} from './Cake'; 
let cake1={
    id: 123,
    name: "Choc1",
    price: 500,
    image: "cake1.jfif"
  }
  let cake2={
    id: 456,
    name: "Choc2",
    price: 400,
    image: "cake2.jfif"
  }
  let cake3={
    id: 789,
    name: "Vanilla",
    price: 400,
    image: "cake3.jfif"
  }
export function Cakelist(props){ //this component has access to props because it is a child of <Home> component who has access to props object, even though this <Cakelist> component is not present in <Route> in App.js as <Home> is, but still it has access to props object due to reason mentioned earlier on same line
    return(
        <div className="row ml-0 mr-0 mt-5 d-flex justify-content-around">
            <Cake data={cake1} history={props.history}></Cake>
            <Cake data={cake2} history={props.history}></Cake>
            <Cake data={cake3} history={props.history}></Cake>
        </div>
    );
}