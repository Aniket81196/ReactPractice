import axios from "axios";
import queryString from "query-string";
import { useEffect, useState } from "react";
import Cake from "./Cake";
import Loader from "react-loader-spinner";
export function Search(props){
    let loader3Style={display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "100%"}
    
    let query=queryString.parse(props.location.search);
    let [cakeResults, setCakeResults]=useState(["hello"]);//initially a value "hello" is kept because after search is pressed, in cakeResults array length is 0 then no such cakes found is being displayed with Loader which we donot want
    useEffect(()=>{
        let apiurl="https://apifromashu.herokuapp.com/api/searchcakes?q="+query.q;
        console.log(query);
        axios({
            method: "get",
            url: apiurl
        }).then((response)=>{
            console.log("response from all cakes api", response.data);
            setCakeResults(response.data.data);
        },(error)=>{
            console.log("error from all cakes api", error);
        })
    },[query.q])//since we have added query.q a value inside this array, this signifies that whenever setCakeResults() state changes/ whenever this function is triggered useEffect() will be executed.
    let [loader3, setLoader3]=useState(true);
    useEffect(()=>{
        setTimeout(()=>{
        setLoader3(false)
        },500)
    })
    return(
        <div className="row ml-0 mr-0 mt-5 d-flex justify-content-around">
            {cakeResults.length==0 && <h1>No such cake found</h1>}
            {loader3?(
                <Loader
                style={loader3Style}
                  type="Rings"
                  color="black"
                />
            ):(
                cakeResults.map((each, index)=>{
                    return <Cake key={index} data={each}/>
                })
            )}
        </div>
    );
}