import React from "react";

export const DefaultButton = (props) => {
    const {buttonName} = props;
    return(
        <>
        <button>{buttonName}</button>
        </>
    );
}