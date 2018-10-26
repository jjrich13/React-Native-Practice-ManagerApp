import React, { Component } from 'react';
import { Card, CardSection, Input, Button } from './common';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged } from '../actions'
class LoginForm extends Component {
    onEmailChange = (text) => {
         this.props.dispatch(emailChanged(text))
    }
    
    onPasswordChange = (text) => {
        this.props.dispatch(passwordChanged(text))
    }

    render(){
        console.log(this.props.email + ' ' + this.props.password);
        
        return(
            <Card>
                <CardSection>
                    <Input 
                        label="Email"
                        placeholder="email@mail.com"
                        onChangeText={this.onEmailChange}
                        value={this.props.email}
                    />
                </CardSection>

                <CardSection>
                    <Input 
                        secureTextEntry
                        label="Password"
                        placeholder="password"
                        onChangeText={this.onPasswordChange}
                        value={this.props.password}
                    />
                </CardSection>

                <CardSection>
                    <Button>
                        Log In
                    </Button>
                </CardSection>
            </Card>
        )
    }
}

const mapStateToProps = state => {
    return{
        email: state.auth.email,
        password: state.auth.password
    }
}

export default connect(mapStateToProps)(LoginForm);