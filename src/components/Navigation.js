import  React,{ Component } from "react"
import { Link } from "react-router-dom"



export default class Navigation extends Component {
    render() {
      return(
      
        <div className="bg-nav">
          <ul className="nav">
            <li>
              <a className="naviga"><i class="fa-solid fa-house" ></i><Link to = '/'> Home </Link></a>
            </li>
            <li>
              <a className="naviga"><i class="fa-regular fa-address-card"></i> About </a>
            </li>
            <li>
              <a className="naviga"><i class="fa-solid fa-square-up-right"></i> News </a>
            </li>
            <li>
              <a className="naviga"><i class="fa-solid fa-address-book"></i><Link to ='/contact'> Contacts </Link></a>
            </li>
          </ul>
        </div>
      
  
      )
    }
  }