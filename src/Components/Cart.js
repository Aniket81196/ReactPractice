import { useEffect, useState } from "react";
import { withRouter } from "react-router";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
function Cart(props){
    // let values=[];
    console.log("Cart Props", props)
    let loader5Style={display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "100%"}
    let [loader5, setLoader5]=useState(true);
    useEffect(()=>{
        setTimeout(()=>{
        setLoader5(false)
        },1000)
    })
    // let [cartDetails, setCartDetails]=useState({});
    useEffect(()=>{
        if(props.isUserLoggedIn){
            console.log("props Cart", props)
            props.dispatch({
                type: "Cart_Items"
            })
            console.log("CD Api", props.isUserLoggedIn)
            // let cakeCartUrl = "https://apifromashu.herokuapp.com/api/cakecart"
            // axios(
            //     {
            //         method: 'post',
            //         url: cakeCartUrl,
            //         requesObj: {},
            //         headers: {
            //             authToken: localStorage.token
            //         },
            //     }
            // ).then((response) => {
            //     console.log("abcd", response)
            //     console.log("def", response.data)
            //     setCartDetails(response.data.data)
            //     // console.log(resArr)
            //     // toast.success(cakeDetails.name + "Added to cart")
            //     // alert("added to cart")
            //     // console.log("response from add to cake cart : ", response)
            //     // props.history.push("/cart")
            // }, (error) => {
            //     alert("error while adding to cart")
            //     console.log("error from cake details api : ", error)
            // })
        } 
        else{
            toast.error("You need to login first")
        }
    },[])
    
    
    function addToCart(index,e){
        e.preventDefault();
        console.log("hello", index)
        let addToCartUrl = "https://apifromashu.herokuapp.com/api/addcaketocart"
        axios(
            {
                method: 'post',
                url: addToCartUrl,
                headers: {
                    authToken: localStorage.token
                },
                data: props.cartDetails[index]
            }
        ).then((response) => {
            // alert("added to cart")
            console.log("response from add to cake cart : ", response)
            toast.success("Cake added to cart")
        }, (error) => {
            alert("error while adding to cart")
            console.log("error from cake details api : ", error)
        }).then(()=>{
            props.dispatch({
                type: "Cart_Items"
            })
        })
    }
    console.log("cart det after props", props.cartDetails)
    // for(let i in cartDetails){
    //     values.push(cartDetails[i])
    // }
    return(
        <>
            {
                loader5?(
                    <Loader
                 style={loader5Style}
                   type="Rings"
                   color="black"
                 />
                ):(
                    <table class="table mt-5 table-borderless" style={{width:"45%", margin: "auto", border: "0.01rem solid black", borderRadius: "0.8rem", borderCollapse: "separate", borderSpacing:"0"}}>
                    <thead >
                        <tr>
                        <th scope="col" style={{borderBottom: "0.01rem solid black", textAlign: "center"}}>Products</th>
                        <th scope="col" style={{borderBottom: "0.01rem solid black", textAlign: "center"}}>Price</th>
                        <th scope="col" style={{borderBottom: "0.01rem solid black", textAlign: "center"}}>Quantity</th>
                        <th scope="col" style={{borderBottom: "0.01rem solid black", textAlign: "center"}}>Subtotal</th>
                        </tr>
                    </thead>
                    <tbody>
                        {console.log("Cart Details", props.cartDetails)}
                        {props.cartDetails && props.cartDetails.map((each,index)=>{
                            // console.log(count)
                            console.log(each.name)
                            return(
                                <tr>
                            <td scope="row">
                                <div style={{display: "flex"}}>
                                    <div className="mr-5">
                                        <img src={each.image} style={{width: "10rem", height: "10rem", borderRadius:"0.8rem"}}></img>
                                    </div>
                                    <div className="d-flex flex-column justify-content-center">
                                        <p>{each.name}</p>
                                        <p>Weight: {each.weight}kg</p>
                                    </div>
                                </div>
                            </td>
                            <td style={{verticalAlign:"middle", textAlign: "center"}}>₹{each.price}</td>
                            <td style={{verticalAlign:"middle", textAlign: "center"}}>
                                <div class="number d-flex align-items-center">
                                    <button class="btn btn-primary mr-2">-</button>
                                    <span>{each.quantity}</span>
                                    {/* <input type="text" value={each.quantity}/> */}
                                    <button class="btn btn-primary ml-2" onClick={(e)=>{addToCart(index,e)}}>+</button>
                                    </div>
                            </td>
                            <td style={{verticalAlign:"middle", textAlign: "center"}}>₹{each.price}</td>
                            </tr>
                            )
                        })}
                    </tbody>
                </table>
                )
            }
        </>
       
    );
}
Cart =withRouter(Cart)
export default connect(function(state,props){
    return{
        isUserLoggedIn: state["AuthReducer"]["isUserLoggedIn"],
        cartDetails: state["CartReducer"]["cartitems"]
    }
})(Cart)