import React, { Component, useState, useEffect } from "react";
// import '../styles/App.css';
import '../styles/Form.css';




const Form = ({year, setyear, amount, setamount, dataarr, setdataarr}) => {
    const inputhandler=(e) => {
        // setyear(e.target.value);
        if(e.target.id === "year"){
            setyear(e.target.value);
            console.log(e.target.value)
        }
        // if(e.target.id === "amount"){
        //     setamount(e.target.value);
        // }
        // console.log(year, amount);
        if(e.target.id === "amount") {
            setamount(e.target.value)
        }
        console.log(year, amount);
        
        
    }
    // console.log(year, amount);

    const addhandler = (e) => {
        e.preventDefault();
        if(year !== "" && amount!== ""){
            setdataarr((dataarr) => {
                return (
                    [...dataarr, {
                        year:year,
                        amount:amount,
                        id: new Date().getTime()
                    }]
                )
            })

        }

        setyear("");
        setamount("");
    }

    return ( 
    <form className="inputsdiv">
        <div className="yeardiv">
        <label for="cars">Choose Year</label>
        <select id="year" value={year} onChange={inputhandler}>
        <option value="" disabled >Year</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
        </select>
        </div>

        <div className="revenuediv">
                <label for="revenue">Revenue</label>
                <input type="number" id="amount" placeholder="Enter Amount" value={amount} onChange={inputhandler}/>
        </div>

        <div className="add">
                
                  <button type="submit" className="addbtn" onClick={addhandler} >Add</button>
                
            </div>
    </form>
    )

}


export default Form