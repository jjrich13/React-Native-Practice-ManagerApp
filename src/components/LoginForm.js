import React, { Component } from 'react';
import { Card, CardSection, Input, Button } from './common';
import { connect } from 'react-redux';
import { emailChanged } from './actions'
class LoginForm extends Component {
    onEmailChange = () => {
         this.props.dispatch(emailChanged())
    }

    render(){
        return(
            <Card>
                <CardSection>
                    <Input 
                        label="Email"
                        placeholder="email@mail.com"
                        onChangeText={this.onEmailChange}
                    />
                </CardSection>

                <CardSection>
                    <Input 
                        secureTextEntry
                        label="Password"
                        placeholder="password"
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

export default connect()(LoginForm);