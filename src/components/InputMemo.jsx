import React from "react";
import { DefaultButton } from "./DefaultButton";
// import { MemoList } from "./MemoList";

export const InputMemo = (props) => {
  const { memoText, onChange, clickButton } = props;
  return (
    <>
      <div>
        <p>今日のメモ</p>
        <div className="input-area">
          <input type="text" value={memoText} onChange={onChange} />
          <DefaultButton
            clickButton={clickButton}
            color="red"
            buttonName="追加"
          />
        </div>
      </div>
    </>
  );
};
