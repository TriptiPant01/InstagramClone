import React from 'react';
import {View, Text, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, HeaderTitle} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeIcon from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/Ionicons';
import PlustIcon from 'react-native-vector-icons/AntDesign';
import HumanIcon from 'react-native-vector-icons/Feather';

import {Login, Home, Search, Add, Activity, Profile} from '../screens';
import {CommonStyles} from '../commons';

import Images from '../Images';

const AppStackNavigator = createStackNavigator();
const Tab = createBottomTabNavigator();
const TabStackScreen = () => (
  <Tab.Navigator
    tabBarOptions={{
      showLabel: false,
      activeTintColor: 'black',
      inactiveTintColor: 'grey',
    }}>
    <Tab.Screen
      name="Home"
      component={Home}
      options={{
        tabBarIcon: ({focused, color}) => {
          return (
            <HomeIcon
              name="home"
              style={CommonStyles.IconWrapper}
              color={color}
            />
          );
        },
      }}
    />
    <Tab.Screen
      name="Settings"
      component={Search}
      options={{
        tabBarIcon: ({focused, color}) => (
          <Icon
            name="ios-search"
            style={CommonStyles.IconWrapper}
            color={color}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Add"
      component={Add}
      options={{
        tabBarIcon: ({focused, color}) => (
          <View
            style={{
              borderColor: 'grey',
              borderWidth: 1,
              padding: 2,
              borderRadius: 7,
            }}>
            <PlustIcon name="plus" style={{fontSize: 20}} color={color} />
          </View>
        ),
      }}
    />
    <Tab.Screen
      name="Settings2"
      component={Activity}
      options={{
        tabBarIcon: ({focused, color}) => (
          <Icon
            name="ios-heart"
            style={CommonStyles.IconWrapper}
            color={color}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={Profile}
      options={{
        tabBarIcon: ({focused, color}) => (
          <HumanIcon
            name="user"
            style={CommonStyles.IconWrapper}
            color={color}
          />
        ),
      }}
    />
  </Tab.Navigator>
);

export default AppStackScreen = () => (
  <NavigationContainer>
    <AppStackNavigator.Navigator initialRouteName="Home" headerMode="none">
      <AppStackNavigator.Screen name="Login" component={Login} />
      <AppStackNavigator.Screen
        name="Home"
        component={TabStackScreen}

        // options={{
        //   headerTitle: 'test',
        //   header: ({scene, previous, navigation}) => {
        //     const {options} = scene.descriptor;

        //     return (
        //       <CommonHeader
        //         centerContent={'tet'}
        //         leftContent={Images.CameraLogo}
        //         rightContent={Images.Send}
        //       />
        //     );
        //   },
        // }}
      />
    </AppStackNavigator.Navigator>
  </NavigationContainer>
);
