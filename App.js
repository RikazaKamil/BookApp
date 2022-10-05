import { StyleSheet, Text,FlatList} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Book from "./Login";
import Details from "./Books";
import Search from "./Search";

function CategoriesScreen() {
  return (
    <FlatList
    data={[
      {key: 'Action and Adventure'},
      {key: 'Story'},
      {key: 'Comics'},
      {key: 'History'},
      {key: 'Mystery'},
      {key: 'Fantasy'},
      {key: 'Horror'}
    ]}
    renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
  />
  
  );
}


const Tab = createBottomTabNavigator();

function BookApp(navigation) {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
              screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'home'
                : 'home';
            } else if (route.name === 'User') {
              iconName = focused ? 'ellipse' : 'ellipse';
            }else if (route.name === 'Categories') {
              iconName = focused ? 'menu' : 'menu';
            }else if (route.name === 'Search') {
              iconName = focused ? 'search' : 'search';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen name="Home" component={Details} options={{ tabBarBadge: 2 }}/>
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Categories" component={CategoriesScreen} />
        <Tab.Screen name="User" component={Book} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default BookApp;

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    fontSize: 18,
  },
});