import React from 'react'
import { deleteContactApi } from '../allApi'
import { toast } from 'react-toastify'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



function ContactCard({contact,response}) {




    const handleDelete=async()=>{
        const result=await deleteContactApi(contact.id)
        if(result.status==200){
            toast.success('contact deleted')
            response(result)
        }

    }

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
    <div>
    <div className='d-flex border-2 mb-4 justify-content-around  shadow p-4 align-items-center'>
        <div>
            <img className='images streched-link'  src={contact.image} alt="" />
            
        </div>
        <div>
            <ul>
                <li>
                    Name: <span className='fw-bold'>{contact.name}</span>
                </li>
                {/* <li>
                    phone:+91 <span className='fw-bold'>{contact.mobile}</span>
                </li> */}
                <li>
                    email: <span className='fw-bold'>{contact.email}</span>
                </li>
            </ul>
        </div>
        <div>
            <button className='btn ms-4' onClick={handleDelete}>delete</button>
            <button className='btn ms-2' onClick={handleShow}>view</button>


           
        </div>
        

    </div>
    </div>

    
    
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <div>
            <img src={contact.image} style={{width:'100%'}} alt="" />
            <div className='mt-4 p-2'>
                <h5> <span className='fw-bold'>name:</span> {contact.name}</h5>
                <h5> <span className='fw-bold'>number:</span>+91{contact.mobile}</h5>
                <h5> <span className='fw-bold'>email:</span>{contact.email}</h5>
                <h5> <span className='fw-bold'>address:</span>{contact.address}</h5>
            </div>
         </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ContactCard
