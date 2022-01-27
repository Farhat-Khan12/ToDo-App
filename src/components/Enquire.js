import React, { useState, useEffect, useRef } from 'react'
import { Form, FormLabel, Button } from 'react-bootstrap'
import axios from 'axios';
const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const URL = "http://localhost:3002/formdata"
function Enquire() {
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
        const { name,value } = event.target;
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
                alert('errror')

            }
       
    }

    return (
        <div>
            <Form onSubmit={submit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <FormLabel>Name</FormLabel>
                    <Form.Control type="text" placeholder="Enter Name" name="name" onChange={handler} inputRef={nameRef} value={select.value}/>
                </Form.Group><span style={{ color: 'red' }}>{Errors.name}</span>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <FormLabel>Email address</FormLabel>
                    <Form.Control type="email" placeholder="Enter email" name="email" onChange={handler} inputRef={emailRef} />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group><span style={{ color: 'red' }}>{Errors.email}</span>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <FormLabel>Mobile</FormLabel>
                    <Form.Control type="number" placeholder="Enter Mobile" name="mobile" onChange={handler} inputRef={mobileRef} />
                    <Form.Text className="text-muted">
                        We'll never share your mobile with anyone else.
                    </Form.Text>
                </Form.Group><span style={{ color: 'red' }}>{Errors.mobile}</span>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default Enquire
