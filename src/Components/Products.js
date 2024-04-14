
 import React, {useState,useEffect} from 'react';
 /* import { useNavigate } from 'react-router-dom'; */
 
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios"
import "../Stylesheet/product.css";
//import Card from "../Subcomponents/Card";



const Products = ()=>{ 

  const [products,setProducts] = useState([]);
 

  const getproduct=async()=>{
     const products = await axios.get("http://Localhost:4000/api1/productlists")
    const apidata = products.data.data
    setProducts(apidata)
    console.log(products)

  }
  useEffect(()=>{
    getproduct();
  },[])
 

  return (
       <>
       <h3>Products List</h3>
       <div className="container">
        

       <div className='card'>
               <div className="card-body"> 
                          { products.map((product) => (
                              <div key={product._id}>
                                  <div className="product">
                                      <span><b>{product.title}</b></span>
                                      <br />
                                      <a href={"#" + product._id}>
                                          <img src={product.image} alt={product.title} width="250" height="250" ></img>
                                      </a>
                                      <p><b>{product.description}</b></p>
                                      <hr />
                                  </div>
                              </div>
                          )) }
                          </div>
        </div>
        </div>
       
           
         
              
      </>  
   )} 
        
        export default Products
             
            
       

