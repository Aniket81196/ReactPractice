import axios from 'axios';
import { useEffect, useState } from 'react';
import Cake from './Cake'; 
import Loader from "react-loader-spinner";
// let cake1={
//     id: 123,
//     name: "Choc1",
//     price: 500,
//     image: "cake1.jfif"
//   }
//   let cake2={
//     id: 456,
//     name: "Choc2",
//     price: 400,
//     image: "cake2.jfif"
//   }
//   let cake3={
//     id: 789,
//     name: "Vanilla",
//     price: 400,
//     image: "cake3.jfif"
//   }


export function Cakelist(props){ //this component has access to props because it is a child of <Home> component who has access to props object, even though this <Cakelist> component is not present in <Route> in App.js as <Home> is, but still it has access to props object due to reason mentioned earlier on same line
  let loader2Style={display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "100%"}
  let [loader2, setLoader2]=useState(true);
  useEffect(()=>{
    setTimeout(()=>{
      setLoader2(false)
    },1000)
  })
  let [cakes, setCakes]=useState([]);
  useEffect(()=>{
    let apiurl= "https://apifromashu.herokuapp.com/api/allcakes";
    axios({
      method: "get",
      url: apiurl,
    }).then((response)=>{
      console.log("response from all cakes api", response.data);
      setCakes(response.data.data);
    },(error)=>{
      console.log("error from all cakes api", error);
    })
  }, [])//we have added an array here so that useEffect doesnot execute each time setCakes() run  
  return(
        <div className="row ml-0 mr-0 mt-5 d-flex justify-content-around">
            {/* <Cake data={cake1} history={props.history}></Cake>
            <Cake data={cake2} history={props.history}></Cake>
            <Cake data={cake3} history={props.history}></Cake> */}
            {loader2?(
               <Loader
               style={loader2Style}
                 type="Rings"
                 color="black"
               />
            ):(
              cakes.map((each, index)=>{
                return <Cake key={index} data={each}/>
              })
            )}
        </div>
    );
}