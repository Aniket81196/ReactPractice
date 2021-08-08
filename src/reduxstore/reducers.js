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
// Cart Index Item Reducer(plus button)
export let CartIndexItemReducer= function(state={
    dell:14,addToast1:false
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
            state["addToast1"]=true
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
// Order Cake Reducer
export let OrderCakeReducer=function(state={
    dell: 18
},action){
    switch(action.type){
        case "ORDER_CAKE_FETCHING":{
           state={...state}
           state["isLoading"]=true 
           return state
        }
        case "ORDER_CAKE_SUCCESS":{
            state={...state}
            state["isLoading"]=false
            state["ordercake"]=action.payload
            return state
        }
         case "ORDER_CAKE_FAILURE":{
            state={...state}
            state["isLoading"]=false
            state["ordercakeerror"]="Some error occurred in add cake to cart fetch"
            return state
        }
        default: return state;
    }
}
// Past Orders
export let PastOrderReducer=function(state={
    dell: 19
},action){
    switch(action.type){
        case "PAST_ORDER_FETCHING":{
           state={...state}
           state["isLoading"]=true 
           return state
        }
        case "PAST_ORDER_SUCCESS":{
            console.log("pat success", action.payload)
            state={...state}
            state["isLoading"]=false
            state["pastorders"]=action.payload
            return state
        }
         case "PAST_ORDER_FAILURE":{
            state={...state}
            state["isLoading"]=false
            state["pastorderserror"]="Some error occurred in past order fetch"
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
// Remove One Item(minus button)
export let RemoveOneCartItemReducer= function(state={
    dell:15,addToast2:false
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
            state["addToast2"]=true
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
// Remove Button Reducer
export let RemoveButtonReducer= function(state={
    dell:16,addToast3:false
},action){
    switch(action.type){
        case "REMOVE_CART_ITEM_FETCHING":{
           state={...state}
           state["isLoading"]=true 
           return state
        }
        case "REMOVE_CART_ITEM_SUCCESS":{
            state={...state}
            state["isLoading"]=false
            state["indexcartitem"]=action.payload
            state["addToast3"]=true
            return state
        }
         case "REMOVE_CART_ITEM_FAILURE":{
            state={...state}
            state["isLoading"]=false
            state["indexcarterror"]="Some error occurred in remove cake from cart fetch"
            return state
        }
        default: return state;
    }
}
// Add New Cake
export let AddNewCakeReducer= function(state={
    dell:19,addToast5:false
},action){
    switch(action.type){
        case "ADD_NEW_CAKE_FETCHING":{
           state={...state}
           state["isLoading"]=true 
           return state
        }
        case "ADD_NEW_CAKE_SUCCESS":{
            state={...state}
            state["isLoading"]=false
            state["addnewcake"]=action.payload
            state["addToast5"]=true
            return state
        }
         case "ADD_NEW_CAKE_FAILURE":{
            state={...state}
            state["isLoading"]=false
            state["addnewcakeerror"]="Some error occurred in add new cake fetch"
            return state
        }
        default: return state;
    }
}
// Upload Cake Image Reducer
export let UploadImageReducer= function(state={
    dell:20,addToast6:false
},action){
    switch(action.type){
        case "UPLOAD_IMAGE_FETCHING":{
           state={...state}
           state["isLoading"]=true 
           return state
        }
        case "UPLOAD_IMAGE_SUCCESS":{
            state={...state}
            state["isLoading"]=false
            state["uploadimage"]=action.payload
            state["addToast5"]=true
            return state
        }
         case "UPLOAD_IMAGE_FAILURE":{
            state={...state}
            state["isLoading"]=false
            state["uploadimageerror"]="Some error occurred in upload image fetch"
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