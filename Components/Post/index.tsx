import React from 'react'
import { View } from 'react-native'
import Content from './Content'
import PostFooter from './Footer'
import PostHeader from './Header'

const Post = ({ item }) => {
  return (
    <View>
      <PostHeader username={item.user.name} tag={item.tag} />
      <Content src={item.img} />
      <PostFooter title={item.title} />
    </View>
  )
}

export default Post
