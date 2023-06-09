import React from "react";
export default function Die (props) {
    const styles = { backgroundColor : props.isHeld ? "#59E391" : "White"}

    return(
       <div className="die" style = {styles} onClick = {() =>props.holdDice(props.id)}>
        <h1 className="die_h1"> {props.value} </h1>
       </div>
    )

}