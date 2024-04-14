import React,{useState,useEffect} from "react"
import axios from "axios"
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js'

import { Bar } from 'react-chartjs-2'

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)

function ProfitChart() {
    const [profit,setProfit] = useState([])
    const [date,setDate] = useState([])

  /*   const getDatas = async()=>{ */
      /*   try{ */
 /*    const profit = await axios.get('http://localhost:4000/profit/profitchart')
    const profitt = profit.data.data */
   /*  console.log(profitt)
        const dayprofit = profitt.grossprofit
        const profitdate= profitt.date
        setProfit(dayprofit)
        setDate(profitdate) */
     /*    }
        catch(err){
            console.log(err)
        } */
  
useEffect(()=>{
    
    const profitData = [];
    const dateData = [];
            const getDatas = async()=>{
            const profit = await axios.get('http://localhost:4000/profit/profitchart')
            const profitt = profit.data.data
            console.log(profitt)
                 for (let i=0;i<=profit.length;i++){
                    profitData.push(profitt[i].date)
                    dateData.push(profitt[i].grossprofit)

                } 
                setProfit(profitData)
                setDate(dateData)
        } 

    getDatas()
    },[])
    
const option ={
    responsive :true,
    plugin : {
        legend : {
            position : 'top'},
        title : {
            display : true,
            text : 'Profit Chart' }}}

const data = {
    labels : [date],    
    datasets : [
        {
            label : 'Profit of the Day',
            data : [profit],
            backgroundColor : "rgba(255,99,132,0.5)"} ]}
    

    return(
        <>
         <div style={{width:700,height:500}}>
            <Bar options={option} data={data}  />
             </div>
        </>
    )
    
}

export default ProfitChart