import React, {useState} from 'react';
import All from "../all/all.jsx";
import Comedy from "../../categories/comedy/comedy.jsx";
import Horror from "../../categories/horror/horror.jsx";
import Thriller from "../../categories/thriller/thriller.jsx";
import allData from '../../../API/allData.js';

function Home() {
    const [clickEvent, setClickEvent] = useState("All");
    return (
        <>
            <div className="container mt-100" >
                <a className="sub-head ml-2 mr-2" onClick={()=>{setClickEvent("All")}}>All</a>
                <a className="sub-head ml-2 mr-2" onClick={()=>{setClickEvent("Comedy")}}>Comedy</a>
                <a className="sub-head ml-2 mr-2" onClick={()=>{setClickEvent("Horror")}}>Horror</a>
                <a className="sub-head ml-2 mr-2" onClick={()=>{setClickEvent("Thriller")}}>Thriller</a>
                {/* <a className="navbar-brand" href="#">Stream</a> */}
            </div>
            {clickEvent === "All" ? <All /> : <></>}
            {clickEvent === "Comedy" ? <Comedy /> : <></>}
            {clickEvent === "Horror" ? <Horror /> : <></>}
            {clickEvent === "Thriller" ? <Thriller /> : <></>}
            
            <footer className={clickEvent === "" ? "max-height": ""}>
                <div className="mx-auto">
                   Page {allData.map((a, index) => <span className="sub-head ml-2 mr-2" key={index}>{index+1}</span>)}
                </div>
            </footer>
        </>
    );
}

export default Home;
