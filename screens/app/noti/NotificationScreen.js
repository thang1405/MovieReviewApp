import * as React from 'react'
import { StyleSheet, View, Text, FlatList, Alert, Platform } from 'react-native'
import ListNoti from '../../../components/notification/ListNoti'

export default class NotificationScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      List: [
        {
          id: 1,
          content: 'Thông báo 1 ',
          created_at: '2020-03-05 09:40:50',
        },
        {
          id: 2,
          content: 'Thông báo ',
          created_at: '2020-03-05 19:40:50',
        },
        {
          id: 3,
          content: 'Thông báo ',
          created_at: '2020-03-05 08:40:50',
        },
        
      ]
    }
  }

  render() {
    const { navigation } = this.props
    const { List } = this.state
    return (
      <View style={styles.container}>
        <FlatList
          data={List}
          renderItem={({ item }) => (
            <ListNoti
              listNoti={item}
              onPress={() => {
                navigation.navigate({
                  name: 'Item',
                  params: { info: item }
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
    backgroundColor: '#0B0B0B'
  },

})
