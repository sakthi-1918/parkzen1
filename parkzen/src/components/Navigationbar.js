import React, { Component } from 'react';
import "./NavbarStyles.css";
import { Link } from "react-router-dom";
import { MenuItems } from "./MenuItems";

class Navibar extends Component {
    state = {
        clicked: false,
        activeItem: null, // Track the active item
    };

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked });
    };

    setActiveItem = (index) => {
        this.setState({ activeItem: index });
    };

    render() {
        return (
            <nav className="NavbarItems">
                <h1 className="navbar-logo">ParkZen</h1>
                <div className='menu-icons' onClick={this.handleClick}>
                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link
                                    className={this.state.activeItem === index ? `${item.cName} active` : item.cName}
                                    to={item.url}
                                    onClick={() => this.setActiveItem(index)}
                                >
                                    <i className={item.icon}></i>{item.title}
                                </Link>
                            </li>
                        );
                    })}
                    <button>Logout</button>
                </ul>
            </nav>
        );
    }
}

export default Navibar;
