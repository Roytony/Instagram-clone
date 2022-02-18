import { Image, View } from 'react-native'

const Content = ({ src }) => {
  return (
    <View>
      <Image
        source={{ uri: src }}
        style={{
          width: '100%',
          height: 300,
        }}
      />
    </View>
  )
}

export default Content
