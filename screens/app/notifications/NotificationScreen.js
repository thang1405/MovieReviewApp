import * as React from 'react'
import { StyleSheet, View, Text, FlatList, Alert, Platform } from 'react-native'
import ListNoti from '@components/notification/ListNoti'

export default class NotificationScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      List: [
        {
          id: 1,
          content: 'Diệp Tu đã comment bài viết của bạn',
          created_at: '2020-03-06 09:40:50',
        },
        {
          id: 2,
          content: 'Quân Mạc Tiếu đã comment bài viết của bạn ',
          created_at: '2020-03-07 19:40:50',
        },
        {
          id: 3,
          content: 'Nhất Diệp Chi Thu đã comment bài viết của bạn  ',
          created_at: '2020-03-08 08:40:50',
        },
        {
          id: 4,
          content: 'Thắng Neel đã comment bài viết của bạn',
          created_at: '2020-03-09 09:40:50',
        },
      ]
    }
  }

  render() {
    const { List } = this.state
    return (
      <View style={styles.container}>
        <FlatList
          data={List}
          renderItem={({ item }) => (
            <ListNoti
              listNoti={item}
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
