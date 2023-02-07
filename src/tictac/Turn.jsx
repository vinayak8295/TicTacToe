import React from "react";

const Turn = (props) =>{
    
    return(
        <div>
             <h1 style={{
            border: "1px ",
            height: "100px",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}>{props.value} Turn</h1>
          
        </div>
    )
}

export default Turn;