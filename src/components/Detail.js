import { useParams } from "react-router-dom";
import Players from "../shared/ListOfPlayers";

export default function Detail() {

    const userName = useParams();
    const player = Players.find(player=>{
        return player.id == userName.id;
    });

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

                </div>
            </div>

        </div>
    )
}