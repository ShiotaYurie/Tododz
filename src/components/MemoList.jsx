import React, { useState } from "react";
import { DefaultButton } from "./DefaultButton";
import { InputMemo } from "./InputMemo";

export const MemoList = () => {
    
    const [memoText, setMemoText] = useState('');
    const [completeMemos,setCompleteMemos] = useState([]);

    //入力フォーム
    const onChangeMemoText = (event) => setMemoText(event.target.value)

    //追加の関数
    const onClickAdd = () => {
        if (memoText === "" ) return;//エラーハンドリング（何も入力値ない時）
        const newMemos = [...completeMemos,memoText];
        setCompleteMemos(newMemos);
        setMemoText();//初期化
        // alert(memoText);
    };

    const onClickDelite = (index) => {
        const deliteMemos = [...completeMemos];//stateをnewMemosに格納
        deliteMemos.splice(index, 1); //削除する関数(splice) 配列の0番目から1つ削除
        setCompleteMemos(deliteMemos);
    };

    return(
        <>
        <InputMemo memoText={memoText} onChange={onChangeMemoText} clickButton={onClickAdd}/>
        <div className="memo-list">
            <p>Memoリスト</p>
            <ul>
                {completeMemos.map((memo)=> {
                    return(
                        <div key={memo} className="list-row">
                        <li className = "list-line">{memo}</li>
                        <div className="list-button">
                        <DefaultButton className="plus-button" color="blue" buttonName="編集"/>
                        <DefaultButton clickButton={onClickDelite} className="delete-button" color="blue" buttonName="削除"/>
                        </div>
                        </div>
                    );
                })}
            </ul>
        </div>
        </>
    );
}