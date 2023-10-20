import React, { Component } from "react";
import { Players } from '../shared/ListOfPlayers'

export default class Player extends Component {
    render() {
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
                                <p><button>Detail</button></p>
                            </div>
                        </div>
                ))}
                </div>

            
        )
    }


} 