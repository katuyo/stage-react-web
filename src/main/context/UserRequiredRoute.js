/**
 * @author palmtale
 * @since 2017/4/20.
 */
import React from 'react';
import {Redirect} from 'react-router-dom';
import axios from 'axios';


class UserRequiredRoute extends React.Component {

    state = {
        user: null,
        found: false
    };

    findHeader() {
        const reg=new RegExp("(^| )Authorization=([^;]*)(;|$)");
        const arr = document.cookie.match(reg);
        if(arr) {
            return {Authorization: arr[2]}
        } else {
            return {'Authorization': ''};
        }
    }

    findUser = () => {
        axios.get('/api/profile', {headers: this.findHeader()})
            .then(u => {
                this.setState({user: u.data, found: true});
            }).catch(e => {
                this.setState({user: null, found: true})
            });
    };

    render = () => {
        const {component: Component, ...restProps} = this.props;
        if(this.state.user) {
            return (<Component user={this.state.user.result} {...restProps}/>);
        } else if (this.state.found) {
            const from = this.props.path + (location.search || location.hash);
            return (<Redirect to={{pathname: '/login/' + Math.random(), state: {from: from}}}/>);
        } else {
            this.findUser();
            return (<div />);
        }
    }
}

export default UserRequiredRoute;