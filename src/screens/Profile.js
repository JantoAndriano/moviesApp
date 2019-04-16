import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Avatar } from 'react-native-elements';
import {
  Container,
  Content,
  Left,
  Right,
  ListItem,
  Body,
  Switch,
  Button,
  Text
} from 'native-base';

import Icon from 'react-native-vector-icons/Ionicons';

class Profile extends Component {
  render() {
    return (
      <Container>
        <View style={styles.container}>
          <View style={styles.imgContainer}>
            <Avatar
              size='xlarge'
              rounded
              source={require('../images/profile.jpg')}
            />
            <View style={{ paddingTop: 15 }}>
              <Text style={styles.textProfile}>Janto Motulo</Text>
              <Text style={styles.textLocation}>
                Kebayoran | Jakarta Selatan
              </Text>
            </View>
          </View>
        </View>

        <Content>
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: '#2ecc71' }}>
                <Icon active name='ios-call' size={30} color='white' />
              </Button>
            </Left>
            <Body>
              <Text>Phone number</Text>
            </Body>
            <Right>
              <Text>082112131616</Text>
            </Right>
          </ListItem>

          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: '#e74c3c' }}>
                <Icon active name='ios-mail' size={30} color='white' />
              </Button>
            </Left>
            <Body>
              <Text>Email</Text>
            </Body>
            <Right>
              <Text>motulojanto@gmail.com</Text>
            </Right>
          </ListItem>

          <Content>
            <ListItem icon>
              <Left>
                <Button style={{ backgroundColor: '#268bd2' }}>
                  <Icon
                    active
                    name='ios-notifications'
                    size={30}
                    color='white'
                  />
                </Button>
              </Left>
              <Body>
                <Text>Notifications</Text>
              </Body>
              <Right>
                <Switch value={true} />
              </Right>
            </ListItem>
          </Content>

          <Button
            danger
            rounded
            full
            style={{
              marginTop: 20
            }}
          >
            <Text style={{ textAlign: 'center', alignItems: 'center' }}>
              LOGOUT
            </Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
export default Profile;

const styles = StyleSheet.create({
  container: { backgroundColor: '#3a455c', height: 350 },
  textProfile: {
    color: '#FFC107',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  imgContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 80
  },
  textLocation: { fontSize: 13, color: 'white', textAlign: 'center' },
  iconContainer: { paddingLeft: 50, paddingTop: 20 }
});
