import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "react-loader-spinner";
import { connect } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function CakeDetails(props) {
    let loader4Style={display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "100%"}
    let [loader4, setLoader4]=useState(true);
    useEffect(()=>{
        setTimeout(()=>{
        setLoader4(false)
        },500)
    })
    // let [cakeDetails, setCakeDetails]=useState({});
    useEffect(()=>{
        props.dispatch({
            type: "Cake_Details",
            appendUrl: props.match.params.details,
        })
        // let apiurl= "https://apifromashu.herokuapp.com/api/cake/" + props.match.params.details;
        // axios({
        //     method: "get",
        //     url: apiurl
        // }).then((response)=>{
        //     console.log("response from all cakes api", response.data);
        //     setCakeDetails(response.data.data);
        // },(error)=>{
        //     console.log("error from all cakes api", error);
        // })
    },[])

  console.log("Cake ITem from saga is: ", props.cakeitem)
    function addToCart(e){
        // var cakedata={
        //     name:cakeDetails.name,
        //     cakeid:cakeDetails.cakeid,
        //     price:cakeDetails.price,
        //     weight:cakeDetails.weight,
        //     image:cakeDetails.image
        // }
        e.preventDefault();
        if(props.isUserLoggedIn){
            console.log("CD Api", props.isUserLoggedIn)
            props.dispatch({
                type: "Cart_Details",
                data: props.cakeitem
            })
            //Below is old code of this addToCart() with few changes made as per Cart Component
            // let addToCartUrl = "https://apifromashu.herokuapp.com/api/addcaketocart"
        // axios(
        //     {
        //         method: 'post',
        //         url: addToCartUrl,
        //         headers: {
        //             authToken: localStorage.token
        //         },
        //         data: props.cartDetails[index]
        //     }
        // ).then((response) => {
        //     // alert("added to cart")
        //     console.log("response from add to cake cart : ", response)
        //     toast.success("Cake added to cart")
        // }, (error) => {
        //     alert("error while adding to cart")
        //     console.log("error from cake details api : ", error)
        // }).then(()=>{
        //     props.dispatch({
        //         type: "Cart_Items"
        //     })
        // })
            // props.history.push("/cart")
            // if(props.addCakeToCartItem){
            //     toast.success(props.addCakeToCartItem.name + "Added to cart")
            //     props.history.push("/cart")
            // }
            // else{
            //     alert("error while adding to cart")
            // }
           
        } 
        else{
            toast.error("You need to login first")
        }
    }
    return (
        <div className="container">
            {console.log("Cake Details Props", props)}
            {props.addToast &&  toast.success(props.addCakeToCartItem.name + "Added to cart")}
            {props.addToast &&  props.history.push("/cart")}
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
                        {props.cakeitem.image && <img src={props.cakeitem.image} className="card-img-top" alt="..."/>}
                        <div class="card-body">
                            <h5 class="card-title">Ingredients: </h5>
                            <ul className="card-text">
                            
                            {props.cakeitem.ingredients && 
                                props.cakeitem.ingredients.map((each,index)=>{
                                    return <li key={index}>{each}</li>;
                                })
                             }
                            </ul>
                        </div>
                    </div>
                    <div className="col-5 card" style={{padding: "0"}}>
                        {props.cakeitem && <div className="card-body d-flex flex-column justify-content-center align-items-center">
                           <h1 className="mb-5">{props.cakeitem.name}</h1>
                            <p><label className="font-weight-bold">Rating:- </label>{props.cakeitem.ratings}/5</p>
                            <p><label className="font-weight-bold">Reviews:-</label> {props.cakeitem.reviews}</p>
                            <p><label className="font-weight-bold">Price:-</label> {props.cakeitem.price}</p>
                            <p><label className="font-weight-bold">Weight:-</label> {props.cakeitem.weight}kg</p>
                            <p><label className="font-weight-bold">Flavour:-</label> {props.cakeitem.flavour}</p>
                            <p><label className="font-weight-bold">Occasion:-</label> {props.cakeitem.type}</p>
                            <a href="#" class="btn btn-primary mt-5 w-50" onClick={addToCart}>Add To Cart</a>
                        </div>}
                    </div>
               </div>
            )}
           <ToastContainer />
        </div>
    );
  }

export default connect(function(state, props){
    console.log("CD", state)
    console.log("CD1", props)
    return{
        isUserLoggedIn: state["AuthReducer"]["isUserLoggedIn"],
        cakeitem: state["CakeReducer"]["cakeitem"],
        addCakeToCartItem: state["AddCakeToCartReducer"]["caketocartitem"],
        addToast: state["AddCakeToCartReducer"]["addToast"]
        // addCart: state["AddToCartReducer"]["addcart"]
    }
})(CakeDetails)
  