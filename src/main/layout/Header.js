'use strict';

/**
 * @author palmtale
 * @since 2017/5/24.
 */


import Link from 'next/link'

const linkStyle = {
    marginRight: 15
};

export default () => (
    <div>
        <Link href="/">
            <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/about">
            <a style={linkStyle}>About</a>
        </Link>
    </div>
);
