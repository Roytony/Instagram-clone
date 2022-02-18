import { FlatList, View } from 'react-native'
import stories from '../../Data/Stories'
import Story from './Story'

const Stories = () => {
  const renderItem = ({ item }) => (
    <Story key={item.id} src={item.img} username={item.username} />
  )
  return (
    <View
      style={{
        borderBottomWidth: 1,
        paddingVertical: 10,
        borderBottomColor: '#e6e6e6',
      }}
    >
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={stories}
        renderItem={renderItem}
      />
    </View>
  )
}

export default Stories
