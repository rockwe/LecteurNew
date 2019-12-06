// Components/Favorites.js

import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ArtList from './ArtList'
import { connect } from 'react-redux'


class Favorites extends React.Component {

  render() {
    return (
      <View style={styles.main_container}>
        <ArtList
          films={this.props.favoritesFilm}
          navigation={this.props.navigation}
          favoriteList={true}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1
  },
  avatar_container: {
    alignItems: 'center'
  }
})

const mapStateToProps = (state) => {
  return {
    favoritesFilm: state.toggleFavorite.favoritesFilm
  }
}

export default connect(mapStateToProps)(Favorites)
