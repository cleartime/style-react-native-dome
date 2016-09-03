import React, { Component, PropTypes } from 'react';
import { Navigator, Text, TouchableHighlight, View } from 'react-native';

export default class SimpleNavigationApp extends Component {
    render() {
        return (
            <Navigator
                initialRoute={{ title: 'My Initial Scene', index: 0 }}
                renderScene={(route, navigator) =>
          <MyScene
            title={route.title}

            // 推入新场景所调用的方法
            onForward={() => {
              const nextIndex = route.index + 1;
              navigator.push({
                title: 'Scene ' + nextIndex,
                index: nextIndex,
              });
            }}

            // 返回上一个场景所调用的方法
            onBack={() => {
              if (route.index > 0) {
                navigator.pop();
              }
            }}
          />
        }
            />
        )
    }
}

class MyScene extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        onForward: PropTypes.func.isRequired,
        onBack: PropTypes.func.isRequired,
    }
    render() {
        return (
            <View>
                <Text>Current Scene: { this.props.title }</Text>
                <TouchableHighlight onPress={this.props.onForward}>
                    <Text>Tap me to load the next scene</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={this.props.onBack}>
                    <Text>Tap me to go back</Text>
                </TouchableHighlight>
            </View>
        )
    }
}