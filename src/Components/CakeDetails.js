import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "react-loader-spinner";
export function CakeDetails(props) {
    let loader4Style={display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "100%"}
    let [loader4, setLoader4]=useState(true);
    useEffect(()=>{
        setTimeout(()=>{
        setLoader4(false)
        },500)
    })
    let [cakeDetails, setCakeDetails]=useState([]);
    useEffect(()=>{
        let apiurl= "https://apifromashu.herokuapp.com/api/cake/" + props.match.params.details;
        axios({
            method: "get",
            url: apiurl
        }).then((response)=>{
            console.log("response from all cakes api", response.data);
            setCakeDetails(response.data.data);
        },(error)=>{
            console.log("error from all cakes api", error);
        })
    },[])
    return (
        <div className="container">
            {console.log("Cake Details ", cakeDetails)}
            {/* <h1>Hello{props.match.params.details}</h1> */}
            {loader4?(
                 <Loader
                 style={loader4Style}
                   type="Rings"
                   color="black"
                 />
            ):(
                <div className="row mt-5 pb-5 justify-content-between">
                    <div class="card col-6" style={{width: "18rem", padding: "0"}}>
                        <img src={cakeDetails.image} className="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Ingredients: </h5>
                            <ul className="card-text">
                            
                            {cakeDetails.ingredients && 
                                cakeDetails.ingredients.map((each,index)=>{
                                    return <li key={index}>{each}</li>;
                                })
                             }
                            </ul>
                        </div>
                    </div>
                    <div className="col-5 card" style={{padding: "0"}}>
                        <div className="card-body d-flex flex-column justify-content-center align-items-center">
                            <h1 className="mb-5">{cakeDetails.name}</h1>
                            <p><label className="font-weight-bold">Rating:- </label>{cakeDetails.ratings}/5</p>
                            <p><label className="font-weight-bold">Reviews:-</label> {cakeDetails.reviews}</p>
                            <p><label className="font-weight-bold">Price:-</label> {cakeDetails.price}</p>
                            <p><label className="font-weight-bold">Weight:-</label> {cakeDetails.weight}kg</p>
                            <p><label className="font-weight-bold">Flavour:-</label> {cakeDetails.flavour}</p>
                            <p><label className="font-weight-bold">Occasion:-</label> {cakeDetails.type}</p>
                            <a href="#" class="btn btn-primary mt-5 w-50">Buy</a>
                        </div>
                    </div>
               </div>
            )}
           
        </div>
    );
  }
  