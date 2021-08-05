import {all, put, takeEvery } from "redux-saga/effects"
import axios from "axios"
function *CakeDetails(action){
    yield put({
        type: "CAKE_FETCHING"
    })
    console.log("Appended Url is: ", action.appendUrl)
    let apiurl= "https://apifromashu.herokuapp.com/api/cake/" + action.appendUrl;
    console.log("Appended Url is: ", apiurl)
    let response=yield axios({
        method: "get",
        url: apiurl
    })
    // }).then((response)=>{
    //     console.log("response from all cakes api", response.data);
    //     // setCakeDetails(response.data.data);
    // },(error)=>{
    //     console.log("error from all cakes api", error);
    // })
    if(response.data.data){
        yield put({
            type: "CAKE_SUCCESS",
            payload: response.data.data
        })
    }
    else{
        yield put({
            type: "CAKE_FAILURE"
        })
    }
}
function *AddCakeToCart(action){
    yield put({
        type: "ADD_CAKE_FETCHING"
    })
    console.log("Appended data in cart is: ", action.data)
    let addToCartUrl = "https://apifromashu.herokuapp.com/api/addcaketocart"
    let response=yield axios(
        {
            method: 'post',
            url: addToCartUrl,
            headers: {
                authToken: localStorage.token
            },
            data: action.data
        })
    // ).then((response) => {
    //     // console.log("abcd", cakeDetails)
    //     // toast.success(cakeDetails.name + "Added to cart")
    //     // alert("added to cart")
    //     console.log("response from add to cake cart : ", response)
    //     props.history.push("/cart")
    // }, (error) => {
    //     alert("error while adding to cart")
    //     console.log("error from cake details api : ", error)
    // })
    console.log("Add cake to cart response.data.data", response.data.data)
    if(response.data.data){
        yield put({
            type: "ADD_CAKE_SUCCESS",
            payload: response.data.data
        })
    }
    else{
        yield put({
            type: "ADD_CAKE_FAILURE"
        })
        yield console.log("error from cake details api : ")
    }
}
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
function *CartItemIndex(action){
    yield put({
        type: "CART_ITEM_FETCHING"
    })
    let addToCartUrl = "https://apifromashu.herokuapp.com/api/addcaketocart"
    let response=yield axios({
        method: 'post',
        url: addToCartUrl,
        headers: {
            authToken: localStorage.token
        },
        data: action.indexItem
    })
    console.log("Response from cart index item", response.data.data)
    if(response.data.data){
        yield put({
            type: "CART_ITEM_SUCCESS",
            payload: response.data.data
        })
    }
    else{
        yield put({
            type: "CART_ITEM_FAILURE"
        })
    }
    console.log(".....", action.dispatch)
    yield put(action.dispatch)
    // let addToCartUrl = "https://apifromashu.herokuapp.com/api/addcaketocart"
        // axios(
        //     {
        //         method: 'post',
        //         url: addToCartUrl,
        //         headers: {
        //             authToken: localStorage.token
        //         },
        //         data: props.cartDetails[index]
        //     }
        // ).then((response) => {
        //     // alert("added to cart")
        //     console.log("response from add to cake cart : ", response)
        //     toast.success("Cake added to cart")
        // }, (error) => {
        //     alert("error while adding to cart")
        //     console.log("error from cake details api : ", error)
        // }).then(()=>{
        //     props.dispatch({
        //         type: "Cart_Items"
        //     })
        // })
}
function *RemoveOneItem(action){
    console.log("???",action.indexItem.cakeId1)
    yield put({
        type: "REMOVE_ONE_CART_ITEM_FETCHING"
    })
    let removeOneCartUrl = "https://apifromashu.herokuapp.com/api/removeonecakefromcart"
    let response=yield axios({
        method: 'post',
        url: removeOneCartUrl,
        headers: {
            authToken: localStorage.token
        },
        data: action.indexItem.cakeId1
    })
    console.log("Response from remove one cart item", response.data)
    if(response.data.message=="Removed  item from cart"){
        yield put({
            type: "REMOVE_ONE_CART_ITEM_SUCCESS",
            payload: response.data.message
        })
    }
    else{
        yield put({
            type: "REMOVE_ONE_CART_ITEM_FAILURE"
        })
    }
    console.log(".....", action.dispatch)
    yield put(action.dispatch)
}
function *RemoveItem(action){
    console.log("???",action.indexItem)
    yield put({
        type: "REMOVE_CART_ITEM_FETCHING"
    })
    let removeCartUrl = "https://apifromashu.herokuapp.com/api/removecakefromcart"
    let response=yield axios({
        method: 'post',
        url: removeCartUrl,
        headers: {
            authToken: localStorage.token
        },
        data: action.indexItem.cakeDetails1
    })
    console.log("Response from remove cart item????????", response)
    if(response.data.message=="Removed  item from cart"){
        yield put({
            type: "REMOVE_CART_ITEM_SUCCESS",
            payload: response.data.message
        })
    }
    else{
        yield put({
            type: "REMOVE_CART_ITEM_FAILURE"
        })
    }
    console.log(".....", action.dispatch)
    yield put(action.dispatch)
}
function *OrderCake(action){
    console.log("???",action.order)
    yield put({
        type: "ORDER_CAKE_FETCHING"
    })
    let orderCakeUrl = "https://apifromashu.herokuapp.com/api/addcakeorder"
    let response=yield axios({
        method: 'post',
        url: orderCakeUrl,
        headers: {
            authToken: localStorage.token
        },
        data: action.order
    })
    console.log("Response from order cake????????", response)
    if(response.data.message=="Removed  item from cart"){
        yield put({
            type: "ORDER_CAKE_SUCCESS",
            payload: response.data.message
        })
    }
    else{
        yield put({
            type: "ORDER_CAKE_FAILURE"
        })
    }
}
function *PastOrdersData(action){
    console.log("past orders", action)
    yield put({
        type: "PAST_ORDER_FETCHING"
    })
    let PastCakeOrdersUrl = "https://apifromashu.herokuapp.com/api/cakeorders"
    let response=yield axios({
        method: 'post',
        url: PastCakeOrdersUrl,
        headers: {
            authToken: localStorage.token
        }
    })
    console.log("Response from past cake orders????????", response.data.cakeorders)
    if(response.data.cakeorders){
        yield put({
            type: "PAST_ORDER_SUCCESS",
            payload: response.data.cakeorders
        })
    }
    else{
        yield put({
            type: "PAST_ORDER_FAILURE"
        })
    }
}
function *CakeDetails1(){
    yield takeEvery("Cake_Details", CakeDetails)
}

function *CartSaga(){
    console.log("Cart Saga")
    yield takeEvery("Cart_Details", AddCakeToCart)
    yield takeEvery("Cart_Items", CartGenerator)
    yield takeEvery("Cart_Item", CartItemIndex)
    yield takeEvery("Remove_One_Cart_Item", RemoveOneItem)
    yield takeEvery("Remove_Cart_Item", RemoveItem)
}
function *PurchaseCake(){
    yield takeEvery("Order_Cake", OrderCake)
}
function *PastOrders(){
    yield takeEvery("Cake_History", PastOrdersData)
}
export default function *RootSaga(){
    console.log("root saga")
    yield all([CakeDetails1(),CartSaga(), PurchaseCake(), PastOrders()])
    // console.log(yield all([CartSaga]))
}