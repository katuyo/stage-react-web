/**
 * @author palmtale
 * @since 2017/4/17.
 */


import React, { Component } from 'react';


import LinedInButton from "./LinedInButton";
import GithubButton from "./GithubButton";
import WechatButton from "./WechatButton";
import WeiboButton from "./WeiboButton";

class ThirdAuthPanel extends Component {
    render() {
        return (
            <ul className="form-group list-inline list-mr-4">
                <WechatButton/>
                <WeiboButton appKey="1425911063"/>
                <LinedInButton/>
                <GithubButton/>
            </ul>
        );
    }
}

export default ThirdAuthPanel;