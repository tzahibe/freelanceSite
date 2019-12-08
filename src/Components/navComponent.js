import React from 'react';
import {NavLink} from "react-router-dom";

class NavComponent extends React.Component {

        render() {
            return (
                <nav id="nav">
                <ul>
                <li title="עמוד הבית">
                    <NavLink  exact  to="/" activeClassName="active">
                        <span className="icon fa-home"></span>
                    </NavLink>
                    </li>
                    <li title="גלריה">
                        <NavLink to="/gallery"  activeClassName="active">
                        <span className="icon fa-camera-retro"></span>
                        </NavLink>
                    </li>
                    <li title="מי אנחנו">
                        <NavLink to="/generic"  activeClassName="active">
                        <span className="icon fa-file-text-o"></span>
                        </NavLink>
                    </li>
                </ul>
            </nav>
            )
        }   
}


export default NavComponent;