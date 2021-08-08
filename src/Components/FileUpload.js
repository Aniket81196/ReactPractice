import { withRouter } from "react-router";
import { connect } from "react-redux";
import { useState, useEffect} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";
let cake={}
function UploadImageCake(props){
    function UploadImage(e){
        e.preventDefault();
        const formData = new FormData(); 
        formData.append('file',cake.image);

        if("image" in cake){
            toast.success("Image Uploaded Successful")
            props.history.push("/addcake")
            props.dispatch({
                type: "Cake_Image",
                cakeImage: formData,
            })
        }
        else{
            toast.error("Add Image First")
        }
    }
    function fileUpload(e){
        e.preventDefault()
        cake.image=e.target.files[0]
        console.log(e.target.files[0])

    }
    
    return(
        <div className="mt-5">
        <h1 style={{textAlign:"center", marginBottom:"30px"}}>Add Image</h1>
        <form style={{ width: "50%", margin: "auto", border: "0.01rem solid black", borderRadius: "0.8rem", padding: "2rem"}}>
            <div class="input-group">
                <div class="custom-file">
                <input type="file" class="custom-file-input" id="validatedInputGroupCustomFile" onChange={fileUpload} required/>
                <label class="custom-file-label" for="validatedInputGroupCustomFile">Choose file...</label>
                </div>
            </div>
            <div className={"d-flex justify-content-center mt-3"}>
            <button class="btn btn-outline-success w-100" type="button" onClick={UploadImage}>Upload</button>
            </div>
        </form>
        <ToastContainer />
    </div>
    );
}
UploadImageCake=withRouter(UploadImageCake)
export default connect(function(state,props){
    return{
        imageUrl: state["UploadImageReducer"]["uploadimage"]
    }
})(UploadImageCake)