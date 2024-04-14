import React, {useEffect ,useState} from 'react';
import { BiCategory } from "react-icons/bi";
import { FaGrinAlt } from "react-icons/fa";
import {GrDocumentPerformance} from 'react-icons/gr';
import axios from "axios";
import Categories from '../Subcomponents/Categories'
import ProfitChart from '../Subcomponents/ProfitChart';
import Saleschart from './Saleschart';



function Dashboard() {

  
  const[revenues,setRevenue]=useState([]);
  const[propdate,setPropdate]=useState([])
  const [details,setDetails] = useState(false)


const  getRevenue = async() =>{
  
  
  try{
    const revenues = await axios.get('http://127.0.0.1:4000/revenue/Dashboard')
  
    const profit = revenues.data.data
    const apidata = profit[profit.length-1]

    const dayProfit = apidata.grossprofit
    const dateofprop = apidata.date
  
    setRevenue(dayProfit)
    setPropdate(dateofprop)
  }
  catch(err){
    console.log(err)
  }
  

}
  useEffect(()=>{
 
   getRevenue()
   
  },[])
  

  

   const handleClick = () => {
    setDetails(true)
  }

  return (
  
    <>
    {/* <h5>Dashboard</h5> */}
    
    <div className="row">
        <div className="col"> 
          <div className="card bg-success text-light">
            <div className="card-header">
              <h5 className="text-center fs-3">
                <BiCategory /> Category
              </h5>
            </div>
            
            <div className="card-body">
              <p className=" text-center">
                <button className="btn btn-success" onMouseLeave={()=>{setDetails(false)}} onMouseOver={handleClick}>Click to Know</button>
                 { details ? < Categories />
                :null
                } 
                </p>
            </div>
          </div>             
        </div>

        <div className="col"> 
          <div className="card bg-warning text-light">
            <div className="card-header">
              <h5 className="text-center fs-3">
                <FaGrinAlt /> Customers
              </h5>
            </div>
            <div className="card-body">
              <p className=" text-center">
                10000+

              </p>
            </div>
          </div>             
        </div>

        <div className="col"> 
          <div className="card bg-danger text-light">
            <div className="card-header">
              <h5 className="text-center">
                <GrDocumentPerformance /> Revenue
              </h5>
            </div>
            <div className="card-body">
                  <p>Today profit is 
                    <span style={{color:"yellow",display:"block"}}><u><b> {revenues}</b></u></span>
                    </p>
            </div>
          </div>             
        </div>
        
    </div>
    <br />
    <div className="row">
      <div className="col">
        <h4>Monthly Profit Report</h4>
        <ProfitChart />
      </div>
    </div>
   
    </>
    )
}

export default Dashboard