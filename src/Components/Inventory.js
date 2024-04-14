

import React, {useState} from 'react';
import axios from 'axios';
import {NavLink} from "react-router-dom"





const Inventory = ()=>{
  const [date,setDate] = useState('')
  const [category,setCategory] = useState('')
  const [quantity,setQuantity] = useState('')
  const [purchaseprice,setPurchaseprice] = useState('')
  const [totalamount,setTotalAmount] = useState('')
  const [stocks,setStocks] = useState('')

  const handleChange = (e)=> {

      switch (e.target.name){
        case "date":
          setDate(e.target.value);
          break;
        case "category" :
          setCategory(e.target.value);
          break;
        case "quantity" :
          setQuantity(e.target.value);
          break;
        case "purchaseprice" :
          setPurchaseprice(e.target.value);
          break;
        case "totalamount" :
          setTotalAmount(e.target.value);
          break; 
        case "stocks" :
          setStocks(e.target.value);
          break;  
          default :
            console.log(e.target.value);
            break;
      }
      
    } 
    
    const handleSubmit = async(e)=> {
      e.preventDefault();
      await axios.post("http://127.0.0.1:4000/api2/inventory",{date,category,quantity,purchaseprice,totalamount,stocks}
 
    )}
  
  return(
      <>

      <form className="form justify-content-center" onSubmit={handleSubmit} >
    
          <h3>Managing Invents</h3>
          <label for="date">Date</label>
          <input type="date" name="date" id="date" onChange={handleChange} />
          <br /><br />

          <label for="category">Category</label>
          <input type="text" name="category" id="category" onChange={handleChange} />
          <br /><br />
          
          <label for="quantity"> Quantity</label>
          <input type="number" name="quantity" id="quantity" onChange={handleChange} />
          <br /><br />
          <label for="purchaseprice"> Purchase Price</label>
          <input type="number" name="purchaseprice" id="purchaseprice" onChange={handleChange} />
          <br /><br />
          <label for="totalamount"> Total Amount</label>
          <input type="number" name="totalamount" id="totalamount" onChange={handleChange} />
          <br /><br />
          <label for="stocks"> Stocks</label>
          <input type="number" name="stocks" id="stock" onChange={handleChange} />
          <br /><br />

          <button className=" btn btn-danger" type="submit ">Add</button>
          

          
      </form>
      <h4> <NavLink to="/inventorytable">Report of Stock </NavLink></h4>

      </>
  )
} 

export default Inventory;