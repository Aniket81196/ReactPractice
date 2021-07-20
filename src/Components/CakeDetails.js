export function CakeDetails() {
    return (
        <div className="container">
            <h1 className="text-center">Add Cake Details</h1>
            <form>
            <div class="input-group mb-4">
                <div class="custom-file">
                <input type="file" class="custom-file-input" id="validatedInputGroupCustomFile" required/>
                <label class="custom-file-label" for="validatedInputGroupCustomFile">Choose file...</label>
                </div>
                <div class="input-group-append">
                <button class="btn btn-outline-secondary" type="button">Button</button>
                </div>
            </div>
            <div className="form-group">
                <label for="validationServer01">Cake Name:</label>
                <input type="text" class="form-control" id="validationServer01" value="Mark" required/>
            </div>
            <div class="form-row">
                <div class="col-md-6 mb-3 form-inline">
                <label for="validationDefault03 mr-2">Price:</label>
                <input type="text" class="form-control" id="validationDefault03" required/>
                </div>
                <div class="col-md-3 mb-3 form-inline">
                <label for="validationDefault05 mr-2">Weight</label>
                <input type="text" class="form-control" id="validationDefault05" required/>
                </div>
             </div>
             <div className="form-group">
                <label for="validationServer01">Description:</label>
                <input type="text" class="form-control" id="validationServer01" value="Mark" required/>
            </div>
            </form>
        </div>
    );
  }
  