// Components/ArtDetailjs

import React from 'react'
import { StyleSheet, View, Text, ActivityIndicator, ScrollView, Image, TouchableOpacity, Share, Alert, Platform, Button } from 'react-native'
import API from '../API';

import { connect } from 'react-redux'
import EnlargeShrink from '../Animations/EnlargeShrink'

class ArtDetail extends React.Component {



  constructor(props) {
    super(props)
    this.state = {
      data: undefined,
      isLoading: false
    }

    this._toggleFavorite = this._toggleFavorite.bind(this)
  }



  componentDidMount() {
    const favoriteArtIndex = this.props.favoritesArt.findIndex(item => item.author === this.props.navigation.state.params.idArt)
    if (favoriteArtIndex !== -1) {
      this.setState({
        film: this.props.favoritesFilm[favoriteArtIndex]
      }, () => {  })
      return
    }
    this.setState({ isLoading: true })
    getFilmDetailFromApi(this.props.navigation.state.params.idArt).then(data => {
      this.setState({
        data: data,
        isLoading: false
      }, () => {  })
    })
  }

  _displayLoading() {
    if (this.state.isLoading) {
      return (
        <View style={styles.loading_container}>
          <ActivityIndicator size='large' />
        </View>
      )
    }
  }

  _toggleFavorite() {
    const action = { type: "TOGGLE_FAVORITE", value: this.state.film }
    this.props.dispatch(action)
  }

  _displayFavoriteImage() {
    var sourceImage = require('../Images/ic_favorite_border.png')
    var shouldEnlarge = false // Par défaut, si le film n'est pas en favoris, on veut qu'au clic sur le bouton, celui-ci s'agrandisse => shouldEnlarge à true
    if (this.props.favoritesArt.findIndex(item => item.author === this.state.data.author) !== -1) {
      sourceImage = require('../Images/ic_favorite.png')
      shouldEnlarge = true // Si le film est dans les favoris, on veut qu'au clic sur le bouton, celui-ci se rétrécisse => shouldEnlarge à false
    }
    return (
      <EnlargeShrink
        shouldEnlarge={shouldEnlarge}>
        <Image
          style={styles.favorite_image}
          source={sourceImage}
        />
      </EnlargeShrink>
    )
  }

  _displayFilm() {
    const { data } = this.state
    if (data != undefined) {
      return (
        <ScrollView style={styles.scrollview_container}>
          <Image
            style={styles.image}
            source={{uri: data.urlToImage)}}
          />
          <Text style={styles.title_text}>{data.title}</Text>
          <TouchableOpacity
              style={styles.favorite_container}
              onPress={() => this._toggleFavorite()}>
              {this._displayFavoriteImage()}
          </TouchableOpacity>
          <Text style={styles.description_text}>{data.description}</Text>
          <Text style={styles.default_text}>Sorti le {moment(new Date(data.publishedAt)).format('DD/MM/YYYY')}</Text>
        </ScrollView>
      )
    }
  }




  render() {
    return (
      <View style={styles.main_container}>
        {this._displayLoading()}
        {this._displayFilm()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1
  },
  loading_container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
  scrollview_container: {
    flex: 1
  },
  image: {
    height: 169,
    margin: 5
  },
  title_text: {
    fontWeight: 'bold',
    fontSize: 35,
    flex: 1,
    flexWrap: 'wrap',
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    marginBottom: 10,
    color: '#000000',
    textAlign: 'center'
  },
  favorite_container: {
    alignItems: 'center',
  },
  description_text: {
    fontStyle: 'italic',
    color: '#666666',
    margin: 5,
    marginBottom: 15
  },
  default_text: {
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
  },
  favorite_image:{
    flex: 1,
    width: null,
    height: null
  },
  share_touchable_floatingactionbutton: {
    position: 'absolute',
    width: 60,
    height: 60,
    right: 30,
    bottom: 30,
    borderRadius: 30,
    backgroundColor: '#e91e63',
    justifyContent: 'center',
    alignItems: 'center'
  },
  share_touchable_headerrightbutton: {
    marginRight: 8
  },
  share_image: {
    width: 30,
    height: 30
  }
})

const mapStateToProps = (state) => {
  return {
    favoritesFilm: state.toggleFavorite.favoritesFilm
  }
}

export default connect(mapStateToProps)(ArtDetail)
