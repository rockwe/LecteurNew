// Navigation/Navigations.js

import React from 'react';
import { StyleSheet, Image } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import ArtDetail from '../Components/ArtDetail'
import Favorites from '../Components/Favorites'
import Settings from '../Components/settings'
import Accueil from '../Components/Accueil';

const SearchStackNavigator = createStackNavigator({
  Accueil: {
    screen: Accueil,
    navigationOptions: {
      title: 'Accueil'
    }
  },
  FilmDetail: {
    screen: ArtDetail
  }
})

const FavoritesStackNavigator = createStackNavigator({
  Favorites: {
    screen: Favorites,
    navigationOptions: {
      title: 'Favoris'
    }
  },
  FilmDetail: {
    screen: ArtDetail
  }
})

const NewsStackNavigator = createStackNavigator({
  settings: {
    screen: Settings,
    navigationOptions: {
      title: 'settings',
    },
  },
  FilmDetail: {
    screen: ArtDetail,
  }
})

const MoviesTabNavigator = createMaterialBottomTabNavigator(
  {
    Accueil: {
      screen: SearchStackNavigator,
      navigationOptions: {
        tabBarIcon: () => {
          return <Image
            source={require('../Images/ic_search.png')}
            style={styles.icon}/>
        }
      }
    },
    Favorites: {
      screen: FavoritesStackNavigator,
      navigationOptions: {
        tabBarIcon: () => {
          return <Image
            source={require('../Images/ic_favorite.png')}
            style={styles.icon}/>
        }
      }
    },
    settings: {
      screen: NewsStackNavigator,
      navigationOptions: {
        tabBarIcon: () => {
          return <Image
            source={require('../Images/ic_fiber_new.png')}
            style={styles.icon}/>
        }
      }
    }
  },
  {
    tabBarOptions: {
      activeBackgroundColor: '#DDDDDD',
      inactiveBackgroundColor: '#FFFFFF',
      showLabel: false,
      showIcon: true
    }
  }
)

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30
  }
})

export default createAppContainer(MoviesTabNavigator)
