import React, {Component} from 'react';

import menuData from '../data.json';

class MenuItem extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        var elem = "";
        if(this.props.item.icon) {
            elem = <img className="nav-img" src={this.props.item.icon} alt={this.props.item.name} />
        } else {
            elem = <div className="nav-text">{this.props.item.name}</div>
        }

        return (
            <li className={this.props.className} 
                onClick={() => this.props.menuClick(this.props.item.name) }>
                    {elem}
            </li>
        );
    }
}

export default class Menu extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            selected: "Home"
        };
    }

    isActive(value) {
        return "li " + ((value===this.state.selected) ? "active": "default");
    }

    menuChange(which) {
        this.setState({
            selected : which
        });
        this.props.onMenuChange(which);
    }

    renderMenuItem(md) {
        return (
            <MenuItem key={md.name} 
                      className={this.isActive(md.name)} 
                      item={md} 
                      menuClick={this.menuChange.bind(this)} />
        );
    }

    render() {
        return (
            <nav>
                <ul>{ menuData.menu.map(this.renderMenuItem, this) }</ul>
            </nav>
        );
    }
}