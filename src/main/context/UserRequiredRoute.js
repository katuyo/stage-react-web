/**
 * @author palmtale
 * @since 2017/4/20.
 */
import React from 'react';
import {Redirect} from 'react-router-dom';
import axios from 'axios';


class UserRequiredRoute extends React.Component {

    state = {
        gotten: false,
        user: null
    };

    render() {
        if(!this.state.gotten) {
            axios.get('/api/user/profile').then(u => {
                this.setState({user: u, gotten: true});
            }).catch(e => {
                this.setState({gotten: true});
            });
        }
        const {component: Component, ...restProps} = this.props;
        if(this.state.user) {
            return (<Component user={this.state.user} {...restProps}/>);
        } else if (this.state.gotten) {
            return (<Redirect to={{pathname: '/login/' + Math.random(), state: {from: location.href}}}/>);
        } else return (<div></div>);
    }
}

export default UserRequiredRoute;