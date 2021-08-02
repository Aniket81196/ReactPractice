export let AuthReducer= function(state={
    isLoading: true,
    isUserLoggedIn: localStorage.token?true:false
}, action){
    switch(action.type){
        case "LOGIN": {
        state={...state}
        state["isUserLoggedIn"]=true
        state["user"]=action.payload
        return state
        }
        default: return state;
    }
}
export let CartReducer= function(state={
    dell:10
},action){
    switch(action.type){
        case "CART_FETCHING":{
           state={...state}
           state["isLoading"]=true 
           return state
        }
        case "CART_SUCCESS":{
            state={...state}
            state["isLoading"]=false
            state["cartitems"]=action.payload
            return state
        }
         case "CART_FAILURE":{
            state={...state}
            state["isLoading"]=false
            state["carterror"]="Some error occurred in cart fetch"
            return state
        }
        default: return state;
    }
}
// export let AddToCartReducer= function(state={
//     dell:11
// },action){
//     switch(action.type){
//         case "ADD_CART_FETCHING":{
//            state={...state}
//            state["isLoading"]=true 
//            return state
//         }
//         case "ADD_CART_SUCCESS":{
//             state={...state}
//             state["isLoading"]=false
//             state["addcart"]=action.payload
//             return state
//         }
//          case "ADD_CART_FAILURE":{
//             state={...state}
//             state["isLoading"]=false
//             state["addcarterror"]="Some error occurred in cart fetch"
//             return state
//         }
//         default: return state;
//     }
// }
export let Reducer1= function(state={
    dell:10
}, action){
    switch(action.type){
        case "SOMEACTION":{
            state= {...state}
            return state
        }
        case "DELL_LAPTOP":{
            state= {...state}
            state["dell"]-=1;
            return state
        }
        case "DELL_LAPTOP1":{
            state= {...state}
            state["dell"]-=1;
            return state
        }
        default: return state;
    }
}
export let Reducer2= function(state={
    attendees: 20
}, action){
    switch(action.type){
        case "REGISTER":{
            state= {...state}
            state["attendees"]+=1
            return state
        }
        case "DEREGISTER":{
            state= {...state}
            state["attendees"]-=1
            return state;
        }
        default: return state;
    }
}