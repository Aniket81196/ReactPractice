import {all, put, takeEvery } from "redux-saga/effects"
import axios from "axios"

function *CartGenerator(){
    yield put({
        type: "CART_FETCHING"
    })
    let response=yield axios({
        method: "post",
        url: "https://apifromashu.herokuapp.com/api/cakecart",
        headers: {
            authToken: localStorage.token
        },
        requesObj: {}
    })
    if(response.data.data){
        console.log("Saga data", response.data.data)
       yield put({
            type: "CART_SUCCESS",
            payload: response.data.data
       })
    }
    else{
        yield put({
            type: "CART_FAILURE"
       })
    }
}

function *CartSaga(){
    console.log("Cart Saga")
    yield takeEvery("Cart_Items", CartGenerator)
}
export default function *RootSaga(){
    console.log("root saga")
    yield all([CartSaga()])
    // console.log(yield all([CartSaga]))
}