import React from 'react';

import {bindActionCreators} from 'redux';
import * as Actions from '../actions';
import {connect} from 'react-redux';

import LoginForm from './LoginForm'

import './../css/app.css';

const App = ({
                 isSecure,
                 isLoggedIn
             }) => {
    return (
        isSecure && !isLoggedIn ?
            <LoginForm/>
            :
            <div className="container">
                <h1 className="h1">Hello there! - Spring + Gradle + Webpack + React</h1>
            </div>
    )
};

const mapStateToProps = state => ({
    isSecure: state.app.isSecure,
    isLoggedIn: state.app.isLoggedIn
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Actions, dispatch)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)