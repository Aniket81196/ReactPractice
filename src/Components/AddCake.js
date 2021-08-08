import { withRouter } from "react-router";
import { connect } from "react-redux";
import { useState, useEffect} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function AddCake(props){
    let cake={};
    // let ingredients=[];
    function getName(e){
        cake.name=e.target.value
    }
    function getPrice(e){
        cake.price=e.target.value
    }
    function getDescription(e){
        cake.description=e.target.value
    }
    function getWeight(e){
        cake.weight=e.target.value
    }
    function getFlavour(e){
        cake.flavour=e.target.value
    }
    function getIngredients(e){
      cake.ingredients=e.target.value.split(",")
    }
    function AddCake1(e){
        e.preventDefault();
        console.log("defghij",cake)
        // console.log("abcdefg",props.imageUrl.imageUrl)
        cake.image= props.imageUrl.imageUrl
        console.log("Cake Updated", cake)
        if("name" in cake && "price" in cake && "description" in cake && "weight" in cake && "flavour" in cake && "ingredients" in cake && "eggless" in cake && "image" in cake){
            toast.success("New Cake Added Successful")
            props.dispatch({
                type: "ADD_NEW_CAKE",
                newCake: cake 
            })
        }
        else{
            toast.error("Fill all the details")
        }
    }
    function getEggless(e){
        cake.eggless=e.target.value
    }
    // function UploadImage(e){
    //     e.preventDefault();
    //     const formData = new FormData(); 
    //     formData.append('file',cake.image);

    //     if("image" in cake){
    //         toast.success("Image Uploaded Successful")
    //         props.dispatch({
    //             type: "Cake_Image",
    //             cakeImage: formData
    //         })
    //     }
    //     else{
    //         toast.error("Add Image First")
    //     }
    // }
    // function fileUpload(e){
    //     e.preventDefault()
    //     cake.image=e.target.files[0]
    //     console.log(e.target.files[0])

    // }
    
    return(
        <div>
        <h1 className={"mt-2 text-center"}>Add Cake</h1>
        {/* {console.log("Purchase",props)} */}
        <form style={{ width: "50%", margin: "auto", border: "0.01rem solid black", borderRadius: "0.8rem", padding: "2rem"}}>
            <div class="form-row">
                <div class="form-group col-md-6">
                <label for="inputEmail4">Name</label>
                <input type="text" class="form-control" id="inputEmail4" onChange={getName}/>
                </div>
                <div class="form-group col-md-6">
                <label for="inputPassword4">Price</label>
                <input type="text" class="form-control" id="inputPassword4" onChange={getPrice}/>
                </div>
            </div>
            <div class="form-group">
                <label for="inputAddress">Description</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" onChange={getDescription}></textarea>
            </div>
            <div class="form-row">
                <div class="form-group col-md-6">
                <label for="inputCity">Weight</label>
                <input type="text" class="form-control" id="inputCity" onChange={getWeight}/>
                </div>
                <div class="form-group col-md-6">
                <label for="inputState">Flavour</label>
                <input type="text" class="form-control" id="inputPin" onChange={getFlavour}/>
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col-md-12">
                <label for="inputCity">Ingredients</label>
                <input type="text" class="form-control" id="inputArea" onChange={getIngredients} placeholder="Insert Ingredients Seperated By Comma"/>
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col-md-12">
                    <label for="inputEggless" className="mr-3">Eggless? :</label>
                    <div class="form-check form-check-inline" id="inputEggless">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="true" onClick={getEggless}/>
                        <label class="form-check-label" for="inlineRadio1">True</label>
                        </div>
                        <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="false" onClick={getEggless}/>
                        <label class="form-check-label" for="inlineRadio2">False</label>
                    </div>
                </div>
            </div>
            {/* <div class="input-group">
                <div class="custom-file">
                <input type="file" class="custom-file-input" id="validatedInputGroupCustomFile" onChange={fileUpload} required/>
                <label class="custom-file-label" for="validatedInputGroupCustomFile">Choose file...</label>
                </div>
                <div class="input-group-append">
                <button class="btn btn-outline-success" type="button" onClick={UploadImage}>Upload</button>
                </div>
            </div> */}
            <div className={"d-flex justify-content-center mt-3"}>
                <button class="btn btn-primary w-50" onClick={AddCake1}>Add Cake</button>
            </div>
        </form>
        <ToastContainer />
    </div>
    );
}
AddCake=withRouter(AddCake)
export default connect(function(state,props){
    return{
        imageUrl: state["UploadImageReducer"]["uploadimage"]
    }
})(AddCake)