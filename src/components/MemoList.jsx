import React, { memo, useState } from "react";
import { DefaultButton } from "./DefaultButton";
import { InputMemo } from "./InputMemo";
import { EditMemo } from "./EditMemo";

export const MemoList = () => {
  //state
  const [memoText, setMemoText] = useState(""); //input
  /**
   * {
   *  id: 1,
   *  text: inputtedText
   * }
   */
  const [completeMemos, setCompleteMemos] = useState([]); //List

  // const [editMemo, setEditMemo] = useState([]);
  const [editNewMemo, setEditNewMemos] = useState(""); //編集した値

  // 追加したやつ；編集完了の表示
  const [isDisplayEdit, setIsEditDisplay] = useState(false);
  // 編集中のID
  const [editId, setEditId] = useState(0);

  //入力フォーム
  const onChangeMemoText = (event) => setMemoText(event.target.value);

  //編集フォーム
  const onChangeEditText = (event) => setEditNewMemos(event.target.value);

  
  //追加の関数
  const onClickAdd = () => {
    if (memoText === "") return; //エラーハンドリング（何も入力値ない時）
    const nextId = completeMemos.length;
    const nextMemoData = {
      id: nextId,
      text: memoText,
    };
    const newMemos = [...completeMemos, nextMemoData];
    setCompleteMemos(newMemos);
    setMemoText(); //初期化
  };

  //削除
  const onClickDelite = (index) => {
    const deliteMemos = [...completeMemos]; //stateをnewMemosに格納
    deliteMemos.splice(index, 1); //削除する関数(splice) 配列の0番目から1つ削除
    setCompleteMemos(deliteMemos);
  };

  //編集ボタンクリックしたら元の値が消え,入力フォームに切り替わる
  const onClickEdit = (e) => {
    const { value } = e.target;
    console.log("valueaaa");
    console.log(value);

    const editMemos = [...completeMemos]; //stateをeditMemosに格納
    const matchIndex = completeMemos.findIndex((memo) => memo.id === Number(value));

    setCompleteMemos(editMemos);
    setIsEditDisplay(true);
    setEditId(completeMemos[matchIndex].id);
    /* <EditMemo  editNewMemo={editNewMemo} onChange={onChangeEditText} clickButton={onClickEditAdd}/>  */
  };

  //編集完了
  const onClickEditAdd = () => {
    if (editNewMemo === "") return;
    const editText = [...completeMemos];
    const matchIndex = completeMemos.findIndex((memo) => memo.id === editId);
    editText[matchIndex].text = editNewMemo;
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
            if (isDisplayEdit && memo.id === editId) {
              return (
                <div key={memo.id} className="list-row">
                  <EditMemo
                    editNewMemo={editNewMemo}
                    memoId={memo.id}
                    onChange={onChangeEditText}
                    clickButton={onClickEditAdd}
                  />
                </div>
              );
            }
            return (
              <div key={memo.id} className="list-row">
                <li className="list-line">
                  {memo.text}
                </li>
                <div className="list-button">
                  <DefaultButton
                    value={memo.id}
                    clickButton={onClickEdit}
                    className="edit-button"
                    color="blue"
                    buttonName="編集"
                  />
                  <DefaultButton
                    clickButton={onClickDelite}
                    value={memo.id}
                    className="delete-button"
                    color="blue"
                    buttonName="削除"
                  />
                </div>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};

