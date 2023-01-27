import React, { useState } from "react";
import '../styles/Mainpage.css';


const Mainpage = () => {
    const [list, setlist] = useState([]);
    const [showSave, setShowSave] = useState(false);

    const [data, setData] = useState({
        "year": "",
        "amount" : ""
    })

    const handleadd = () => {
        setlist((prev) => {
            return [...prev, data];
            
        })
        setData({
            "year" : "",
            "amount": ""       
         })
    }

    const handleremove = (id) => {
        setlist(current => current.filter((employee, i) => {return i !== id; }),);
    }

    const onEdit = (id) => {
        setShowSave(true)
        const li =  list.filter((list, i) => {            
            return i == id; 
            })
            setData({
                "year": li[0].year,
                "amount": li[0].amount
            })
    }


    const handleSave = () => {
        setShowSave(false);
    }
    
    return(
        <div className="mainpagediv">
            <div className="bar"><div className="progress"></div></div>

            <div className="revenueforcastsheading">
                <h1>Revenue Forcasts ?</h1>
            </div>
            <div>
                {
                    list.map((ele, index) => {
                        return (
                            <div key={index} onDoubleClick={()=>{onEdit(index)}} className="detailsdiv">
                                <div className="no">
                                    <span >{index+1}{")"}</span>
                                </div>
                                <div className="yearvalue">
                                    <span className="headin" >Year : </span>
                                    <span>{ele.year}</span>
                                </div>
                                
                                <div  className="yearvalue">
                                    <span className="headin">Expances : </span>
                                <span>{ele.amount}</span>
                                </div>    
                                <div className="removediv">
                                <span className="removebtn" onClick={()=> {handleremove(index)}}>Remove</span>
                                    </div>           
                                
                            </div>
                        )
                        
                    })
                }
            </div>

    

            <div className="inputsdiv">
                <div className="yeardiv">
                <label for="cars">Choose Year</label>
                <select required name='year' id="cars" value={data.year} onChange={(e)=> {setData({...data, [e.target.name] : e.target.value})}} >
                <option value="" disabled >Year</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>


                </select>
            </div>
            <div className="revenuediv">
                <label for="revenue">Revenue</label>

                <input type="number" name='amount' placeholder="Enter Amount" value={data.amount} onChange={(e)=> {setData({...data, [e.target.name] : e.target.value})}}   />
            </div>
            <div className="add">
                {
                    showSave ? (<button id="raaa" onClick={handleSave}  >Save</button>) : (<button onClick={handleadd}  >Add</button>)
                }
            </div>

        </div>
        </div>

        
    )
}

export default Mainpage;