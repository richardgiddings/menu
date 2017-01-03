import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Menu from './components/menu';

import Home from './pages/home';
import Contact from './pages/contact';
import Links from './pages/links';
import Recipes from './pages/recipes';

var Pages = { Home, Contact, Links, Recipes };

class App extends Component {

    constructor(props) {
        super(props);

        this.state = { 
            currentItem: "Home"
        };
        this.menuItemChange = this.menuItemChange.bind(this);
    }

    menuItemChange(selectedItem) {
        this.setState({
            currentItem: selectedItem
        });
    }

    render() {
        const Content = Pages[this.state.currentItem];

        return (
            <div>
                <Menu onMenuChange={this.menuItemChange} />
                <Content className="content" />
            </div>
        );
    }
}

ReactDOM.render(
    <App />, 
    document.getElementById('container')
);