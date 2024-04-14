import React, { useState,useEffect } from "react";
import axios from "axios";
import {NavLink} from "react-router-dom"

function DailySalesDetails() {

    const[data,setData]= useState({
        date:" ",
        salesrevenue:null,
        costofgoods:null
   })
   const[gross,setGross] = useState(0)
    
  
       console.log(data)
    const handle = (e)=> {
        setData({...data, [e.target.id]:e.target.value})
        
    }
    useEffect(()=>{
    
        setGross(data.salesrevenue - data.costofgoods)

    },[data])

    
    /* function handleChange(e) {
        switch (e.target.name){
            case("date"):
                setDate(e.target.value)
                break;
            case("sales"):
                setSales(e.target.value)
                break;
            case("goods"):
                setGoods(e.target.value)
                break;  
             case("grossprofit"):
                setProfit(e.target.value)
                break;  
        }
    } */
    const handleSubmit = async (e)=>{
        e.preventDefault()
      
        try{
         await axios.post("http://127.0.0.1:4000/api4/salesanalytics",{
            date:data.date,
            salesrevenue:data.salesrevenue,
            costofgoods:data.costofgoods,
            grossprofit:gross

        })
        .then(res=>{console.log(res.data)})
          
        alert("Sales Details Saved Successfully")
    }

    catch(err){
        console.log(err)
    }
        
    }

    
    return(
        <>
        <h3>Sales Details</h3>
        <div className="container-fluid" >
            <NavLink to ="/salesanalytics"><button className="btn btn-danger">Back to</button></NavLink>
            <br /><br />
            <form className="form" onSubmit={handleSubmit} >
                <label for="date">Date</label>
                <input type="date" id="date" value={data.date} onChange={handle} /> 
                <br /><br /> 
                <label for="salesrevenue">Profit of Sales</label>
                <input type="number" id="salesrevenue" value={data.salesrevenue }  onChange={handle}  /> 
                <br /><br />
                <label for="costofgoods">Cost of Goods</label>
                <input type="number" id="costofgoods" value={data.costofgoods} onChange={handle} /> 
                <br /><br />
                <label for="grossprofit">Gross Profit</label>
                <input type="number" id="grossprofit" value={gross}/> 
                <br /><br />

               {/*  <p>The Grossprofit of today Sales is : {setrevenue}</p> */}
                {/* <label for="revenue">Revenue</label>
                <input type="number" id="revenue" value={((data.grossprofit)/(data.salesrevenue)) * 100}  onClick={()=>{}} /> 
                <br /><br /> */}
                 <button className="btn btn-danger" type="submit" >Submit</button>
                {/*  <button type="reset" className="btn btn-success">Reset</button> */}

            </form>
         </div>
            </>
    )
}

export default DailySalesDetails