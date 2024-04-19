import React  from "react";

function Loader (){
 <div className="container">
    <div className="row justify-content-center align-item-center" style={{height:'100vh'}}>
        <div className="col-sm-12">
        <div className="spinner-border text-primary" role="status">
        <span className="sr-only">Loading...</span>
       </div>
        </div>
    </div>
 </div>
}

export default Loader;