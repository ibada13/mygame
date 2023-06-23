import React from 'react';
import Mod from './mod';
import { useState } from 'react';
import { Start } from './Vag';


let App = () => { 
  const [ta,Tk]=useState(true);



  return (
    <>
      <Mod ta={ta} tb={Tk} />
      <div className="bg-dark" style={{height:`100%`}} id='h0'>
      <div className='bg-dark text-center p-2 shadow-lg rounded-5'  >
        <h1 className=' text-uppercase text-danger font-monospace'>IBADA X 13</h1>
        </div>
        <div className='bg-dark d-flex justify-content-center align-items-center h-100 ' >
          <div id='h1' style={{ width: '90%', height: 'auto' }} className=' bg-dark rounded-4 border border-danger p-3 shadow-lg d-flex align-items-center justify-content-center'>
            
          
            {!ta && <div id='h2'><Start ta={ta} /></div> }
                  
            {ta && null }

              
            
          </div>
        </div>
      </div>
    </>
  )
}
export default App;
