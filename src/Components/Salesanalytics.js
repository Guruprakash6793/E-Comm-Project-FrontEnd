import React  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';
import Saleschart from './Saleschart';
/* import axios from "axios";
import TableContainer from '../Subcomponents/TableContainer';
import DailySalesDetails from '../Subcomponents/DailySalesDetails'; */



function Salesanalytics() {

  /* const [data,setData] = useState([]) */

 
  return (
    <>  <div className='container'>

        <h2>Sales Analytics</h2>
        <div className='d-flex justify-content-center p-2 m-2'>        
        <NavLink to="/dailysalesdetails"><button className='btn btn-danger'>Daily Sales Details</button></NavLink> 

       <NavLink to="/tablecontainer"><button className='btn btn-danger gx-5'>Report of Sales</button></NavLink>
       </div>
        <br /><br />
        <Saleschart />
       

        
              
          </div>   
     </>
        )}
          export default Salesanalytics
 
 
 
 
 
 
 
 
        
      
    
      

