import React from 'react';
import { withRouter } from 'react-router-dom';

class FooterComponent extends React.Component {

    constructor(props) {
        super(props);
    };

    componentDidMount() {
    };

    render() {
        return (
            <>
                <div className="footer">
                    <label>&copy;2020 leaftee.vn</label>
                </div>
            </>

        );
    };
};

export default withRouter(FooterComponent);