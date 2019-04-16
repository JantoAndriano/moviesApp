import React, { Component } from 'react';
import { View, Image, Text, StyleSheet, TextInput } from 'react-native';
import {
  Container,
  Content,
  Header,
  Icon,
  Title,
  Card,
  CardItem
} from 'native-base';
import Swiper from 'react-native-swiper';
import RecomendedMovie from '../components/RecomendedMovie';

class HomeScreen extends Component {
  render() {
    return (
      <Container>
        <Header style={{ backgroundColor: '#3a455c' }}>
          <Title
            style={{
              alignItems: 'center',
              color: '#FFC107',
              fontSize: 30
            }}
          >
            CINEMAXX
          </Title>
        </Header>
        <View
          style={{
            paddingTop: 20,
            backgroundColor: '#3a455c',
            paddingBottom: 20
          }}
        >
          <View style={styles.searchContainer}>
            <Icon name='ios-search' size={20} style={{ marginRight: 10 }} />
            <TextInput
              keyboardType='default'
              keyboardAppearance='light'
              underlineColorAndroid='transparent'
              placeholder='Search movies here'
              placeholderTextColor='grey'
              style={styles.searchInput}
            />
          </View>
        </View>

        <Content style={{ backgroundColor: '#d5d5d6' }}>
          <Swiper style={{ height: 100 }} autoplay={true}>
            <View style={{ flex: 1 }}>
              <Image
                style={styles.imgSwiper}
                source={require('../images/swiper-1.jpg')}
              />
            </View>
            <View style={{ flex: 1 }}>
              <Image
                style={styles.imgSwipper2}
                source={require('../images/swiper-3.jpg')}
              />
            </View>
          </Swiper>

          <Card>
            <CardItem header>
              <Text style={{ fontWeight: '600' }}>Now playing</Text>
            </CardItem>
            <RecomendedMovie
              movieName='Avengers : End Game'
              movieCreator='Marvel'
              imgUri={require('../images/movie-1.jpg')}
              movieDesc='After the devastating events of Avengers: Infinity War (2018), the
              universe is in ruins. With the help of remaining allies, the
              Avengers assemble once more in order to undo Thanos actions and
              restore order to the universe'
            />
            <RecomendedMovie
              movieName='Spiderman'
              movieCreator='Marvel'
              imgUri={require('../images/movie-2.jpg')}
              movieDesc='Peter Parker and his friends go on a European vacation, 
              where Peter finds himself agreeing to help Nick Fury uncover the mystery of several elemental creature attacks,
              creating havoc across the continent.'
            />
            <RecomendedMovie
              movieName='Captain Marvel'
              movieCreator='Marvel'
              imgUri={require('../images/movie-3.jpg')}
              movieDesc='Carol Danvers becomes one of the universe most powerful 
              heroes when Earth is caught in the middle of a galactic war between two alien races'
            />
            <RecomendedMovie
              movieName='Batman : The Darknight Rises'
              movieCreator='Marvel'
              imgUri={require('../images/movie-4.png')}
              movieDesc='Eight years after the Jokers reign of anarchy, Batman, with the help of the enigmatic Catwoman, is forced from his exile to save Gotham City, now on the edge of total annihilation, from the brutal guerrilla terrorist Bane.'
            />
          </Card>
        </Content>
      </Container>
    );
  }
}
export default HomeScreen;

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    padding: 5,
    backgroundColor: 'white',
    marginHorizontal: 20,
    shadowOffset: { width: 0, height: 0 },
    shadowColor: 'black',
    shadowOpacity: 0.2,
    elevation: 1,
    borderRadius: 10
  },
  searchInput: {
    flex: 1,
    fontWeight: '700',
    backgroundColor: 'white',
    borderRadius: 3
  },
  welcomeUser: {
    height: 50,
    backgroundColor: 'white',
    flexDirection: 'row',
    paddingHorizontal: 5,
    alignItems: 'center'
  },
  imgSwiper: {
    flex: 1,
    height: null,
    width: null,
    resizeMode: 'cover'
  },
  imgSwipper2: {
    width: null,
    flex: 1,
    height: null,
    resizeMode: 'cover'
  }
});
