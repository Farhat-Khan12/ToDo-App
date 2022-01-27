import React, { useState, useEffect, useRef } from 'react'
import { Form, FormLabel, Button, Col, Row, Container } from 'react-bootstrap'
import axios from 'axios';
const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const URL = "http://localhost:3002"
function Forms() {
  const [select, setSelect] = useState()

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const mobileRef = useRef(null);
  const [data, setData] = useState()
  const [Errors, seterrors] = useState({
    name: '',
    email: '',
    mobile: ''
  })

  const handler = (event) => {
    const { name, value } = event.target;
    // eslint-disable-next-line default-case
    switch (name) {
      case 'name':
        Errors.name = value.length > 3 ? '' : 'Name Should be greater than 3 letters';
        break;
      case 'email':
        Errors.email = mailformat.test(value) ? '' : 'Enter a valid email format';
        break;
      case 'mobile':
        Errors.mobile = value.length > 3 ? '' : 'Username Should be greater than 3 letters';
        break;



    }
    const state = { [name]: value }
    setSelect([state])

  }
  const validate = (Errors) => {
    let valid = true;
    Object.values(Errors).forEach((val) =>
      val.length > 0 && (valid = false));
    return valid;

  }
  const submit = (event) => {
    event.preventDefault();


    if (validate(Errors)) {
      console.log(nameRef.current);
      let formData = {
        name: nameRef.current.value,
        email: emailRef.current.value,
        mobile: mobileRef.current.value
      }
      axios.post(URL, formData)
      alert("Data added");
      axios.get(URL)
        .then(res => {
          console.log(res.data);
          setData(res.data)

        })

      alert("Submitted Successfully")
      console.log(formData);
    }

    else {
      alert('error')

    }

  }

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Container>
              <i style={{ color: 'blue' }} className="bi bi-geo-alt-fill fa-2x"></i>
              <h3>Address</h3>
              <p style={{ color: '#CAE7E5' }}>The New Building,<br />abc street ,London, 898600</p>
            </Container>
            <Container>
              <i style={{ color: 'blue' }} class="bi bi-telephone-fill fa-2x"></i>
              <h3>Phone</h3>
              <p style={{ color: '#CAE7E5' }}>
                9303869775
                <br></br>
                7899766790</p>
            </Container>
            <Container>

              <i style={{ color: 'blue' }} class="bi bi-envelope-fill fa-2x"></i>
              <h3>Email</h3>
              <p style={{ color: '#CAE7E5' }}>
                course-course@gmail.com
              </p>
            </Container>
            <div class="vl"></div>

          </Col>
          <Col>
            <h2 style={{ color: 'darkblue', marginTop: '10px' }}>Send us Message</h2>
            <Form onSubmit={submit}>
              <Form.Group className="mb-4" controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Enter Name" name="name" onChange={handler} ref={nameRef} />
              </Form.Group><span style={{ color: 'red' }}>{Errors.name}</span>

              <Form.Group className="mb-4" controlId="formBasicEmail">

                <Form.Control type="email" placeholder="Enter email" name="email" onChange={handler} ref={emailRef} />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group><span style={{ color: 'red' }}>{Errors.email}</span>

              <Form.Group className="mb-4" controlId="formBasicEmail">
                <Form.Control type="number" placeholder="Enter Mobile" name="mobile" onChange={handler} ref={mobileRef} />
                <Form.Text className="text-muted">
                  We'll never share your mobile with anyone else.
                </Form.Text>
              </Form.Group><span style={{ color: 'red' }}>{Errors.mobile}</span>


              <Form.Group className="mb-4" controlId="mobile">
                <Form.Control type="textarea" placeholder="Enter message" name="text " />
              </Form.Group>

              <Button variant="primary" type="submit">
                Send Now
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Forms
