import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export let data = {}

export default function Input(props) {
  const [Entity, setEntity] = useState('')
  const [valuee , setvaluee] = useState()
  
  return (
    <div>
        <div>
        <div  className="bg-gradient-to-r from-sky-800 to-cyan-400 ... text-sm font-semibold flex-auto h-100">
    <div>
        <label for="entity"className="px-1 text-sm font-semibold inline-block py-1 px-2  rounded text-white bg-violet-600 space-x-1 > * + *">
Type of entity</label>
        <select name="type of entity" id="entity" className="text-gray-700 font-bold uppercase text-sm px-1 py-1 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 bg-lightBlue-500 active:bg-lightBlue-600 ease-linear transition-all duration-150 ">
            <option value="none" selected></option>
            <option value="Individual" onClick={()=>{setEntity('Individual')}}>Individual</option>
            <option value="Small" onClick={()=>{setEntity('Small Entity')}}>Small Entity</option>
            <option value="Large" onClick={()=>{setEntity('Large Entity')}}>Large Entity</option>
  </select>
  <input onChange={(e)=>{setvaluee(e.target.value)}}></input>
  <button onClick={()=>{props.setentity(valuee) ; console.log(data);}}> Submit entity</button>
        
    </div>
    <div className="py-2">
    <label for="location" className="px-1">Location for patent filling</label>
    <select name="Location for patent filling" id="location" className='text-gray-700 font-bold uppercase text-sm px-1 py-1 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 bg-lightBlue-500 active:bg-lightBlue-600 ease-linear transition-all duration-150'>
        <option value="None" selected></option>
        <option value="India">India</option>
        <option value="PCT">PCT</option>
        <option value="Europe">Europe</option>
    </select>
    </div>
    <div className="py-2">
        <label for="patent type" className="px-1"> Patent Type</label>
        <select name="patent type" id="patent type" className='text-gray-700 font-bold uppercase text-sm px-1 py-1 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 bg-lightBlue-500 active:bg-lightBlue-600 ease-linear transition-all duration-150'>
        <option value="none" selected></option>
        <option value="Provisional">Provisional</option>    
        <option value="Standard">Standard</option>    
        </select>
    </div>
    <div className="px-1">
     Request for publication: Yes <input type="radio" name="request"/> No <input type="radio" name="request"/>  
    </div>
    <div className="px-1">
     Request for examination: Yes <input type="radio" name="examination"/> No <input type="radio" name="examination"/>  
    </div>
    <div className="px-1">
     Expedited: Yes <input type="radio" name="expedited"/> No <input type="radio" name="expedited"/>  
    </div>
    <div className="py-2 px-1">
     No. of pages: <input type="text"/>
     </div>   
     <div className="py-2 px-1">
     No. of claims: <input type="text"/>
     </div>   
     <div className="py-2 px-1">
     No. of priorities: <input type="text"/>  
    </div>
    <div className="py-2">
    <label for="filing" className="px-1">Type of filling</label>
    <select name="Type of filling" id="filling">
        <option value="None" selected></option>
        <option value="email">Email</option>
        <option value="physical">Physical</option>
        </select>
    </div>
    <div className='px-1'>
      Date of filling: <input type="Date" id='date' />
    </div>
    <div className="bottom-px" style={{textAlign : 'center'}}>
      <button className="bg-gray-300 bg-lightBlue-500 text-white active:bg-violet-800 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" >{/*{text}*/} Submit </button>
    </div>
    </div>
    </div>
    </div>
  )
}
