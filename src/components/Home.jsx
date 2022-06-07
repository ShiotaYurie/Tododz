import React from "react";
import { Navber } from "./Navbar";
import { MemoList } from "./MemoList";
import { EditMemo } from "./EditMemo";
// import { InputMemo } from "./InputMemo";

export const Home = () => {
    return(
        <>
        <div className="home">
        <Navber />
        {/* < InputMemo /> */}
        <MemoList />
        <EditMemo />
        
        </div>
        </>
    );
}