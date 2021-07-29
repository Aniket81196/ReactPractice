import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { withRouter } from "react-router";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function ForgotPass(props){
    let user={};
    let [errorMessage, setErrorMessage]=useState();
    function recover(e){
        e.preventDefault();
       
        
    let apiurl= "https://apifromashu.herokuapp.com/api/recoverpassword";
    axios({
      method: "post",
      url: apiurl,
      data: user
    }).then((response)=>{
      console.log("response from forgot api", response);
      if(response.data.message!="No Such Email exists"){
        console.log(response.data);
        props.history.push("/");
        toast.success('Password Sent Successfully', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
      }
      else{
        toast.error('No such Email Exist', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        // alert("Invalid credentials");
      }
    },(error)=>{
      console.log("response from forgot api", error);
      // Updating the State
      setErrorMessage("Enter all the details")
      // setState({
      //     errorMessage: "Enter all the details"
      // })
      })
    }
    function handleEmail(e){
        user.email = e.target.value;
    };
    return(
        <div className="mt-5" style={{ width: "50%", margin: "auto" , border: "0.01rem solid black", borderRadius: "0.8rem", padding: "2rem"}}>
        {/* <h1 className="text-center">{this.state.name}</h1> */}
        <h1 className="text-center">Forgot Password</h1>
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={handleEmail}
            />
          </div>
          <div className="mb-3">
            <Link to="/login">Back to Login?</Link>
          </div>
          <label className="errorMessage">{errorMessage}</label>
          <button type="submit" class="btn btn-primary" onClick={recover}>
            Recover Password
          </button>
        </form>
        <ToastContainer />
      </div>
    );
}
export default withRouter(ForgotPass);