import { StatusBar } from 'expo-status-bar'
import { FlatList, ScrollView, View } from 'react-native'
import { Feather, Ionicons } from '@expo/vector-icons'
import Post from '../Components/Post'
import Stories from '../Components/Stories'
import PostsData from '../Data/Posts'
import { SafeAreaView } from 'react-native-safe-area-context'

const HomeScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor="#e6e6e6" />
      <View
        style={{
          // paddingTop: 40,
          paddingHorizontal: 15,
          paddingVertical: 5,
          display: 'flex',
          backgroundColor: 'white',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <Feather name="camera" color="#00000" size={25} />

        <View style={{ display: 'flex', flexDirection: 'row' }}>
          <Feather name="tv" color="#000000" size={25} />
          <Ionicons
            style={{
              marginLeft: 10,
            }}
            name="ios-paper-plane-outline"
            color="#000000"
            size={25}
          />
        </View>
      </View>
      <View style={{ backgroundColor: 'white' }}>
        <FlatList
          ListHeaderComponent={<Stories />}
          showsVerticalScrollIndicator={false}
          data={PostsData}
          renderItem={({ item }) => <Post key={item.id} item={item} />}
        />
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen
