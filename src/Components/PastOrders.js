import { connect } from "react-redux";
import { useEffect, useState } from "react";
import { withRouter } from "react-router";
import Loader from "react-loader-spinner";

function PastOrder(props){
    let loader5Style={display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "100%"}
    let [loader5, setLoader5]=useState(true);
    useEffect(()=>{
        setTimeout(()=>{
        setLoader5(false)
        },1000)
        pastOrders()
    },[])
    function pastOrders(){
        if(props.isUserLoggedIn){
          props.dispatch({
            type: "Cake_History"
          })
        //   props.history.push("/pastorders")
        }
      }
    window.onload=function(){
        pastOrders()
    }
    return(
        <div>
            {loader5?(
                 <Loader
                 style={loader5Style}
                   type="Rings"
                   color="black"
                 />
            ):(
                <table class="table mt-5 table-borderless" style={{width:"60%", margin: "auto", border: "0.01rem solid black", borderRadius: "0.8rem", borderCollapse: "separate", borderSpacing:"0"}}>
                    <thead>
                        <tr>
                        <th scope="col" style={{borderBottom: "0.01rem solid black", textAlign: "center"}}>Order Id</th>
                        <th scope="col" style={{borderBottom: "0.01rem solid black", textAlign: "center"}}>Order Date</th>
                        <th scope="col" style={{borderBottom: "0.01rem solid black", textAlign: "center"}}>Items</th>
                        <th scope="col" style={{borderBottom: "0.01rem solid black", textAlign: "center"}}>Price</th>
                        <th scope="col" style={{borderBottom: "0.01rem solid black", textAlign: "center"}}>Payment Mode</th>
                        </tr>
                    </thead>
                    <tbody>
                        {console.log("past",props)
                        }
                        {props.pastOrders && console.log("Past Orders", props.pastOrders)}
                        {props.pastOrders && props.pastOrders.map((each,index)=>{
                            return(
                                <tr>
                            <td scope="row" style={{verticalAlign:"middle", textAlign: "center"}}>
                                {each.orderid}    
                            </td>
                            <td style={{verticalAlign:"middle", textAlign: "center"}}>{each.orderdate}</td>
                            <td style={{verticalAlign:"middle"}}>
                                <ol>
                                    {each.cakes && each.cakes.map((each,index)=>{
                                        return <li>{each.name}</li>
                                    })}
                                </ol>
                            </td>
                            <td style={{verticalAlign:"middle", textAlign: "center"}}>₹{each.price}</td>
                            <td style={{verticalAlign:"middle", textAlign: "center"}}>{each.mode}</td>
                            </tr>
                            )
                        })}
                        {/* <tr>
                            <td style={{borderTop:"0.01px solid black"}}></td>
                            <td style={{borderTop:"0.01px solid black"}}></td>
                            <td style={{borderTop:"0.01px solid black"}}><h3 style={{textAlign: "center"}}>Total:</h3></td>
                            <td style={{borderTop:"0.01px solid black"}}>{props.cartDetails && props.cartDetails.map((each, index)=>{
                                totalAmount+=each.quantity*each.price
                            })}<h4 style={{textAlign:"center"}}>{totalAmount}</h4></td>
                            <td style={{borderTop:"0.01px solid black"}}><Link to="/purchaseDetails"><button className={"btn btn-success"}>Checkout</button></Link></td>
                        </tr> */}
                    </tbody>
                </table>
            )}
            
        </div>
    );
}

PastOrder= withRouter(PastOrder)
export default connect(function(state, props){
    console.log("pastorder router", props)
    return{
        isUserLoggedIn: state["AuthReducer"]["isUserLoggedIn"],
        cartDetails: state["CartReducer"]["cartitems"],
        pastOrders: state["PastOrderReducer"]["pastorders"]
    }
})(PastOrder)