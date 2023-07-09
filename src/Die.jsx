import React from "react";

export default function Die(props){

    const styles = {
        backgroundColor: props.trueOrFalse ? "rgba(89, 227, 145, 1)" : ""
    }

    return(
        <div style={styles}
        className="die-single" 
        onClick={() => props.click(props.id)}>

            <h2 
            className="die-num">{props.value}
            </h2>
            
        </div>
    )
}