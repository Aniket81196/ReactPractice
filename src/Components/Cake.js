export function Cake(prop) {
  return (
    <div class="card col-3 p-0" style={{width: "18rem;"}}>
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
