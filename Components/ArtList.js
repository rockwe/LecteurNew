// Components/ArtList.js

import React from 'react'
import { StyleSheet, FlatList } from 'react-native'
import ArtItem from './ArtItem'
import { connect } from 'react-redux'

class ArtList extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      articles: []
    }
  }

  _displayDetailForFilm = (idFilm) => {
    console.log("Display articles " + idFilm)
    this.props.navigation.navigate('FilmDetail', {idFilm: idFilm})
  }

  render() {
    return (
        <FlatList
          style={styles.list}
          data={this.props.data}
          extraData={this.props.favoritesArt}
          keyExtractor={(item) => item.author}
          renderItem={({item}) => (
            <ArtItem
              data={item}

            />
          )}
          onEndReachedThreshold={0.5}
          onEndReached={() => {
            if (!this.props.favoriteList && this.props.page < this.props.totalPages) {
              this.props.loadFilms()
            }
          }}
        />
    )
  }
}

const styles = StyleSheet.create({
  list: {
    flex: 1
  }
})

const mapStateToProps = state => {
  return {
    favoritesFilm: state.toggleFavorite.favoritesFilm
  }
}

export default connect(mapStateToProps)(ArtList)
