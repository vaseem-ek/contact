import React,{useState} from 'react'
import Add from '../components/Add'
import Contacts from '../components/Contacts'


function Dashbod() {

  const [result,setResult]=useState({})

  return (
    <>
    <div className='container p-2'>
      <div>
        <Add setresult={setResult} />
      </div>
      <div>
        <Contacts result={result}/>
      </div>
      

    </div>
    
    </>
  )
}

export default Dashbod
