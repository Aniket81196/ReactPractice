import { Component } from "react";//import when using class
import Loader from "react-loader-spinner";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// Statefull Component(Class)
export class SignUp extends Component {
  constructor() {
    super();
    // Initializing the State
    this.state = {
        // name: "Aniket",
        loading: false
    };
  }
  user = {};
  login = (e) => {//here we convert normal function to arrow function because we using class so we need to bind this function with the event below
    e.preventDefault();
    // Updating the State
    this.setState({
        // name: "Aniket Chavan",
        loading: true
    })
    setTimeout(()=>{
        // this.setState({
        //     // errorMessage: "Enter all the details",
        //     loading: false
        // })
        let apiurl= "https://apifromashu.herokuapp.com/api/register"
        axios({
          method: "post",
          url: apiurl,
          data: this.user
        }).then((response)=>{
          console.log("response from signup api", response);
          this.setState({
            loading: false
          })
          toast.success('SignedUp Successfully. Verification Email sent on registered Id', {
            position: "top-right",
            autoClose: 10000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        },(error)=>{
          this.setState({
            errorMessage: "Enter all the details",
            loading: false
          })
          console.log("response from signup api", error);
        })
        e.preventDefault();
    },2000);
  };
  handleName = (e) => {
    this.user.name = e.target.value;
  };
  handleEmail = (e) => {
    this.user.email = e.target.value;
  };
  handlePass = (e) => {
    this.user.password = e.target.value;
  };
  
  render() {
    let loader;
      if(this.state.loading){
        loader= <Loader
        type="ThreeDots"
        color="#00BFFF"
        height={100}
        width={100}
        />;
      }
      else{
          loader=null;
      }
   
    return (
      <div className="mt-5" style={{ width: "50%", margin: "auto",  border: "0.01rem solid black", borderRadius: "0.8rem", padding: "2rem" }}>
        {/* <h1 className="text-center">{this.state.name}</h1> */}
        <h1 className="text-center">SignUp Here</h1>
        {loader}
        <form>
        <div class="form-group">
            <label for="exampleInputEmail1">Name</label>
            <input
              type="text"
              class="form-control"
              onChange={this.handleName}
            />
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={this.handleEmail}
            />
            <small id="emailHelp" class="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              onChange={this.handlePass}
            />
          </div>
          <label className="errorMessage">{this.state.errorMessage}</label>
          <button type="submit" class="btn btn-primary" onClick={this.login}>
            SignUp
          </button>
        </form>
        <ToastContainer />
      </div>
    );
  }
}