import * as React from 'react'
import { StyleSheet, View, Text, FlatList, Alert, Platform } from 'react-native'
import FilmItem from '../../../components/home/FilmItem'

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      homeList: [
        {
          id: 1,
          title: 'Joker',
          imageUrl:'',
          content:"lorem To run the app with live reloading, choose one of",
          comment:100,
          like:100,
          isLike:true
        },
        {
          id: 2,
          title: 'Spider-Man 1',
          imageUrl:'',
          content:"lorem To run the app with live reloading, choose one of",
          comment:100,
          like:100,
          isLike:true
        },
        {
          id: 3,
          title: 'Spider-Man 2',
          imageUrl:'',
          content:"lorem To run the app with live reloading, choose one of",
          comment:100,
          like:100,
          isLike:true
        },
        {
          id: 4,
          title: 'Spider-Man 3',
          imageUrl:'',
          content:"lorem To run the app with live reloading, choose one of",
          comment:100,
          like:100,
          isLike:true
        },
        {
          id: 5,
          title: 'Joker',
          imageUrl:'',
          content:"lorem To run the app with live reloading, choose one of",
          comment:100,
          like:100,
          isLike:true
        },
      ]
    }
  }

  render() {
    const { navigation } = this.props
    const { homeList } = this.state
    return (
      <View style={styles.container}>
        <FlatList
          data={homeList}
          renderItem={({ item }) => (
            <FilmItem
              filmItem={item}
              onPress={() => {
                navigation.navigate({
                  name: 'FilmInfoScreen',
                  params: { film: item }
                })
              }}
            />
          )}
          keyExtractor={item => `${item.id}`}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
})
