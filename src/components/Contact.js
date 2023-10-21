import React, { Component } from "react";
import { Contacts } from '../shared/ListOfContacts'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Contact(){
    const [contact, setcontact] = useState([])
    
        return (
            <div className="column">
                {Contacts.map((contact) => (
                    <div key={contact.id}>
                        <div className='card'>

                            <div className="img-src">
                                <img className="anh" src={contact.img} />
                            </div>
                            <h3>{contact.name}</h3>
                            <p className='title'>Address: {contact.address}</p>
                            <p>{contact.info}</p>
                            <p>Phone number: {contact.number}</p>

                        </div>
                    </div>
                ))}
            </div>


        )
    }


