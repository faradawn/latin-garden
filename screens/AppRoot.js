import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Settings from './Settings';
import Home from './Home'
import Cards from './Cards'

const Tabs = createBottomTabNavigator()

const AppRoot = () => (
  <Tabs.Navigator initialRouteName='首页'
    screenOptions={({route}) => ({
      tabBarIcon: ({focused, color, size}) => {
        let icon;
        if (route.name === '首页') {
          icon=focused? 'home' : 'home-outline'
        }
        else if (route.name === '设置') {icon=focused?'settings' : 'settings-outline'}
        else if (route.name === '卡片') {icon=focused? 'file-tray' : 'file-tray-outline'}
        return <Ionicons name={icon} size={size} color={color} />
      }
    })}
    tabBarOptions={{activeTintColor: 'tomato', inactiveTintColor: 'grey'}}>

    <Tabs.Screen name='卡片' component={Cards}/>
    <Tabs.Screen name='首页' component={Home}/>
    <Tabs.Screen name='设置' component={Settings}/>
    
  </Tabs.Navigator>
)

export default AppRoot;
