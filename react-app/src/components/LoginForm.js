import React from 'react';

import {bindActionCreators} from 'redux';
import * as Actions from '../actions';
import {connect} from 'react-redux';

import './../css/signin.css';

const LoginForm = ({
                       loginMessage,
                       actions
                   }) => {

    return (
        <div className="container">

            {loginMessage && <div> Invalid username and password. Check and Try again.</div>}

            <form id="loginForm" className="form-signin" onSubmit={e => {
                actions.tryLogin({
                    username: e.target.username.value,
                    password: e.target.password.value,
                })
                e.preventDefault()
            }}>
                <h2 className="form-signin-heading">Please sign in</h2>
                <label htmlFor="username" className="sr-only">Email address</label>
                <input type="text" id="username" name="username" className="form-control" placeholder="User Id"
                       required="true"
                       autoFocus="true" ng-model="credentials.username"/>
                <label htmlFor="password" className="sr-only">Password</label>
                <input type="password" id="password" name="password" className="form-control" placeholder="Password"
                       required="true" ng-model="credentials.password"/>
                <button className="btn btn-lg btn-primary btn-block" type="submit" value="Sign In">Sign in</button>
            </form>

        </div>
    )
};

const mapStateToProps = state => ({
    loginMessage: state.app.loginMessage
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Actions, dispatch)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginForm)
