import { View, Text } from "react-native";
import HomeScreen from "./Screens/HomeScreen";
import SignOut from "./Screens/SignOut";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from "./Screens/LoginScreen";
import NewPostScreen from "./Screens/NewPostScreen";
import UserAccountScreen from "./Screens/UserAccountScreen";
import SignUpScreen from "./Screens/SignUpScreen";
import SpotifySearch from "./Screens/SpotifySearch";

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='LoginScreen'>
        <Stack.Screen options ={{headerShown: false}}name="Home" component={HomeScreen} />
        <Stack.Screen options ={{headerShown: false}}name="Login" component={LoginScreen}/>
        <Stack.Screen options ={{headerShown: false}}name="SignUp" component={SignUpScreen} />
        <Stack.Screen name='NewPost' component={NewPostScreen} />
        <Stack.Screen options ={{headerShown: false}}name="Signout" component={SignOut}/>
        <Stack.Screen options ={{headerShown: false}}name="UserAccount" component={UserAccountScreen}/>
        <Stack.Screen options ={{headerShown: false}}name="SpotifySearch" component={SpotifySearch}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
  
}