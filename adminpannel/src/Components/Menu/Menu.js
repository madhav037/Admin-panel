import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import "./Menu.css"


export default function Menu() {
    return (
        <>
        {/* <div id="mainbox"> */}
          <div id="main-div">
            <span id="Title">Netflix</span>
            <FontAwesomeIcon icon={icon({name:'plus', style : 'solid'})} bounce id='add'/>          
            <input type="text" placeholder='search' id='search-box'/>
            <button type="submit"><i class="fa fa-search search-icon"></i></button>
            <span id="logo"></span>
          </div>  
        {/* </div> */}
        </>
    )
}