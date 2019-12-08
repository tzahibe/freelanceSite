import React from 'react';
import {Link} from "react-router-dom";

class NavComponent extends React.Component {

        render() {
            return (
                <nav id="nav">
                <ul>
                    <Link to="/">
                        <li><span className="icon fa-home"></span></li>
                    </Link>
                    <Link to="/gallery">
                        <li><span className="icon fa-camera-retro"></span></li>
                    </Link>
                    <Link to="/generic">
                        <li><span className="icon fa-file-text-o"></span></li>
                    </Link>
                </ul>
            </nav>
            )
        }   
}


export default NavComponent;