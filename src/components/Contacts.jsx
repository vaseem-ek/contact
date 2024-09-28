import React, { useState, useEffect } from 'react'
import ContactCard from './ContactCard'
import { getContactApi } from '../allApi'

function Contacts({result}) {

  const [data, setData] = useState([])
  const [res,setRes]=useState({})

  useEffect(() => {
    getdata()

  }, [result,res])

  const getdata = async () => {
    const result = await getContactApi()
    console.log(result);
    if(result.status==200){
      setData(result.data)
    }

  }

  return (
    <>
      <div className='container p-3 '>
        {
          data?.length > 0 ?
            <div className='d-flex flex-wrap justify-content-around '>
              {
                data?.map(item=>(
                  <ContactCard contact={item}  response={setRes} />

                ))}
              


            </div>
            :
            <h3 className='text-center'>no contact availabe</h3>

            


        }





      </div>

    </>
  )
}

export default Contacts
