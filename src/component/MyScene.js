/**
 * Created by gxx on 16/9/3.
 */
import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

export default class MyScene extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '点击我',
        }
    }

    fetchData = (ca) => {
        fetch('http://cleartime.leanapp.cn/linkfriend')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    title: responseJson.data,
                })
            }).catch((error) => {
            console.error(error);
        });
    };


    render() {
        return (
            <View>
                <Text>my frist dome</Text>
                <TouchableHighlight onPress={this.fetchData}>
                    <Text>点击我</Text>
                </TouchableHighlight>
            </View>
        )
    }
}