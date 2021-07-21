import queryString from "query-string";
export function Search(props){
    let query=queryString.parse(props.location.search);
    return(
        <div className="container mt-5">
            <h1>Search Cakes for {query.q}</h1>
        </div>
    );
}