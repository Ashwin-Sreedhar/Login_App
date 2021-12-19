/* eslint-disable no-unused-vars */ /* eslint-disable react-native/no-inline-styles */ /* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as loginActions from './redux/actions/loginAction';
import { bindActionCreators } from 'redux';
import { View, Text, StyleSheet, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native';

class Home extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={{ margin: 20, backgroundColor: '#17202A', borderRadius: 40, }}>
                    <ScrollView>
                        <View style={styles.imagecontainer}>
                            <Image
                                source={require('../assets/note.png')}
                                style={{ width: 100, height: 80 }}
                            />
                        </View>
                        <View style={styles.textcontainer}>
                            <Text style={{ fontSize: 26 }}>Profile</Text>
                        </View>
                        <View style={styles.details}>
                            <Text style={styles.textctn}>Name: {this.props.names.name}</Text>
                            <Text style={styles.textctn}>Age: {this.props.ages.age}</Text>
                        </View>
                        <View style={styles.btnmaincontainer}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('MovieList')}>
                                <View style={styles.btncontainer}>
                                    <View style={{ minWidth: 80 }}>
                                        <Text style={{ fontSize: 16, textAlign: 'center' }}><Image
                                            source={require('../assets/lgot.png')}
                                            style={{ width: 20, height: 20 }}
                                        />Back</Text>
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
    textctn: {
        marginLeft: 20,
        fontSize: 16,
        marginTop: 16,
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
    details: {
        padding: 20,

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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
