import React from "react";
import '../styles/Editmodal.css'; 


const Editmodal = ({editid, dataarr, setdataarr}) => {

  const updatehandle = () => {
    const updateddatas = dataarr.map((ele) => {
      if(editid == ele.id) {
       return( {
          ...ele, 
          year: document.getElementById("edityear").value,
          amount: document.getElementById("editamount").value
        })
      }
      else{
        return ele;
      }
    })
    console.log(updateddatas);
    setdataarr(updateddatas);
  }

    return ( 
        <>
       



<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Edit</h1>
      </div>
      <div className="modal-body">
      <div className="inputsdiv">
        <div className="yeardiv">
        <label>Choose Year</label>
        <select required name='year' id="edityear">
        <option value="" disabled >Year</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
        </select>
        </div>

        <div className="revenuediv">
                <label for="revenue">Revenue</label>
                <input type="number" id="editamount" name='amount' placeholder="Enter Amount"/>
        </div>
    </div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
        <button type="button" className="btn btn-secondary" onClick={()=>{updatehandle()}} >Save</button>
      </div>
    </div>
  </div>
</div>
   
        </>
    )
}

export default Editmodal;