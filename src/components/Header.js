import React from 'react';
import { connect } from 'react-redux';

class Header extends React.Component {

    render() {
        return (
            <div className="title-header">
                <h2>Movies List</h2>
            </div>
        );
    }
}

export default connect(null, null)(Header);
