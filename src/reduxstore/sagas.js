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
function *CartSaga(){
    console.log("Cart Saga")
    yield takeEvery("Cake_Details", CakeDetails)
    yield takeEvery("Cart_Details", AddCakeToCart)
    yield takeEvery("Cart_Items", CartGenerator)
    yield takeEvery("Cart_Item", CartItemIndex)
    yield takeEvery("Remove_One_Cart_Item", RemoveOneItem)
}
export default function *RootSaga(){
    console.log("root saga")
    yield all([CartSaga()])
    // console.log(yield all([CartSaga]))
}