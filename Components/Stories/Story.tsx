import { Image, StyleSheet, Text, View } from 'react-native'

interface StoryProps {
  src: string
  username: string
}

const Story = ({ src, username }: StoryProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.imgWrapper}>
        <Image style={styles.img} source={{ uri: src }} />
      </View>
      <Text style={styles.text}>{username}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: 10,
  },
  img: {
    width: 55,
    height: 55,
    borderRadius: 50,
  },
  imgWrapper: {
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#CE0458',
    padding: 4,
  },
  text: {
    fontWeight: 'bold',
    marginVertical: 10,
  },
})

export default Story
