import React from 'react';
import {NavLink} from "react-router-dom";

class NavComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {shouldHide: true};
      }

      toggleNav = () => {
        this.setState({shouldHide: !this.state.shouldHide});
      };
        render() {

            return (
                <div className="navDiv">
                <i className="icon fas fa-bars" onClick={() => this.toggleNav()}></i>

                <nav id="nav">
                <ul className={this.state.shouldHide ? 'fade out' : 'fade in'}>
                <li title="עמוד הבית">
                    <NavLink  exact  to="/" activeClassName="active" onClick={() => this.toggleNav()}>
                        <span className="nav_text">ראשי</span>
                        <span className="icon fa-home"></span>
                    </NavLink>
                    </li>
                    <li title="תיק סעבודות">
                        <NavLink to="/gallery"  activeClassName="active" onClick={() => this.toggleNav()}>
                        <span className="nav_text">תיק עבודות</span>
                        <span className="icon fa-camera-retro"></span>
                        </NavLink>
                    </li>
                    <li title="מי אנחנו">
                        <NavLink to="/generic"  activeClassName="active" onClick={() => this.toggleNav()}>
                        <span className="nav_text">מי אנחנו</span>
                        <span className="icon fa-file-text-o"></span>
                        </NavLink>
                    </li>
                </ul>
            </nav>
            </div>
            )
        }   
}


export default NavComponent;