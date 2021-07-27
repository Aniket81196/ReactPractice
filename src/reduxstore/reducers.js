export let AuthReducer= function(state={
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