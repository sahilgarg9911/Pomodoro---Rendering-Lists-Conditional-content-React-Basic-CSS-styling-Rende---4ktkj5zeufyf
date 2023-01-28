import React, { Component, useState, useEffect } from "react";
import "../styles/App.css";

const Data = ({year, amount, serialno, dataarr, setdataarr, dataid, seteditid}) => {
  console.log(dataarr);

  const removehandle=(dataid)=> {
    
   const newdataarr= dataarr.filter((ele)=> {
      if(ele.id !== dataid){
        return ele;
      }
    })
    
    setdataarr(newdataarr);
    
  }

  const edithandle=(dataid)=>{
    seteditid(dataid);
     dataarr.filter((ele)=> {
      if(ele.id === dataid){
        document.getElementById("edityear").value=ele.year;
        document.getElementById("editamount").value=ele.amount;
      }
    })
  }
  return (
    <>
    
      <div className="detailsdiv">
        
        <div className="no">
          <span>
            {serialno+1}
            {")"}
          </span>
        </div>
        <div className="yearvalue">
          <span className="headin">Year : </span>
          <span>{year}</span>
        </div>

        <div className="yearvalue">
          <span className="headin">Expances : </span>
          <span>{amount}</span>
        </div>
        <div className="removediv">
          <span className="removebtn" onClick={() => {removehandle(dataid)}}>Remove</span>
        </div>
        <span
          type="text"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          onClick={() => {edithandle(dataid)}}
        >
          Edit
        </span>
      </div>
    </>
  );
};

export default Data;
