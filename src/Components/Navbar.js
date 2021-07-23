import { useState } from "react";
import { Link, withRouter } from "react-router-dom";
let navItem1="Page1";
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
          <li class="nav-item active">
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
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
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
          {props.isUserLoggedIn == false && <Link to="/login">
          <button
              class="btn btn-outline-danger my-2 my-sm-0 ml-2"
            >
              Login
          </button>
          </Link>}
          {props.isUserLoggedIn == true && <Link to="/">
          <button
              class="btn btn-outline-danger my-2 my-sm-0 ml-2"
            >
              Logout
          </button>
          <button
              class="btn btn-outline-warning my-2 my-sm-0 ml-2"
            >
              Cart
          </button>
          </Link>}

        </form>
      </div>
    </nav>
  );
}
export default withRouter(Navbar);
