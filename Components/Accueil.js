// Components/settings.jsjs

import React from 'react'
import { StyleSheet, View, TextInput, Button, Text, FlatList, ActivityIndicator ,Image} from 'react-native'
import ArtItem from './ArtItem'
import Loading from '../Components/Loading'
import API from '../API'
import ArtList from './ArtList';

class Accueil extends React.Component {

  constructor(props) {
    super(props)
    this.totalPages = 0
    this.state = {
      data: [] ,
      isLoading: false,
      total_pages: 0
    }
    this._loadArticles = this._loadArticles.bind(this)
  }



  _loadArticles() {
      this.setState({ isLoading: true })
      API.getWeatherByCity( 'bitcoin').then(data => {
          this.totalPage = data.data.totalResults
          this.setState({
            data: this.state.data.concat(data.data.articles),
            isLoading: false,
            total_pages: this.totalPage,
          })
      })

  }
  componentDidMount() {
    API.getWeatherByCity('bitcoin').then(resp => {
      this.setState({ data: resp.data.articles });
    })
  }


  _displayDetailForFilm = (idArt) => {
    console.log("Display Art with id " + idArt)
    this.props.navigation.navigate("ArtDetail", { idFilm: idArt})
  }



  render() {
    console.log('dooooooooooooo',this.state.data)
    return (
        <View style={{ flex: 1 }}>
          {this.state.data ? (
              <>
                <ArtList
                   data={this.state.data}
                    renderItem={({item}) => <Text>{item.title}</Text>}
                   keyExtractor={(item) => item.id.toString()}
                />

              </>
          ) : (<Loading displayColor="orange">
            <Image style={{ width: 80, height: 80 }} source={{ uri: `http://openweathermap.org/img/wn/09d.icon}@2x.png` }} />
          </Loading>)
          }
        </View>

    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1
  },
  textinput: {
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    borderColor: '#000000',
    borderWidth: 1,
    paddingLeft: 5
  },
  loading_container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 100,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default Accueil
