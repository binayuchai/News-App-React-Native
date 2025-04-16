// import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from 'react-native-paper/react-navigation';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import Discover from '../screens/Discover';
import {NavigationContainer} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Profile from '../screens/Profile';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DetailView from '../screens/DetailView';

const Stack = createNativeStackNavigator();

const Tab = createMaterialBottomTabNavigator();
type IconProps = {
  color: string;
  size: number;
};

const HomeIcon: React.FC<IconProps> = ({color, size}) => (
  <MaterialCommunityIcons name="home" color={color} size={size} />
);

const DiscoverIcon: React.FC<IconProps> = ({color, size}) => (
  <MaterialCommunityIcons name="compass" color={color} size={size} />
);

const ProfileIcon: React.FC<IconProps> = ({color, size}) => (
  <MaterialCommunityIcons name="account" color={color} size={size} />
);
const TabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="Home" activeColor="white">
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => <HomeIcon color={color} size={20} />,
        }}
      />
      <Tab.Screen
        name="Discover"
        component={Discover}
        options={{
          tabBarLabel: 'Discover',
          tabBarIcon: ({color}) => <DiscoverIcon color={color} size={20} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => <ProfileIcon color={color} size={20} />,
        }}
      />
    </Tab.Navigator>
  );
};
export default function AppNavigation({theme}) {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator initialRouteName="Hometabs">
        <Stack.Screen
          name="Hometabs"
          component={TabNavigator}
          options={{headerShown: false}}
        />
        {/* <Stack.Screen name="HomeTabs" component={TabNavigator} /> */}
        <Stack.Screen
          name="detailView"
          component={DetailView}
          // options={{
          //   headerStyle: {backgroundColor: theme.colors},

          //   headerTintColor: headerTintColor,
          // }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
