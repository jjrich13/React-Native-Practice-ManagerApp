import React, { Component } from 'react';
import { View, Text } from 'react-native'
import { Card, CardSection, Input, Button } from './common';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions'
class LoginForm extends Component {
    onEmailChange = (text) => {
         this.props.dispatch(emailChanged(text))
    }
    
    onPasswordChange = (text) => {
        this.props.dispatch(passwordChanged(text))
    }

    onButtonPress = () => {
        const { email, password } = this.props;
        this.props.dispatch(loginUser({email, password}))
    }

    renderError = () => {
        if(this.props.error){
            return (
                <View style={{backgroundColor: 'white'}}>
                    <Text style={styles.errorTextStyle}>
                        {this.props.error}
                    </Text>
                </View>
            )
        }
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

                {this.renderError()}

                <CardSection>
                    <Button
                        onPress={this.onButtonPress}
                    >
                        Log In
                    </Button>
                </CardSection>
            </Card>
        )
    }
}

const mapStateToProps = state => {
    return {
        email: state.auth.email,
        password: state.auth.password,
        error: state.auth.error
    }
}

export default connect(mapStateToProps)(LoginForm);

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
}