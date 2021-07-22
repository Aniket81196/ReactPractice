export function CakeDetails(props) {
    let cakeMolten={
        image: "/cake1.jfif",
        name: "Choc1",
        rating: 4.5,
        reviews: 100,
        price: 400,
        weight: 1.5,
        flavour: "Chocolate",
        occasion: "Birthday",
        ingredients: ["Refined flour", "Whipped cream", "Chocolate"]
    }
    return (
        <div className="container">
            {console.log(props)}
            <h1>Hello{props.match.params.details}</h1>
           <div className="row mt-5 pb-5 justify-content-between">
            <div class="card col-6" style={{width: "18rem", padding: "0"}}>
                    <img src={cakeMolten.image} className="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">Ingredients: </h5>
                        <ul className="card-text">
                            <li>{cakeMolten.ingredients[0]}</li>
                            <li>{cakeMolten.ingredients[1]}</li>
                            <li>{cakeMolten.ingredients[2]}</li>
                        </ul>
                    </div>
                </div>
                <div className="col-5 card" style={{padding: "0"}}>
                    <div className="card-body d-flex flex-column justify-content-center align-items-center">
                        <h1 className="mb-5">{cakeMolten.name}</h1>
                        <p><label className="font-weight-bold">Rating:- </label>{cakeMolten.rating}/5</p>
                        <p><label className="font-weight-bold">Reviews:-</label> {cakeMolten.reviews}</p>
                        <p><label className="font-weight-bold">Price:-</label> {cakeMolten.price}</p>
                        <p><label className="font-weight-bold">Weight:-</label> {cakeMolten.weight}kg</p>
                        <p><label className="font-weight-bold">Flavour:-</label> {cakeMolten.flavour}</p>
                        <p><label className="font-weight-bold">Occasion:-</label> {cakeMolten.occasion}</p>
                        <a href="#" class="btn btn-primary mt-5 w-50">Buy</a>
                    </div>
                </div>
           </div>
        </div>
    );
  }
  