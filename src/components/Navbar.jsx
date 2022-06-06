import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';


export const Navber = () => {
    return (
            <>
            <div className="nav-area">
            {/* <ul>
               <li><input type="text" /></li>
               <li><Button variant="outlined" startIcon={<SearchIcon  />}> 検索</Button></li>
            </ul> */}
            <input type="text" />
            <div className="nav-button">
            <Button variant="outlined" startIcon={<SearchIcon  />}> 検索</Button>
            </div>
            </div>
            </>
    );
}