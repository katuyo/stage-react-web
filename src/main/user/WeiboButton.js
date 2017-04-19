/**
 * @author palmtale
 * @since 2017/4/17.
 */
import React, {Component} from 'react';

import 'font-awesome/css/font-awesome.min.css';
import './ThirdAuth.css';

class WeiboButton extends Component {

    prepare() {
        let html = document.getElementsByTagName('html')[0];

        html.addXMLNamespace = () => {
            if(html.getAttribute('xmlns:wb')){
                html.setAttribute('xmlns:wb', 'http://open.weibo.com/wb');
            }
            return html;
        };

        html.addWeiboLogin = () => {
            let script = document.createElement('script');
            script.setAttribute("type", "text/javascript");
            html.appendChild(script);
            script.innerHTML = 'document.getElementsByClassName("icon-link round weibo fill")[0].onclick = () => {WB2.login(function(){console.info("Logged weibo in")})}';
            html.removeChild(script);
            return html;
        };

        html.addWeiboSTK = () => {
            if(html.weibo) {
                return;
            }
            let scriptUrl = "http://tjs.sjs.sinajs.cn/open/api/js/wb.js?appkey=" + this.props.appKey;
            let script = document.createElement("script");
            script.setAttribute("id", "weibojs");
            script.setAttribute("type", "text/javascript");
            script.setAttribute("charset", "utf-8");
            html.appendChild(script);
            script.onload = () => {
                html.weibo = true;
                html.removeChild(script);
                html.addWeiboLogin();
            };
            script.onreadystatechange = () => {
                if (this.readyState === "loaded" || this.readyState === "complete") {
                    html.weibo = true;
                    html.removeChild(script);
                    html.addWeiboLogin();
                }
            };
            script.setAttribute("src", scriptUrl);
            return html;
        };

        html.addXMLNamespace()
            .addWeiboSTK();
    }

    render() {
        this.prepare();
        return (
            <li className="list-inline-item">
                <a id="weiboButton" href="#" role="button" className="icon-link round weibo fill">
                    <i className="fa fa-weibo"></i>
                </a>
            </li>
        );
    }
}

export default WeiboButton;