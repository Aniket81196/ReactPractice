import { useState } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
// let navItem1="Page1";
function Navbar(props) {
  var [title, setTitle] = useState("Cake Galaxy");
  // function demo(event) {
  //   event.preventDefault();
  //   var value = document.getElementById("search").value;
  //   setTitle(value);
  // }
  var [searchText, setSearchText]=useState(undefined);
  function search(ev){
    ev.preventDefault();
    if(searchText){
      props.history.push(`/search?q=${searchText}`);
    }
  } 
  function getSearchText(ev){
    setSearchText(ev.target.value);
  }
  function logout(e){
    e.preventDefault();
    props.history.push("/")
    localStorage.clear();
    window.location.reload();
    console.log("Logout",props)
  }
  function cart(e){
    e.preventDefault()
    props.history.push("/cart")
  }
  function formSub(e){
    e.preventDefault();
  }
  // Below we can <Link> is used which is a component present in react-router-dom which is used to navigate to particular URL specified in "to" attribute, so basically on click over the element within <Link> we will be navigated to URL present in "to"
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link to="/" class="navbar-brand" href="#"> 
        {title}
      </Link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-between" id="navbarNavDropdown">
        <ul class="navbar-nav">
          {/* <li class="nav-item active">
            <a class="nav-link" href="#">
              {navItem1} <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Features
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Pricing
            </a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Dropdown link
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a class="dropdown-item" href="#">
                Action
              </a>
              <a class="dropdown-item" href="#">
                Another action
              </a>
              <a class="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </li> */}
          {props.name && <li className="navbar-brand">
          Welcome {props.name}
          </li>}
        </ul>
        <form class="form-inline my-2 my-lg-0" onSubmit={formSub}>
          <input onChange={getSearchText}
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            id="search"
          />
            <button
                onClick={search}
                class="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
            </button>
          {/* <button
              class="btn btn-outline-success my-2 my-sm-0"
              type="submit"
              onClick={demo}
            >
              Search
          </button> */}
          {!props.isUserLoggedIn && <Link to="/login">
          <button
            class="btn btn-outline-danger my-2 my-sm-0 ml-2"
            >
              Login
          </button>
          </Link>}
          {props.isUserLoggedIn &&
          <button
             class="btn btn-outline-danger my-2 my-sm-0 ml-2" onClick={logout}
            >
              Logout
          </button>}
          {console.log("Navbar", props)}
          {props.isUserLoggedIn &&
            <button
              class="btn btn-outline-warning my-2 my-sm-0 ml-2" onClick={cart}
            >
              Cart
          </button>}
        </form>
      </div>
    </nav>
  );
}
// export default withRouter(Navbar);
Navbar= withRouter(Navbar)
export default connect(function(state, props){
  console.log("Store State", state)
  return { 
    isUserLoggedIn: state["AuthReducer"]["isUserLoggedIn"], //this state object is state of store which contains AuthReducer function object and this function object contains isUserLoggedIn, and then value fetched is stored in isUserLoggedIn prop of Navbar component, same goes for below name.
    name: state["AuthReducer"]["user"] && state["AuthReducer"]["user"]["name"]
  }
})(Navbar) 
