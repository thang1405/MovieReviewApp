import * as React from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  FlatList,
  ImageBackground,
  ScrollView,
} from 'react-native'
import CommentItem from '@components/home/CommentItem'
import {
  MaterialCommunityIcons,
  Feather,
  Entypo,
  AntDesign,
} from '@expo/vector-icons'
import ReadMore from 'react-native-read-more-text'
import Colors from '@constants/Colors'
export default class ListInfoScreen extends React.Component {
  render() {
    const { route } = this.props
    return (
      <ScrollView>
        <View style={styles.container}>
          {/* image film */}
          <View style={styles.image}>
            <ImageBackground
              style={styles.img}
              source={{ uri: route.params.film.imageUrl }}
              resizeMode={'cover'}
            />
          </View>
          {/* title film */}
          <View style={styles.bottom}>
            <View style={styles.infomation}>
              <Text style={styles.title}>{route.params.film.title}</Text>

              <View style={styles.content}>
                <ReadMore
                  numberOfLines={4}
                  renderTruncatedFooter={this._renderTruncatedFooter}
                  renderRevealedFooter={this._renderRevealedFooter}
                  onReady={this._handleTextReady}
                >
                  <Text style={styles.contentText}>
                    {route.params.film.content}
                  </Text>
                </ReadMore>
              </View>
              {/* num like and comment  */}
            </View>
            <View style={styles.comment_list}>
            <View style={styles.like}>
                <View>
                  <AntDesign
                    name={route.params.film.isLike ? 'like1' : 'like2'}
                    size={20}
                    color={
                      route.params.film.isLike ? "#2979ff" : Colors.black
                    }
                    style={styles.iconLike} 
                  />
                </View>
                <View>
                  <Text style={styles.likeText}>
                    {route.params.film.like} Likes
                  </Text>
                </View>
              </View>
              <View style={styles.comment}>
                <View>
                  <MaterialCommunityIcons
                    name="comment-text-outline"
                    size={20}
                    color="#0b0b0b"
                    backgroundColor={Colors.white}
                  />
                </View>
                <View>
                  <Text style={styles.commentText}>
                    {route.params.film.comment} Comments
                  </Text>
                </View>
              </View>
              
            </View>
            {/* comment Input */}
            <View style={styles.commentInput}>
              <TextInput
                style={styles.textInput}
                placeholder={'Enter your comment'}
                placeholderTextColor="#808080"
              />
            </View>
            {/* flatlist comment */}
            <FlatList
              data={route.params.film.comments}
              renderItem={({ item }) => <CommentItem CommentItem={item} />}
              keyExtractor={(item) => `${route.params.film.title} ${item.name}`}
            />
          </View>
        </View>
      </ScrollView>
    )
  }
  _renderTruncatedFooter = (handlePress) => {
    return (
      <Text style={{ color: Colors.blue, marginTop: 5 }} onPress={handlePress}>
        Xem Thêm ...
      </Text>
    )
  }

  _renderRevealedFooter = (handlePress) => {
    return (
      <Text style={{ color: Colors.blue, marginTop: 5 }} onPress={handlePress}>
        Thu nhỏ
      </Text>
    )
  }

  _handleTextReady = () => {
    // ...
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    fontSize: 20,
  },
  image: {
    height: 290,
  },
  img: {
    width: 414,
    height: 300,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
  },
  bottom: {
    padding: 10,
    borderColor: '#F1f1f1',
    borderWidth: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
  },
  content: {
    paddingLeft: 10,
    paddingTop: 10,
    paddingRight: 10,
  },
  contentText: {
    fontSize: 16,
  },
  infomation: {
    maxHeight: 150,
    overflow: 'hidden',
  },
  comment_list: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 20,
    paddingLeft: 20,
    marginTop: 15,
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f1f1',
  },
  like: {
    flexDirection: 'row',
  },
  likeText: {
    marginLeft: 10,
    marginTop: 4,
  },
  comment: {
    flexDirection: 'row',
  },
  commentText: {
    marginLeft: 10,
    marginTop: 1,
  },
  commentInput: {
    paddingRight: 10,
    marginTop: 5,
    paddingLeft: 10,

  },
  textInput: {
    borderBottomColor: '#E3E3E3',
    padding: 5,
    borderBottomWidth: 1,
    height: 40,
    fontSize: 16,
  },

})
