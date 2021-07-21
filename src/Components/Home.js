import { Carousel } from "./Carousel";
import { Cakelist } from "./Cakelist";

export function Home(props){ //the components passed in <Route>)(Ex:-<Route to="" component={Home}> in App.js) get access to props object by default, hence we can anytime add props as parameter to such components and make use of it in component
    return(
        <div>
            <Carousel></Carousel>
            <Cakelist history={props.history}></Cakelist>
        </div>
    );
}