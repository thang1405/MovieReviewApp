import * as React from 'react'
import { StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native'
import { Avatar } from 'react-native-elements'
import ReadMore from 'react-native-read-more-text'
import Colors from '@constants/Colors'
export default class CommentItem extends React.Component {
  render() {
    const { CommentItem } = this.props
    return (
      <View style={styles.container}>
        <View style={styles.avatar}>
          <Avatar
            rounded
            source={{
              uri: CommentItem.avatar,
            }}
            size="small"
          />
        </View>
        <View style={styles.comment}>
          <Text style={styles.text}>{CommentItem.name}</Text>
          <ReadMore
            numberOfLines={4}
            renderTruncatedFooter={this._renderTruncatedFooter}
            renderRevealedFooter={this._renderRevealedFooter}
            onReady={this._handleTextReady}
          >
            <Text style={styles.text}>{CommentItem.content}</Text>
          </ReadMore>
        </View>
      </View>
    )
  }
  //method
  _renderTruncatedFooter = (handlePress) => {
    return (
      <Text
        style={{ color: Colors.gray, marginTop: 5 }}
        onPress={handlePress}
      >
        See more ...
      </Text>
    )
  }

  _renderRevealedFooter = (handlePress) => {
    return (
      <Text
        style={{ color: Colors.gray, marginTop: 5 }}
        onPress={handlePress}
      >
        Less...
      </Text>
    )
  }

  _handleTextReady = () => {
    // ...
  }
}

const styles = StyleSheet.create({
  container: {
    borderBottomColor: '#f1f1f1',
    borderBottomWidth: 1,
    padding: 10,
    flexDirection: 'row',
    flex: 1,
  },
  text: {
    fontSize: 16,
  },
  avatar: {
    flex: 1.5,
  },
  comment: {
    flex: 8.5,
  },
})
