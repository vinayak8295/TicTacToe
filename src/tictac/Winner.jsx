import React from "react";

const Winner = (props) =>{
  console.log(props.value)
    return(
        <div>
             <h1 style={{
            border: "1px ",
            height: "100px",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}>{props.value} Won</h1>
          
        </div>
    )
}

export default Winner;