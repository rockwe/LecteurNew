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

  _displayDetailForArt = (idArt) => {
    console.log("Display articles " + idArt)
    this.props.navigation.navigate('ArtDetail', {id: idArt})
  }

  render() {
    return (
        <FlatList
          style={styles.list}
          data={this.props.data}
          extraData={this.props.favoritesArt}
          keyExtractor={(item) => item.author.toString()}
          renderItem={({item}) => (
            <ArtItem
              data={item}
              displayDetailForArt={this._displayDetailForArt}
            />
          )}

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
    favoritesArt: state.toggleFavorite.favoritesArt
  }
}

export default connect(mapStateToProps)(ArtList)
