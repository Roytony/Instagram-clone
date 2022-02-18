import { Text, View } from 'react-native'
import { Feather, FontAwesome, Ionicons } from '@expo/vector-icons'

const PostFooter = ({ title }) => {
  return (
    <View style={{ marginVertical: 10 }}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <Feather name="heart" size={25} />
          <FontAwesome style={{ marginLeft: 5 }} name="comment-o" size={24} />
          <Ionicons
            style={{ marginLeft: 5 }}
            name="paper-plane-outline"
            size={25}
          />
        </View>
        <Feather name="bookmark" size={25} />
      </View>
      <Text style={{ fontSize: 18, marginVertical: 5, fontWeight: '500' }}>
        {title}
      </Text>
    </View>
  )
}

export default PostFooter
