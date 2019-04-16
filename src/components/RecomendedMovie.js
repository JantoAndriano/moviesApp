import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Card, CardItem, Right, Button } from 'native-base';

class RecomendedMovie extends Component {
  render() {
    return (
      <CardItem>
        <View>
          <Image
            style={{ height: 90, width: 90, resizeMode: 'contain' }}
            source={this.props.imgUri}
          />
        </View>
        <Right
          style={{
            flex: 1,
            alignItems: 'flex-start',
            height: 100,
            paddingHorizontal: 10
          }}
        >
          <Text style={{ color: 'red' }}>{this.props.movieName}</Text>
          <Text style={{ color: 'grey', fontSize: 11, marginTop: 3 }}>
            {this.props.movieCreator}
          </Text>
          <Text style={{ fontSize: 9, textAlign: 'justify', marginTop: 3 }}>
            {this.props.movieDesc}
          </Text>
          <Text style={{ color: 'blue', fontSize: 10 }} onPress={() => {}}>
            More >>>
          </Text>
        </Right>
      </CardItem>
    );
  }
}
export default RecomendedMovie;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
