import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';


export const Navber = () => {
    return (
            <>
            <p>ナビゲーション</p>
            {/* <ul>
               <li><input type="text" /></li>
               <li><Button variant="outlined" startIcon={<SearchIcon  />}> 検索</Button></li>
            </ul> */}
            <input type="text" />
            <Button variant="outlined" startIcon={<SearchIcon  />}> 検索</Button>
            
            </>
    );
}