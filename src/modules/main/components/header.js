import React from 'react';
import { withRouter } from 'react-router-dom';

class HeaderComponent extends React.Component {

    constructor(props) {
        super(props);
    };

    componentDidMount() {
    };

    render() {
        return (
            <>
                <div id="header" className="header">
                    <nav className="navbar">
                        <ul className="list-unstyled" id="header-list">
                            <li>
                                <a className="navbar-brand pr-4 text-success">{this.props.isChecked ? '' : "LEAFTEE"}</a>
                            </li>
                            <li>
                                <div className="searchbar-container">
                                    <button className="btn btn-sm btn-success" type="submit">
                                        <i className="fas fa-search"></i>
                                    </button>
                                    <input className="search-input" type="search" placeholder="Search" aria-label="Search" />
                                </div>
                            </li>
                            <li id="action">
                                <div className='dropdown'>
                                    <button className="btn btn-sm btn-success btn-outline">Actions</button>
                                    <ul className="list-unstyled">
                                        <li><a href="#">Act 1</a></li>
                                        <li><a href="#">Act 2</a></li>
                                        <li><a href="#">Act 3</a></li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </nav>
                </div>
            </>

        );
    };
};

export default withRouter(HeaderComponent);