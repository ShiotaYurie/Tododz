import React from "react";
import { DefaultButton } from "./DefaultButton";

export const EditMemo = (props) => {
  const { editNewMemo, memoId, onChange, clickButton } = props;

  return (
    <>
      <div className="memo-list">
        <div className="input-area">
          <input type="text" value={editNewMemo} onChange={onChange} />
          <DefaultButton
            value={memoId}
            clickButton={clickButton}
            className="complete-button"
            color="blue"
            buttonName="編集完了"
          />
        </div>
      </div>
    </>
  );
};
