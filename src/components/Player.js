import React, { Component } from "react";
import { Players } from '../shared/ListOfPlayers'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Player(){
    const [player, setPlayer] = useState([])
    
        return (
            <div className="column">
                {Players.map((player) => (
                    <div key={player.id}>
                        <div className='card'>

                            <div className="img-src">
                                <img className="anh" src={player.img} />
                            </div>
                            <h3>{player.name}</h3>
                            <p className='title'>{player.club}</p>
                            <button onClick={() => { setPlayer(player) }}>
                                <a href='#popup1' id='openPopUp'>Detail</a>
                            </button>

                        </div>
                    </div>
                ))}
            </div>


        )
    }


