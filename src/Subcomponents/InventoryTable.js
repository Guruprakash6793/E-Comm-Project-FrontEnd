import axios from 'axios';
import React,{useEffect, useState} from 'react';

import InventoryTablebody from './InventoryTablebody';
import { NavLink } from 'react-router-dom';


function InventoryTable() {
  const[datas,setDatas] = useState([])
  console.log(datas)

    async function getData()     {
    const datas = await axios.get("http://127.0.0.1:4000/api2/inventory")
    console.log(datas)
    const apidata = datas.data.data
    console.log(apidata)
    setDatas(apidata)
  }
  useEffect(()=>{
    getData()
  },[])
  return (
    <>
    <h3> Invents Reports</h3>
    <NavLink to="/inventory" className="btn btn-success">Back to </NavLink>
    <br/> <br/>
    <table className='table table-striped table-responsive-sm'>
      <thead className='bg-info'>
        <th>Date</th>
        <th>Category</th>
        <th>Quantity</th>
        <th>Purchase Price</th>
        <th>Total Amount</th>
        <th>Stocks</th>
        
      </thead>
      <tbody>
        {datas.map((data,_id)=>{
          return(
            <InventoryTablebody data={data} id={_id}/>
          )
        })}

      </tbody>
    </table>
    </>
  )
}

export default InventoryTable