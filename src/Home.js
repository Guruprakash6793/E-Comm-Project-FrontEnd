import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './Components/Sidebar'
import './Stylesheet/home.css'; 
import {FaUserAlt} from "react-icons/fa";
import { FaBars } from 'react-icons/fa6';
 import { Routes,Route } from 'react-router-dom';
import Products from './Components/Products';
import Inventory from './Components/Inventory';
import Salesanalytics from './Components/Salesanalytics';
import Orderstatus from './Components/Orderstatus';
import Dashboard from './Components/Dashboard';

import InventoryTable from './Subcomponents/InventoryTable';
import DailySalesDetails from './Subcomponents/DailySalesDetails';
import TableContainer from './Subcomponents/TableContainer';

 
function Homepage() {
        const [showbar,setShowbar] = useState(false)
        function handleClick(){
              setShowbar(true)  
        }
        function handleDoubleclick() {
                setShowbar(false)
        }
  return (
    <>
    <div className='fluid'>
                <div className='nav text-light justify-content-around border-bottom border-dark' id="home_nav">
                           
                        
                         <div>
                         
                                <button className='btn' onClick={handleClick} onDoubleClick={handleDoubleclick} style={{color:"red", fontSize:"25px"}}> <FaBars /> </button>
                                             
                         </div>
                         <div>
                            <h1 className="text-danger">Fashion Hunt</h1> 
                        </div>
                        <div className="input-group-md">
                                <input className='form-control form-control' type="search"  placeholder="Search here..." />
                        </div>
                        
                       <div className="dropdown">                     
                                <button className='btn bg-light'  type="button" > <FaUserAlt />user</button>
                                
                        </div>
                
                </div>
               
        <div className='row  d-flex justify-content-around'>
                
                <div className="col-2">
                 {showbar ? <Sidebar /> : null}
                 </div>
                 < div className='col-10'>          
                     <Routes> 
                     {/* <Route path="/" element={<Login />} />  
                     <Route path="/signup" element={<Signup />} /> */}
                    <Route path="/products" element={<Products />} />
                    
                    <Route path="/inventory" element={<Inventory />} />
                     <Route path="/inventorytable" element={<InventoryTable />} />  

                      <Route path="/salesanalytics" element={<Salesanalytics />} />
                      <Route path="/dailysalesdetails" element={ <DailySalesDetails />} />
                      <Route path="/tablecontainer" element={ <TableContainer />} />                                
                    <Route path="/orderstatus" element={<Orderstatus /> }/>
                    <Route path="/" element={<Dashboard />} > </Route>
                 </Routes>
                    
                </div>
        </div>
    
</div>
        

    </>
  )
}

export default Homepage