import React from "react";
import { DefaultButton } from "./DefaultButton";

export const MemoList = () => {
    return(
        <>
        <div>
            <p>Memoリスト</p>
            <ul>
                <li>お餅<DefaultButton buttonName="追加"/><DefaultButton buttonName="削除"/></li>
                <li>ポテチ</li>
                <li>麦チョコ</li>
            </ul>
        </div>
        </>
    );
}