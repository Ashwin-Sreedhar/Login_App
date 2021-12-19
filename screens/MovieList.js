/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import * as loginActions from './redux/actions/loginAction';
import { bindActionCreators } from 'redux';
import { ActivityIndicator, FlatList, Text, View, StyleSheet, TouchableOpacity } from 'react-native';

class MovieList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            isLoading: true,
        };
    }

    Profile = () => {
        console.log("Profile clicked");
        this.props.navigation.navigate('Home');
    }

    Logout = () => {
        console.log("Logout Clicked");
        this.props.actions.set_login(false);
        this.props.actions.set_name('');
        this.props.actions.set_age('');
        this.props.navigation.navigate('Login');
    }

    async componentDidMount() {
        try {
            const response = await axios.get('https://reactnative.dev/movies.json');
            // const json = await response.json();
            this.setState({ data: response.data.movies });
        } catch (error) {
            console.log(error);
        } finally {
            this.setState({ isLoading: false });
        }
    }

    render() {
        const { data, isLoading } = this.state;

        return (
            <View style={styles.container}>
                <View style={styles.card}>
                    <View style={{ alignItems: 'center', marginBottom: 20, }}><Text style={{ fontSize: 26 }}>Movie List</Text></View>
                    {isLoading ? <ActivityIndicator /> : (
                        <FlatList
                            data={data}
                            keyExtractor={({ id }, index) => id}
                            renderItem={({ item }) => (
                                <View style={styles.listctn}>
                                    <Text style={styles.textcontainer}>{item.id}, {item.title}, {item.releaseYear}</Text>
                                </View>
                            )}
                        />
                    )}
                    <View style={styles.btnmaincontainer}>
                        <TouchableOpacity onPress={this.Profile}>
                            <View style={styles.btncontainer}>
                                <View style={{ minWidth: 80 }}>
                                    <Text style={{ fontSize: 16, textAlign: 'center' }}>My Profile</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.btnmaincontainer}>
                        <TouchableOpacity onPress={this.Logout}>
                            <View style={styles.btncontainer}>
                                <View style={{ minWidth: 80 }}>
                                    <Text style={{ fontSize: 16, textAlign: 'center' }}>Logout</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#212F3D',
    },
    textcontainer: {
        color: 'black',
        fontSize: 20,
    },
    listctn: {
        padding: 20,
        backgroundColor: '#D2B4DE',
        marginBottom: 20,
        borderRadius: 40,
    },
    card: {
        margin: 10,
        backgroundColor: '#17202A',
        borderRadius: 20,
        padding: 30,
    },
    btncontainer: {
        backgroundColor: '#CA1DCD',
        padding: 12,
        borderRadius: 40,
    },
    btnmaincontainer: {
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 20,
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

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
