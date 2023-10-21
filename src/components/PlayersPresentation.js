import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function PlayersPresentation({players}) {
    const [player, setPlayer] = useState([])
     //console.log(players);
    return (
        <div className="column">
        {players.map((player) => (
                <div key={player.id}>
                <div className='card'>                        
                        <div className="img-src">
                            <img className="anh" src={player.img} />
                        </div>
                        <h3>{player.name}</h3>
                        <p className='title'>{player.year}</p>
                        <p>Nation: {player.nation}</p>
                        {/* <p><button onClick={()=>{setPlayer(player)}}><a href='#popup1' id ='openPopUp'>Detail</a></button></p> */}
                        {/* <Link to={`detail/${player.id}`}> 
                            <p><button>Detail</button></p>
                        </Link> */}
                        <Link to={`/detail/${player.id}`}><p><button>Detail</button></p></Link>
                            
                    </div>
                </div>
            ))}
            {/* <div id="popup1" className="overlay">
                    <div className="popup">
                        <img src={player.img}/>
                        <h2>{player.name}</h2>
                        <a className="close" href="#">&times;</a>
                        <div className="content">
                            {player.info}
                        </div>
                    </div>
                </div> */}
        </div>
  )
}
