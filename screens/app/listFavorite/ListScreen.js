import * as React from 'react'
import { StyleSheet, View, Text, FlatList, Alert, Platform } from 'react-native'
import ListFavorite from '@components/listFavorite/ListItem'
import listHome from '../../../fake_data/film_home.json'
export default class ListScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      List: listHome.list.filter(x => x.isFavorite === true)
    }
  }

  render() {
    const { List } = this.state
    const { navigation} = this.props
    return (
      <View style={styles.container}>
        <FlatList
        numColumns={2}
          data={List}
          renderItem={({ item }) => (
            <ListFavorite
              filmItem={item}
              style={styles.item}
              onPress={() => {
                navigation.navigate({
                  name: 'FilmInfo',
                  params: { film: item },
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
    backgroundColor: '#111111'
  },
  item: {
    flex:1,
    borderRadius:5,
    marginHorizontal:4,
    marginVertical:4,
    height:240,
    padding:10
  },
})
