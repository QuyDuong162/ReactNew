import { useParams } from "react-router-dom";
import Players from "../shared/ListOfPlayers";
import { useState } from 'react';
import {Icon} from 'react-materialize';
import ModalCase from "../components/ModalCase";

export default function Detail() {
    
    const [isOpen, setIsOpen] = useState(false);
    const userName = useParams();
    const player = Players.find(player=>{
        return player.id == userName.id;
    });
    {isOpen && <ModalCase setIsOpen={setIsOpen} player={player} />}

    return(
        <div className="container">
            <div className="product-card">

                <div className= "badge">{player.name}</div>
                <div className="product-tumb">
                    <img src={`../${player.img}`} alt='' />
                </div>
                <div className="product-details">
                    <h4>{player.nation}</h4>
                    <p>{player.info}</p>
                    <div className="product-bottom-details"></div>
                    <a onClick={() => setIsOpen(true)} className="btn-floating halfway-fab waves-effect waves-light red">
                        <Icon>ondemand_video</Icon>
                    </a>
                </div>
            </div>

        </div>
    )
}