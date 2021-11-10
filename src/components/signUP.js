import "../index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form, Row, Col } from "react-bootstrap";

import React, { Component } from 'react'


class SignUpPage extends Component {


  // state = {
  //   email: '',
  //   password: '',
  //   firstName: '',
  //   lastName: '',
  //   address: ''
  // }

  handleAddUserClick =  (e) => {
    e.preventDefault();
    console.log(this.state)
}
   handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }


    render (){
      return (

        <Form className='container pt-5'>
        <p className='d-flex justify-content-center pb-5 fs-1 fw-bold'>SIGN UP</p>
          <Row>
            <Form.Group as={Col} className="mb-2" >
              <Form.Label>First Name</Form.Label>
              <Form.Control id='firstName' type="firstName" placeholder="First Name" onChange={this.handleChange} />
            </Form.Group>
          
            <Form.Group as={Col} className="mb-2">
              <Form.Label>Last Name</Form.Label>
              <Form.Control id="lastName" placeholder="Last Name" onChange={this.handleChange} />
            </Form.Group>
          </Row>

          <Row>
            <Form.Group as={Col} >
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" id='email' placeholder="Enter email" onChange={this.handleChange} />
            </Form.Group>
          
            <Form.Group as={Col}>
              <Form.Label>Password</Form.Label>
              <Form.Control id='password' type="password" placeholder="Password" onChange={this.handleChange} />
            </Form.Group>
          </Row>
          
          <Form.Group as={Col} className="mb-2" >
            <Form.Label>Address</Form.Label>
            <Form.Control id='address' type='address' placeholder="1234 Main St" onChange={this.handleChange}/>
          </Form.Group>
          
          {/* <Form.Group  as={Col} className="mb-2" controlId="formGridAddress2">
            <Form.Label>Address 2</Form.Label>
            <Form.Control placeholder="Apartment, studio, or floor" />
          </Form.Group>
          
          <Row className="mb-2">
            <Form.Group as={Col}>
              <Form.Label>City</Form.Label>
              <Form.Control />
            </Form.Group>
          
            <Form.Group as={Col} >
              <Form.Label>State</Form.Label>
              <Form.Select defaultValue="Choose...">
                <option>Choose...</option>
                <option>...</option>
              </Form.Select>
            </Form.Group>
          
            <Form.Group as={Col}>
              <Form.Label>Zip</Form.Label>
              <Form.Control />
            </Form.Group>
          </Row>
          
          <Form.Group className="mb-2" id="formGridCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
           */}
          <Button variant="primary" type="submit" onClick={this.handleAddUserClick} onChange={this.handleChange}>
            Submit
          </Button>
      </Form>
      


     
    );
  }
}

export default SignUpPage;