import React, { memo, useState } from "react";
import { DefaultButton } from "./DefaultButton";
import { InputMemo } from "./InputMemo";
import { EditMemo } from "./EditMemo";

export const MemoList = () => {
  //state
  const [memoText, setMemoText] = useState(""); //input
  const [completeMemos, setCompleteMemos] = useState([]); //List

  console.log("completeMemos");
  console.log(completeMemos);

  // const [editMemo, setEditMemo] = useState([]);
  const [editNewMemo, setEditNewMemos] = useState(""); //編集した値

  // 追加したやつ；編集完了の表示
  const [isDisplayEdit, setIsEditDisplay] = useState(false);

  //入力フォーム
  const onChangeMemoText = (event) => setMemoText(event.target.value);

  //編集フォーム
  const onChangeEditText = (event) => setEditNewMemos(event.target.value);

  //追加の関数
  const onClickAdd = () => {
    if (memoText === "") return; //エラーハンドリング（何も入力値ない時）
    const newMemos = [...completeMemos, memoText];
    setCompleteMemos(newMemos);
    setMemoText(); //初期化
    // alert(memoText);
  };

  //削除
  const onClickDelite = (index) => {
    const deliteMemos = [...completeMemos]; //stateをnewMemosに格納
    deliteMemos.splice(index, 1); //削除する関数(splice) 配列の0番目から1つ削除
    setCompleteMemos(deliteMemos);
  };

  //編集ボタンクリックしたら元の値が消え,入力フォームに切り替わる
  const onClickEdit = (index) => {
    const editMemos = [...completeMemos]; //stateをeditMemosに格納
    editMemos.splice(index, 1); //削除する関数(splice) 配列の0番目から1つ削除
    // const editNewMemo = [...EditMemo,completeMemos[index]]

    setCompleteMemos(editMemos);
    setIsEditDisplay(true);

    /* <EditMemo  editNewMemo={editNewMemo} onChange={onChangeEditText} clickButton={onClickEditAdd}/>  */
  };

  //編集完了
  const onClickEditAdd = () => {
    if (editNewMemo === "") return;
    const editText = [...completeMemos, editNewMemo];
    setCompleteMemos(editText);
    setIsEditDisplay(false);
  };

  return (
    <>
      <InputMemo
        memoText={memoText}
        onChange={onChangeMemoText}
        clickButton={onClickAdd}
      />
      <div className="memo-list">
        <p>Memoリスト</p>
        <ul>
          {completeMemos.map((memo) => {
            return (
              <div key={memo} className="list-row">
                <li className="list-line">
                  {memo}
                  {/* <EditMemo  editNewMemo={editNewMemo} onChange={onChangeEditText} clickButton={onClickEditAdd} /> */}
                </li>
                <div className="list-button">
                  <DefaultButton
                    clickButton={onClickEdit}
                    className="edit-button"
                    color="blue"
                    buttonName="編集"
                  />
                  <DefaultButton
                    clickButton={onClickDelite}
                    className="delete-button"
                    color="blue"
                    buttonName="削除"
                  />
                </div>
              </div>
            );
          })}

          {/* {completeMemos.map(() => {
            return ( */}
          {isDisplayEdit && (
            <div className="list-row">
              <EditMemo
                editNewMemo={editNewMemo}
                onChange={onChangeEditText}
                clickButton={onClickEditAdd}
              />
            </div>
          )}
          {/* );
          })} */}
        </ul>
      </div>
    </>
  );
};

//  <EditMemo  editNewMemo={editNewMemo} onChange={onChangeEditText} clickButton={onClickEditAdd} />
