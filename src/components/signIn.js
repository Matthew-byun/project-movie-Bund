// // import { useState, useEffect } from 'react';
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Button, Form } from "react-bootstrap";

// import React, { Component } from 'react'

// class SignInPage extends Component {
//   state = {
//     email: '',
//     password: ''
//   }
//   handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(this.state)
//   }

//   handleChange = (e) => {
//     this.setState({
//       [e.target.type]: e.target.value
//     })
//   }

//   render() {
//     return (
//       <Form className='container pt-5'>
//       <p className='d-flex justify-content-center pb-5 fs-1 fw-bold'>SIGN IN</p>
//     <Form.Group className="mb-3" controlId="formBasicEmail">
//       <Form.Label>Email address</Form.Label>
//       <Form.Control type="email" placeholder="Enter email" onChange={this.handleChange} />
//       <Form.Text className="text-muted">
//         We'll never share your email with anyone else.
//       </Form.Text>
//     </Form.Group>
  
//     <Form.Group className="mb-3" controlId="formBasicPassword">
//       <Form.Label>Password</Form.Label>
//       <Form.Control type="password" placeholder="Password" onChange={this.handleChange} />
//     </Form.Group>
//     <Form.Group className="mb-3" controlId="formBasicCheckbox">
//       <Form.Check type="checkbox" label="Check me out" />
//     </Form.Group>
//     <Button variant="primary" type="submit" onClick={this.handleSubmit}>
//       Submit
//     </Button>
//   </Form>
//     );
//   };
// }

// export default SignInPage
