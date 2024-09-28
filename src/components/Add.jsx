import React from 'react'
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { addContactApi } from '../allApi';
import { toast } from 'react-toastify';

function Add({setresult}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [conta,setConta]=useState({
        image:"",name:"",mobile:"",email:""

    })
    const handleContact=async()=>{
        console.log(conta);
        const {image,name,mobile,email}=conta
        if(!image || !name || !mobile || !email){
            toast.warning('enater valid input')
        }
        else{
            const result= await addContactApi(conta)
            console.log(result)
            if(result.status==201){
                toast.success("added success")
                setConta({
                    image:"",name:"",mobile:"",email:"",address:""
            
                })
                handleClose()
                setresult(result)
            }
            else{
                toast.error('added failed')
            }
         
            
        }
        
    }
    return (


        <>
            <div>
                <button className='btn ms-auto mb-3 mt-5' onClick={handleShow}>New</button>

                <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add New Contact</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <FloatingLabel controlId="floatingImg" label="Add image thumbnail" className="mb-3">
                                <Form.Control type="text" placeholder="name@example.com" onChange={(e)=>{setConta({...conta,image:e.target.value})}} />
                            </FloatingLabel>
                            <FloatingLabel controlId="floatingName" label="Enter name" className="mb-3">
                                <Form.Control type="text" placeholder="name@example.com" onChange={(e)=>{setConta({...conta,name:e.target.value})}} />
                            </FloatingLabel>
                            <FloatingLabel controlId="floatingNumber" label="Enter phone" className='mb-2'>
                                <Form.Control type="number" placeholder="Password" onChange={(e)=>{setConta({...conta,mobile:e.target.value})}} />
                            </FloatingLabel>
                            <FloatingLabel controlId="floatingEmail" label="Enter Email" className="mb-3">
                                <Form.Control type="email" placeholder="name@example.com" onChange={(e)=>{setConta({...conta,email:e.target.value})}} />
                            </FloatingLabel>
                            <FloatingLabel controlId="floatingAddress" label="Enter address" className="mb-3">
                                <Form.Control type="text" placeholder="name@example.com" onChange={(e)=>{setConta({...conta,address:e.target.value})}} />
                            </FloatingLabel>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleContact}>Add</Button>
                    </Modal.Footer>
                </Modal>

            </div>

        </>
    )
}

export default Add
