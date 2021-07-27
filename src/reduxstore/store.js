import {combineReducers, createStore} from "redux";
import {Reducer1, Reducer2, AuthReducer} from "./reducers";
let reducers= combineReducers({Reducer1, Reducer2, AuthReducer});
let store= createStore(reducers);
export default store;


store.subscribe(()=>{
    console.log(store);
    console.log("I will be called on any event on store", store.getState()); //everytime dispatch is called this subscribe() will be called
})
store.dispatch({
    type: "DELL_LAPTOP"
})
let storeData= store.getState();
console.log("state of the store is: ", store.getState());

store.dispatch({
    type: "DELL_LAPTOP1"
})
let storeData1= store.getState();
console.log("state of the store is: ", storeData1);
