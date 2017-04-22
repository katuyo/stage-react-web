/**
 * @author palmtale
 * @since 2017/4/16.
 */

import React, { Component } from 'react';

import './Detail.css';

class ItemDetail extends Component {

    render = () => {
        const {user} = this.props;
        return (
            <div className="ItemDetail">
                {user.username}/
                {user.alias}
            </div>
        );
    }
}

export default ItemDetail;
