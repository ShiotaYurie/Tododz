import React from "react";


export const DefaultButton = (props) => {
    //ビューのstate
    const {buttonName} = props;
    const {color} = props;
    const buttonStyle = {
        color,
        fontSize: '18px'
    };

    //Click
    const {clickButton} = props;

    return(
        <>
        <button  onClick={clickButton} style={buttonStyle}>{buttonName}</button>
        </>
    );
}