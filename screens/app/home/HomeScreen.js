import * as React from 'react'
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TextInput,
  Alert,
  Platform,
} from 'react-native'
import FilmItem from '@components/home/FilmItem'
import { Ionicons } from '@expo/vector-icons'
import listHome from '../../../fake_data/film_home.json'
export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      homeList: listHome
    }
  }
  static navigationOptions = {
    headerStyle: { marginTop: 24 },
  }
  render() {
    const { navigation } = this.props
    const { homeList } = this.state

    return (
      <View style={styles.container}>
        <View style={styles.searchSection}>
          <Ionicons
            style={styles.searchIcon}
            name="ios-search"
            size={25}
            color="white"
            backgroundColor='gray'
          />
          <TextInput
            style={styles.input}
            placeholderTextColor="#f1f1f1" 
            placeholder="Search Movie"
            // onChangeText={(searchString) => {
            //   this.setState({ searchString })
            // }}
            underlineColorAndroid="transparent"
          />
        </View>
        <FlatList
          data={homeList.list}
          renderItem={({ item }) => (
            <FilmItem
              filmItem={item}
              onPress={() => {
                navigation.navigate({
                  name: 'FilmInfo',
                  params: { film: item },
                })
              }}
            />
          )}
          keyExtractor={(item) => `${item.id}`}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0b0b0b',
    // marginTop:Platform.OS === 'ios' ? 34:0
  },
  searchSection: {
    margin: 10,
    marginLeft:15,
    marginRight:15,
    borderColor:'black',
    borderWidth:1,
    borderRadius:5,
    paddingLeft:10,
    paddingRight:15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#898989',
    
  },
  searchIcon: {
    padding: 10,
    paddingLeft:3
  },
  input: {
    flex: 1,
    height:45,
    paddingTop: 5,
    paddingRight: 10,
    paddingBottom: 5,
    paddingLeft: 5,
    backgroundColor: '#898989',
    color: 'white',
    fontSize:17
  },
})
