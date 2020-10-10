import React from 'react';
import { withRouter } from 'react-router-dom';

import SidebarComponent from './sidebar';
import HeaderComponent from './header';
import FooterComponent from './footer';

import '../styles/style.css';

class MainComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isChecked: true
        }
    };

    toggleSidebar= () => {
        this.setState({
            isChecked: !this.state.isChecked
        })
    };

    render() {
        return (
            <div>
                <SidebarComponent 
                    isChecked = {this.state.isChecked}
                    toggleSidebar={this.toggleSidebar}
                />
                <div className="content">
                    <HeaderComponent
                        isChecked = {this.state.isChecked}
                    />
                </div>
                <div id="footer">
                    <FooterComponent/>
                </div>
            </div>
        );
    };
};

export default withRouter(MainComponent);