import {applyMiddleware, combineReducers, createStore} from "redux";
import {Reducer1, Reducer2, AuthReducer, CartReducer, CakeReducer, AddCakeToCartReducer, CartIndexItemReducer, RemoveOneCartItemReducer} from "./reducers";
import RootSaga from "./sagas"
import createSaga from "redux-saga";
let sagaMiddleware=createSaga();
let reducers= combineReducers({Reducer1, Reducer2, AuthReducer, CartReducer, CakeReducer, AddCakeToCartReducer, CartIndexItemReducer, RemoveOneCartItemReducer});
let store= createStore(reducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(RootSaga)
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
