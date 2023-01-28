import React, { Component, useState, useEffect } from "react";
// import '../styles/App.css';
import Form from "./Form";
import Data from "./Data";
import Editmodal from "./Editmodal";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";


const App = () => {
    const [year, setyear] = useState("");
    const [amount, setamount] = useState("");
    const [dataarr, setdataarr] = useState(getdata);
    const [editid, seteditid] = useState("");
    // console.log(dataarr);
    localStorage.setItem("dataarr", JSON.stringify(dataarr))

    return (

        <
        >
        <
        Navbar / >
        <
        div className = "maindivapp" >

        <
        Editmodal editid = { editid }
        dataarr = { dataarr }
        setdataarr = { setdataarr }
        /> {
            dataarr.map((element, indx) => {
                return ( <
                    Data seteditid = { seteditid }
                    year = { element.year }
                    amount = { element.amount }
                    key = { element.id }
                    dataid = { element.id }
                    serialno = { indx }
                    dataarr = { dataarr }
                    setdataarr = { setdataarr }
                    />
                )
            })
        } <
        Form year = { year }
        setyear = { setyear }
        amount = { amount }
        setamount = { setamount }
        dataarr = { dataarr }
        setdataarr = { setdataarr }
        /> { /* <Data/> */ } <
        Sidebar / >


        <
        /div>


        <
        />

    )

    function getdata() {
        const datalocal = JSON.parse(localStorage.getItem("dataarr"));
        if (datalocal) {
            return datalocal;
        } else {
            return [];
        }
    }

}


export default App