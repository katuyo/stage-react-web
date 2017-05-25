'use strict';

/**
 * @author palmtale
 * @since 2017/5/24.
 */


import Header from './Header'

const layoutStyle = {
    margin: 20,
    padding: 20,
    border: '1px solid #DDD'
};

export default (props) => (
    <div style={layoutStyle}>
        <Header />
        {props.children}
    </div>
);