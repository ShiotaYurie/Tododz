import React from "react";

export const DefaultButton = (props) => {
  //ビューのstate
  const { buttonName, value } = props;
  const { color } = props;
  const buttonStyle = {
    color,
    fontSize: "18px",
  };

  //Click
  const { clickButton, changeButton } = props;

  return (
    <>
      <button
        onChange={changeButton}
        onClick={clickButton}
        value={value}
        style={buttonStyle}
      >
        {buttonName}
      </button>
    </>
  );
};
