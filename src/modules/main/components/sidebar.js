import React from 'react';
import { withRouter } from 'react-router-dom';

class SidebarComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isChecked: true
        }
    };

    toggleSidebar= () => {
        this.setState({
            isChecked: !this.state.isChecked
        }, ()=>{
            const sidebar = document.getElementById('sidebar');
            
            if(this.state.isChecked) {
                sidebar.classList.add('sidebar-showed');
            } else {
                sidebar.classList.remove('sidebar-showed');
            }
        })
    };

    render() {
        return (
            <>
                <input type="checkbox" checked={this.props.isChecked} id="sidebar-check"/>
                <label htmlFor="sidebar-check">
                    <i className="fas fa-bars text-white" id="sidebar-bars-btn" onClick={this.props.toggleSidebar}></i>
                    <i className="fas fa-times text-white" id="sidebar-close-btn" onClick={this.props.toggleSidebar}></i>
                </label>
                <div className="sidebar position-fixed" id="sidebar">
                    <header className="text-center text-success text-bold">LEAFTEE</header>
                    <ul className="list-unstyled test">
                        <li><a href="#"><i className="fas fa-user mr-3"></i>User</a></li>
                        <li><a href="#"><i className="fas fa-link mr-3"></i>Product</a></li>
                        <li><a href="#"><i className="fas fa-stream mr-3"></i>Transactions</a></li>
                    </ul>
                </div>
            </>
        );
    };
};

export default withRouter(SidebarComponent);