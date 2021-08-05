import { withRouter } from "react-router";
import { connect } from "react-redux";
import { useEffect} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function PurchaseDetails(props){
    let totalAmount=0;
    let user={}
    function getName(e){
        user.name=e.target.value
    }
    function getPhone(e){
        user.phone=e.target.value
    }
    function getAddress(e){
        user.address=e.target.value
    }
    function getCity(e){
        user.city=e.target.value
    }
    function getPinCode(e){
        user.pincode=e.target.value
    }
    function getArea(e){
        user.area=e.target.value
    }
    function User(e){
        e.preventDefault();
        console.log("dasdasda", props.cartDetails)
        props.cartDetails.map((each, index)=>{
            totalAmount+=each.quantity*each.price
        })
        console.log(user)
        // toast.error("Fill all the details")
        if("name" in user && "city" in user && "phone" in user && "address" in user && "pincode" in user && "area" in user){
            toast.success("Order Successful")
            user.cakes=props.cartDetails
            user.price=totalAmount
            console.log(user)
            props.dispatch({
                type: "Order_Cake",
                order: user
            })
        }
        else{
            toast.error("Fill all the details")
        }
       
        // for(let i in user){
        //     if(user[i]===""){
        //         toast.error("Fill all the details")
        //     }
        // }
    }
    return(
        <div>
            <h1 className={"mt-2 text-center"}>Purchase Details</h1>
            {console.log("Purchase",props)}
            <form style={{ width: "50%", margin: "auto", border: "0.01rem solid black", borderRadius: "0.8rem", padding: "2rem"}}>
                <div class="form-row">
                    <div class="form-group col-md-6">
                    <label for="inputEmail4">Name</label>
                    <input type="text" class="form-control" id="inputEmail4" onChange={getName}/>
                    </div>
                    <div class="form-group col-md-6">
                    <label for="inputPassword4">Phone</label>
                    <input type="text" class="form-control" id="inputPassword4" onChange={getPhone}/>
                    </div>
                </div>
                <div class="form-group">
                    <label for="inputAddress">Address</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" onChange={getAddress}></textarea>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                    <label for="inputCity">City</label>
                    <input type="text" class="form-control" id="inputCity" onChange={getCity}/>
                    </div>
                    <div class="form-group col-md-6">
                    <label for="inputState">Pin Code</label>
                    <input type="text" class="form-control" id="inputPin" onChange={getPinCode}/>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-12">
                    <label for="inputCity">Area</label>
                    <input type="text" class="form-control" id="inputArea" onChange={getArea}/>
                    </div>
                </div>
                <div className={"d-flex justify-content-center mt-3"}>
                    <button class="btn btn-primary w-50" onClick={User}>Buy</button>
                </div>
            </form>
            <ToastContainer />
        </div>
        
    )
}
PurchaseDetails= withRouter(PurchaseDetails)
export default connect(function(state, props){
    console.log("PurchaseDetails state", state)
    console.log("PurchaseDetails props", props)
    return{
        cartDetails: state["CartReducer"]["cartitems"]
    }
})(PurchaseDetails);