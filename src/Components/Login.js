import { Component } from "react";//import when using class
// Statefull Component(Class)
export class Login extends Component {
  constructor() {
    super();
    // Initializing the State
    this.state = {
        name: "Aniket"
    };
  }
  user = {};
  login = (e) => {//here we convert normal function to arrow function because we using class so we need to bind this function with the event below
    e.preventDefault();
    // Updating the State
    this.setState({
        name: "Aniket Chavan",
        errorMessage: "Enter all the details"
    })
  };
  handleEmail = (e) => {
    this.user.email = e.target.value;
  };
  handlePass = (e) => {
    this.user.password = e.target.value;
  };
  render() {
    return (
      <div className="mt-5" style={{ width: "80%", margin: "auto" }}>
        <h1 className="text-center">{this.state.name}</h1>
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
          <label className="errorMessage">{this.state.errorMessage}</label>
          <button type="submit" class="btn btn-primary" onClick={this.login}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

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
