import { NavigationContainer } from '@react-navigation/native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import HomeScreen from './Screens/HomeScreen'
import SearchScreen from './Screens/SearchScreen'
import AddScreen from './Screens/AddScreen'
import NotificationScreen from './Screens/NotificationScreen'
import ProfileScreen from './Screens/ProfileScreen'

// icons library
import { Entypo, Feather, AntDesign, Ionicons } from '@expo/vector-icons'
import Avatar from './Components/Avatar'
import MessageScreen from './Screens/MessageScrren'

export default function App() {
  const Tab = createMaterialBottomTabNavigator()
  return (
    <NavigationContainer>
      <Tab.Navigator
        labeled={false}
        activeColor="black"
        barStyle={{
          backgroundColor: 'white',
          borderTopWidth: 1,
          borderTopColor: '#e6e6e6',
        }}
      >
        <Tab.Screen
          options={{
            tabBarIcon: ({ color }) => (
              <Entypo name="home" size={25} color={color} />
            ),
          }}
          name="Home"
          component={HomeScreen}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({ color }) => (
              <Feather name="search" size={25} color={color} />
            ),
          }}
          name="search"
          component={SearchScreen}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({ color }) => (
              <AntDesign name="plussquare" size={25} color={color} />
            ),
          }}
          name="Add"
          component={AddScreen}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({ color }) => (
              <Ionicons name="notifications" size={25} color={color} />
            ),
          }}
          name="Notification"
          component={MessageScreen}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({ color }) => (
              <Avatar
                src={{ uri: 'https://i.pravatar.cc/150?img=25' }}
                size={25}
              />
            ),
          }}
          name="profile"
          component={ProfileScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
