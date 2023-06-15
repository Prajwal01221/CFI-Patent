import { getByDisplayValue } from '@testing-library/react'
import React, { useState } from 'react'
//import { data } from './Input'
import Input from './Input'

export default function Cost(props) {
  const [pages, SetPages] = useState(0)
  const [claims, SetClaims] = useState(0)
  const [dates, SetDates] = useState(0)
  const [Filing_Type, SetFiling_Type] = useState('')
  const [Org_Type, SetOrg_Type] = useState('')
  const [Speed_Type, SetSpeed_Type] = useState('')
  const [Pub, Set_Pub] = useState(0)
  const [Exam, Set_Exam] = useState(0)
  const [total_cost, SetTotal_cost] = useState()
  const [patent_type, Setpatent_type] = useState('') 
  // const [message, SetMessage] = useState('')

  let calcTotal = (event) => {
    let cost = 0;
    event.preventDefault()
    if(Speed_Type === 1 && Filing_Type === 'Physical'){
      alert('Inapplicable')
    }

    if(pages===0 && claims===0 && dates===0){
      alert('Please enter valid inputs')
    }
    else{
      if(Org_Type === 'Small'){
        if(Filing_Type === 'Email'){
          if(Speed_Type === 'Regular'){
            //Email, regular process, small
            if (pages <= 30) { //criteria for pages
              cost=1600
            }
            else {
              cost=1600 + (pages - 30)*160
            }

            if (claims >=10){  //criteria for claims
              cost  += 320*(claims - 10)
            }

            if(Pub === 1){
              cost += 2500
            }  

            if(Exam === 1){
              cost += 4000
            }
          }
          else{ //Email filing with fast track, small, 
            if (pages <= 30) { //criteria for pages
              cost = 1600
            }
            else {
              cost = 1600 + (pages - 30)*160
            }

            if (claims >=10){  //criteria for claims
              
            }

            if(Pub === 1){
              cost += 2500
            }  

            if(Exam === 1){
              cost += 8000
            }
          }
        }
        else { //Physical, regular, small
          if (pages <= 30) { //criteria for pages
            cost = 1750
          }
          else {
            cost = 1750 + (pages - 30)*180
          }

          if (claims >=10){  //criteria for claims
            cost += 360*(claims - 10)
          }

          if(Pub === 1){
            cost += 2750
          }  

          if(Exam === 1){
            cost += 4400
          }
        }
      }
      else {
        if(Filing_Type === 'Email'){
          if(Speed_Type === 'Regular'){ 
            //Large, regular, Email
            if (pages <= 30) { 
              cost = 8000
            }
            if(pages > 30) {
              cost = 8000 + (pages - 30)*800
            }

            if (claims >=10){  //criteria for claims
              cost += 1600*(claims - 10)
            }

            if(Pub === 1){
              cost += 12500
            }  

            if(Exam === 1){
              cost += 20000
            }
          }
          else{ //Large, Email, Fast 
            if (pages <= 30 && claims >=10 && Pub === 1 && Exam === 1 ) { //criteria for pages
              cost = 8000 + 1600*(claims - 10) + 12500 + 60000
            }
            else {
              cost = 8000 + (pages - 30)*800
            }

            if (claims >=10){  //criteria for claims
              cost += 1600*(claims - 10)
            }

            if(Pub === 1){
              cost += 12500
            }  

            if(Exam === 1){
              cost += 60000
            }
          }
        }
        else { //Physical, regular, large
          if (pages <= 30) { //criteria for pages
            cost = 1750
            if (claims >=10){  //criteria for claims
              cost += 1750*(claims - 10)
            }
  
            if(Pub === 1){
              cost += 2750
            }  
  
            if(Exam === 1){
              cost += 22000
            }
          }
          else {
            cost = 1750 + (pages - 30)*880
            if (claims >=10){  //criteria for claims
              cost += 1750*(claims - 10)
            }
  
            if(Pub === 1){
              cost += 2750
            }  
  
            if(Exam === 1){
              cost += 22000
            }
          }

         
        }
      }
      cost += 1600*(dates-1)
    }
    SetTotal_cost  (cost)
  }

  let reload = () =>{
    window.location.reload()
  }
   return (
       <div className = 'Cost text-slate-100 font-serif text-2xl'>
         <h1 className='text-3xl'> Welcome! </h1>
         <div>{props.entity}</div>
         <div className='Container'>
           <h2 className='center text-3xl'> Cost Calculator</h2>
           <form  onSubmit={calcTotal}>
          
           
             <div id='main' className=''>
             <div className='h-14 bg-blue-900 rounded-xl '>
               <label className='w-10  text-xl font-serif box-decoration-slice text-slate-100 '>Number of pages</label>
               <input className='h-6 rounded-xl text-black text-center' value = {pages} onChange = {(event) => SetPages(event.target.value)}/>
               </div>

              <div className='bg-blue-900 rounded-xl h-14'>
               <label className='px-2 text-xl text-slate-100 font-serif'>Number of claims</label>
               <input className='h-6 rounded-xl text-black text-center' value = {claims} onChange = {(event) => SetClaims(event.target.value)}/>
               </div>
            
              <div className='bg-blue-900 rounded-xl h-14'>
               <label className='gap-x-1 text-xl text-slate-100 font-serif'>Number of priority dates</label>
               <input className='h-6 rounded-xl text-black text-center'  value = {dates} onChange = {(event) => SetDates(event.target.value)}/>
              </div>
             </div>
             <div id='main-2'>
               <div className='bg-blue-900 rounded-xl h-14'>
               <label className='text-slate-100 text-xl font-serif'> Type of Patent </label>
               <select className='rounded-xl text-black' value={patent_type} onChange={e=>Setpatent_type(e.target.value)}>
                 <option></option>
                 <option value='Provisional'>Provisional</option>
                 <option value='Standard'>Standard</option>
               </select>
               </div>
               <div className='bg-blue-900 rounded-xl h-14'>
               <label className='text-slate-100 text-xl font-serif'> Type of filing </label>
               <select className='rounded-xl text-black' value={Filing_Type} onChange={e=>SetFiling_Type(e.target.value)}>
                 <option></option>
                 <option value='Physical'>Physical</option>
                 <option value='Email'>Email</option>
               </select>
               </div>
              <div className='bg-blue-900 rounded-xl h-14'>
               <label className='text-slate-100 text-xl font-serif'> Speed of filing </label>
               <select className='rounded-xl text-black' value={Speed_Type} onChange={e=>SetSpeed_Type(e.target.value)}>
                 <option value='Expedited'>Expedited</option>
                 <option value='Regular'>Regular</option>
               </select>
               </div>
             </div>
             <div id='main-3'>
               <div className='bg-blue-900 rounded-xl h-14'>
               <label className='text-slate-100 text-xl font-serif'> Type of entity </label>
               <select className='rounded-xl text-black text-center' value={Org_Type} onChange={e=>SetOrg_Type(e.target.value)}>
                 <option value='Large'>Large</option>
                 <option value='Small'>Medium/Small</option>
               </select>
               </div>
               <div className='bg-blue-900 rounded-xl h-14'>
               <label className='text-slate-100 text-xl font-serif'> Publication </label>
               <select className='rounded-xl text-black text-center' value={Pub} onChange={e=>{
                Set_Pub(e.target.value)
                
               }}>
                 <option value={1}>Publish</option>
                 <option value={0}>Skip</option>
               </select>
               </div>
               <div className='bg-blue-900 rounded-xl h-14 '>
               <label className='text-slate-100 text-xl font-serif'> Examination </label>
               <select className='rounded-xl text-black text-center' value={Exam} onChange={e=>Set_Exam(e.target.value)}>
                 <option value={1}>Request for Examination</option>
                 <option value={0}>Skip</option>
               </select>
               </div>
             </div>
           <div className=' rounded-xl w-auto text-slate-100 text-xl font-serif h-10'>
           Date of filling: <input className='rounded-xl text-black' type="Date" id='date'/>
           </div>
           <div className='space-x-3.5 > * + * font-serif text-lg'>
               <button className='btn bg-gray-500 rounded-xl ' type = 'submit' >Submit</button>
               <button className='btn btn-outline bg-gray-500 rounded-xl' type = 'submit' onClick={reload}>Reload</button>
             </div>
           </form>
           <div>
             <div  className='center text-slate-100 font-serif text-xl'>
               <h1> Total cost of patent processing- <div className='bg-slate-700'>{total_cost}</div></h1>
               {/*<p>{message}</p>*/}
             </div>
           <div>
            Refer to the <a className='bold underline text-slate-100' href="https://www.canva.com/design/DAFc5-T55D8/JumjW8OXThu5QvExyJ1KUQ/view?utm_content=DAFc5-T55D8&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton">Cost Breakdown </a>
           </div>
           </div>
         </div>
       </div>
     );
 








}
