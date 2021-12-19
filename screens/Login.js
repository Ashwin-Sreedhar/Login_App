/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as loginActions from './redux/actions/loginAction';
import { bindActionCreators } from 'redux';
import { View, Text, StyleSheet, Image, ScrollView, TextInput, TouchableOpacity, Alert } from 'react-native';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = { email: '' };
        this.state = { pass: '' };
        console.log("Value of Login => ", this.props.logins.isEnable);
        console.log("Value of name => ", this.props.names.name);
        console.log("Value of age => ", this.props.ages.age);
    }

    componentDidMount() {
        if (this.props.logins.isEnable === true) {
            this.props.navigation.navigate('MovieList');
        }
    }

    Homescreen = () => {

        const uemail = this.state.email;
        const password = this.state.pass;
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (uemail === "" || password === "") {
            Alert.alert(
                "Error",
                "Incomplete Details",
                [
                    { text: "OK" }
                ]
            );
        }
        else {
            if (reg.test(uemail) === true) {
                if (password.length < 8) {
                    Alert.alert(
                        "Incorrect",
                        "Length of Password must be greater than 7 charecters",
                        [
                            { text: "OK" }
                        ]
                    );
                }
                else {
                    if (uemail === "ashwinsreedhar3@gmail.com" && password === "Pass1234") {
                        Alert.alert(
                            "Successfull",
                            "Welcome",
                            [
                                { text: "OK" }
                            ]
                        );
                        this.props.actions.set_login(true);
                        this.props.actions.set_name('Ashwin');
                        this.props.actions.set_age('23');
                        this.props.navigation.navigate('MovieList');

                    }
                    else {
                        Alert.alert(
                            "Error",
                            "Invalid Credentials",
                            [
                                { text: "OK" }
                            ]
                        );
                    }
                }
            }
            else {
                Alert.alert(
                    "Error",
                    "Invalid Email-id",
                    [
                        { text: "OK" }
                    ]
                );
            }

        }
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={{ margin: 20, backgroundColor: '#17202A', borderRadius: 40 }}>
                    <ScrollView>
                        <View style={styles.imagecontainer}>
                            <Image
                                source={require('../assets/password.png')}
                                style={{ width: 100, height: 100 }}
                            />
                        </View>
                        <View style={styles.textcontainer}>
                            <Text style={{ fontSize: 26 }}>Login</Text>
                        </View>
                        <View>
                            <View style={styles.inputcontainer}>
                                <TextInput style={{ textAlign: 'center', fontSize: 17, color: 'black' }} onChangeText={(email) => this.setState({ email })} placeholder="Email-Id" placeholderTextColor="#ABB2B9" />
                            </View>
                            <View style={styles.inputcontainer}>
                                <TextInput style={{ textAlign: 'center', fontSize: 17, color: 'black' }} onChangeText={(pass) => this.setState({ pass })} placeholder="Password" placeholderTextColor="#ABB2B9" secureTextEntry={true} />
                            </View>
                        </View>
                        <View style={styles.btnmaincontainer}>
                            <TouchableOpacity onPress={this.Homescreen}>
                                <View style={styles.btncontainer}>
                                    <View style={{ minWidth: 80 }}>
                                        <Text style={{ fontSize: 16, textAlign: 'center' }}>Login</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#212F3D',
        justifyContent: 'center',
    },
    imagecontainer: {
        alignItems: 'center',
        marginTop: 60,
    },
    textcontainer: {
        alignItems: 'center',
        marginTop: '5%',
    },
    inputcontainer: {
        borderRadius: 30,
        backgroundColor: '#F4F6F6',
        marginLeft: 20,
        marginRight: 20,
        marginTop: 30,
    },
    btncontainer: {
        backgroundColor: '#CA1DCD',
        padding: 12,
        borderRadius: 40,
    },
    btnmaincontainer: {
        marginTop: 40,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 60,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
});

const mapStateToProps = (state) => {
    return {
        logins: state.loginState,
        names: state.nameState,
        ages: state.ageState,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(loginActions, dispatch),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
