/**
 * Created by gxx on 16/9/3.
 */
import React, { Component } from 'react';
import { View, Text, TouchableHighlight, ListView } from 'react-native';

export default class MyScene extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(['......'])
        };
        this.fetchData();
    }

    fetchData = (ca) => {
        fetch('http://cleartime.leanapp.cn/linkfriend')
            .then((response) => response.json())
            .then((responseJson) => {
                const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
                const data = [];
                for (let i of responseJson.data) {
                    data.push(i.title);
                }
                this.setState({
                    dataSource: ds.cloneWithRows([
                        data
                    ])
                })
            }).catch((error) => {
            console.error(error);
        });
    };


    render() {
        return (
            <View style={{padding:20}}>
                <Text>my frist dome</Text>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => <Text>{rowData}</Text>}
                />
                <TouchableHighlight onPress={this.fetchData}>
                    <Text>点击我</Text>
                </TouchableHighlight>
            </View>
        )
    }
}