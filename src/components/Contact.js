import React, { Component } from "react";
import { Contacts } from '../shared/ListOfContacts'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import {Container, TextInput, Select, Textarea, Button} from 'react-materialize';

export default function Contact(){
    const [contact, setcontact] = useState([])
    const handleSubmit =(e)=> {
        e.preventDefault()
      }
    
        return (
            <Container>
                <form onSubmit={handleSubmit}>
                    <TextInput id = "TextInput-38" label = "Your Name"/>
                    <TextInput id = "TextInput-39" label = "Your Phone"/>
                    <TextInput email id = "TextInput-41" label = "Email" validate/>
                    <Select id = "Select-46" multiple = {false} onChange = {function noRefCheck(){}} value = "">
                        <option disabled value = "">
                            Choose your nation
                        </option>
                        <option value = "1"> Vietnam </option>
                        <option value = "2"> USA </option>
                        <option value = "3"> Japan </option>
                        <option value = "4"> France </option>
                    </Select>
                    <Textarea id = "Textarea-28" label = "Your content"/>
                    <Button>Submit</Button>
                </form>
            </Container>
        )
    }


