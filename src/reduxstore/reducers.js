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
// Cake Details
export let CakeReducer=function(state={dell:12}, action){
    switch(action.type){
        case "CAKE_FETCHING":{
           state={...state}
           state["isLoading"]=true 
           return state
        }
        case "CAKE_SUCCESS":{
            state={...state}
            state["isLoading"]=false
            state["cakeitem"]=action.payload
            return state
        }
         case "CAKE_FAILURE":{
            state={...state}
            state["isLoading"]=false
            state["cakeerror"]="Some error occurred in cake fetch"
            return state
        }
        default: return state;
    }
}
// Add Cake To Cart
export let AddCakeToCartReducer= function(state={
    dell:13,addToast:false
},action){
    switch(action.type){
        case "ADD_CAKE_FETCHING":{
           state={...state}
           state["isLoading"]=true 
           return state
        }
        case "ADD_CAKE_SUCCESS":{
            state={...state}
            state["isLoading"]=false
            state["caketocartitem"]=action.payload
            state["addToast"]=true
            return state
        }
         case "ADD_CAKE_FAILURE":{
            state={...state}
            state["isLoading"]=false
            state["caketocarterror"]="Some error occurred in add cake to cart fetch"
            return state
        }
        default: return state;
    }
}
// Cake Cart
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
// Cart Index Item Reducer
export let CartIndexItemReducer= function(state={
    dell:14,addToast:false
},action){
    switch(action.type){
        case "CART_ITEM_FETCHING":{
           state={...state}
           state["isLoading"]=true 
           return state
        }
        case "CART_ITEM_SUCCESS":{
            state={...state}
            state["isLoading"]=false
            state["indexcartitem"]=action.payload
            state["addToast"]=true
            return state
        }
         case "CART_ITEM_FAILURE":{
            state={...state}
            state["isLoading"]=false
            state["indexcarterror"]="Some error occurred in add cake to cart fetch"
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
// Remove One Item 
export let RemoveOneCartItemReducer= function(state={
    dell:15,addToast:false
},action){
    console.log(".,.,..",action)
    switch(action.type){
        
        case "REMOVE_ONE_CART_ITEM_FETCHING":{
           state={...state}
           state["isLoading"]=true 
           return state
        }
        case "REMOVE_ONE_CART_ITEM_SUCCESS":{
            state={...state}
            state["isLoading"]=false
            console.log(",,,,,,,,,",action.payload)
            state["removeonecartitem"]=action.payload
            state["addToast"]=true
            return state
        }
         case "REMOVE_ONE_CART_ITEM_FAILURE":{
            state={...state}
            state["isLoading"]=false
            state["removeonecarterror"]="Some error occurred in remove one cake from cart fetch"
            return state
        }
        default: return state;
    }
}
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