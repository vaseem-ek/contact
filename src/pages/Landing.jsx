import React from 'react'
import { Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Landing() {
  return (
    <>
   <div className="container-fluid p-5 ">
    <Row>
      <Col className='d-flex flex-column justify-content-center'>
      <h1>Contacts</h1>
      <p style={{textAlign:'justify'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus maiores aspernatur repellendus voluptates mollitia ducimus eius dolore aliquam ab nisi animi necessitatibus, dignissimos praesentium, eligendi voluptatem minus harum beatae iure.</p>
      <Link to={'/dash'} className='btn d-grid m-3'>lets go</Link>
      
      </Col>
      <Col>
      <img className='img-fluid rounded shadow' src="https://m.media-amazon.com/images/I/81eSkgnULzL.jpg" alt="" />
      </Col>
    </Row>
   
   </div>
    
    </>
  )
}

export default Landing
