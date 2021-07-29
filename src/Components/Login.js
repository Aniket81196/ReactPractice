import axios from "axios";
import { Component } from "react";//import when using class
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// Statefull Component(Class)
class Login extends Component {
  constructor(props) {
    super();
    // Initializing the State
    this.state = {
        // name: "Aniket"
    };
    console.log(props);
  }
  user = {};
  login = (e) => {//here we convert normal function to arrow function because we using class so we need to bind this function with the event below
    e.preventDefault();
   
    // if(this.user.email=="aniket8@neosoft.com" && this.user.password=="test"){
         // this.props.history.push("/");
    // }
    let apiurl= "https://apifromashu.herokuapp.com/api/login"
        axios({
          method: "post",
          url: apiurl,
          data: this.user
        }).then((response)=>{
          console.log("response from login api", response);
          if(response.data.token){
            // this.props.loggedin();
            this.props.dispatch({
              type: "LOGIN",
              payload: response.data
            })
            console.log(this.props);
            localStorage.token=response.data.token;
            toast.success('Login Successful', {
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
            toast.error('Invalid Credentials', {
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
          console.log("response from login api", error);
          // Updating the State
          this.setState({
            // name: "Aniket Chavan",
            errorMessage: "Enter all the details"
          })
        })
        e.preventDefault();
  };
  handleEmail = (e) => {
    this.user.email = e.target.value;
    
  };
  handlePass = (e) => {
    this.user.password = e.target.value;
  };
  render() {
    return (
      <div className="mt-5" style={{ width: "50%", margin: "auto", border: "0.01rem solid black", borderRadius: "0.8rem", padding: "2rem"}}>
        {/* <h1 className="text-center">{this.state.name}</h1> */}
        <h1 className="text-center">Login Here</h1>
        <form>
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
          <div className="mb-3">
            {console.log("signUp",this.props) }
            <Link to="/signup">New User? SignUp Here</Link>
            <Link to="/forgot-pass" style={{float:"right"}}>Forgot Password?</Link>
          </div>
          <label className="errorMessage">{this.state.errorMessage}</label>
          <button type="submit" class="btn btn-primary" onClick={this.login}>
            Submit
          </button>
        </form>
        <ToastContainer />
      </div>
    );
  }
}
// export default withRouter(Login);
Login=withRouter(Login);
export default connect()(Login); //connecting Login Component with store

// Stateless Component(Function)
// export function Login(){
//     let user={};
//     let login=function(e){
//         e.preventDefault();
//         console.log("Object is: ", user);
//     }
//     let handleEmail=function(e){
//         user.email=e.target.value;
//     }
//     let handlePass=function(e){
//         user.password=e.target.value;
//     }
//     return(
//         <div className="mt-5" style={{width: "80%", margin: "auto"}}>
//             <h1>Login Here</h1>
//             <form>
//                 <div class="form-group">
//                     <label for="exampleInputEmail1">Email address</label>
//                     <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleEmail}/>
//                     <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
//                 </div>
//                 <div class="form-group">
//                     <label for="exampleInputPassword1">Password</label>
//                     <input type="password" class="form-control" id="exampleInputPassword1" onChange={handlePass}/>
//                 </div>
//                 <button type="submit" class="btn btn-primary" onClick={login}>Submit</button>
//             </form>
//         </div>
//     );
// }
