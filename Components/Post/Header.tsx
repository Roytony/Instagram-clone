import { StyleSheet, Text, View } from 'react-native'
import Avatar from '../Avatar'
import { Entypo } from '@expo/vector-icons'

const PostHeader = ({ username }) => {
  return (
    <View style={styles.container}>
      <View
        style={{ display: 'flex', alignItems: 'center', flexDirection: 'row' }}
      >
        <Avatar src={{ uri: 'https://i.pravatar.cc/150?img=12' }} size={35} />
        <View style={{ marginLeft: 10 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{username}</Text>
        </View>
      </View>
      <Entypo name="dots-three-horizontal" color="gray" size={25} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
})

export default PostHeader
