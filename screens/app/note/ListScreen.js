import * as React from 'react'
import { StyleSheet, View, Text, FlatList, Alert, Platform } from 'react-native'
import ListFilmItem from '../../../components/ListFilmItem'
import MainHeader from '../../../components/MainHeader'

export default class ListScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      List: [
        {
          id: 1,
          title: 'Ghi chú ',
          content: 'Nội dung ghi chú là công việc hôm nay phải làm là gì??? ',
          created_at: '2020-03-05 09:40:50',
          sender: 'Vũ Minh Hải'
        },
        {
          id: 2,
          title: 'Ghi chú',
          content: 'Nội dung ghi chú là công việc hôm nay phải làm là gì??? ',
          created_at: '2020-03-05 19:40:50',
          sender: 'Vũ Minh Hải'
        },
        {
          id: 3,
          title: 'Ghi chú',
          content: 'Nội dung ghi chú ',
          created_at: '2020-03-05 08:40:50',
          sender: 'Vũ Minh Hải'
        },
        {
          id: 4,
          title: 'Ghi chú',
          content: 'Nội dung ghi chú',
          created_at: '2020-03-05 08:30:50',
          sender: 'Vũ Minh Hải'
        },
        {
          id: 5,
          title: 'Ghi chú',
          content: 'Nội dung ghi chú',
          created_at: '2020-03-05 09:40:50',
          sender: 'Vũ Minh Hải'
        }
      ]
    }
  }

  render() {
    const { navigation } = this.props
    const { List } = this.state
    return (
      <View style={styles.container}>
        <MainHeader
          title={$t('screens.note.title')}
          goBack={() => {
            navigation.goBack()
          }}
        />
        <FlatList
          data={List}
          renderItem={({ item }) => (
            <ListFilmItem
              listFilmItem={item}
              onPress={() => {
                navigation.navigate({
                  name: 'ListInfo',
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
    backgroundColor: '#fff'
  }
})
