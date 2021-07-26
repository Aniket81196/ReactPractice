import { withRouter } from "react-router";

function Cake(prop) {
  
  function showDetails(){
    console.log(prop);
    prop.history.push(`/cake/${prop.data.cakeid}`);
  }
  return (
    <div class="card col-3 p-0 mt-5 ml-1 mr-1" style={{width: "18rem"}} onClick={showDetails}>
      <img src={prop.data.image} class="card-img-top" alt="..." style={{width: "100%",height:"18rem"}}/>
      <div class="card-body">
        <h5 class="card-title text-center">{prop.data.name}</h5>
        <p class="card-text text-center">
        {prop.data.price}
        </p>
        <a href="#" class="btn btn-primary w-100">
            Buy
        </a>
      </div>
    </div>
  );
}
export default withRouter(Cake);
