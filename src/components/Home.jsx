import React from "react";
import { Navber } from "./Navbar";
import { MemoList } from "./MemoList";
import { InputMemo } from "./InputMemo";

export const Home = () => {
    return(
        <>
        <div>
        <Navber />
        < InputMemo />
        <MemoList />
        </div>
        </>
    );
}