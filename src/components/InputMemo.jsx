import React from "react";
import { DefaultButton } from "./DefaultButton";

export const InputMemo = () => {
    return(
        <>
        <div>
        <p>今日のメモ</p>
        <input type="text" />
        <DefaultButton  buttonName="追加"/>
        </div>
        </>
    );
}