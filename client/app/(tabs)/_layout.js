import React from 'react';
import { Tabs } from 'expo-router';
import { Text,View } from 'react-native';

import { COLORS,icons } from '../../constants';
import {TabBtn} from '../../components'



export default function TabLayout() {
  return (
    <Tabs  
    screenOptions={{
        tabBarStyle: {
          position:'absolute',
          backgroundColor:COLORS.tertiary,
          height:78,
          paddingTop:10,
          paddingBottom:20
    }}}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({focused}) => {
            let iconName=focused ? icons.homep : icons.home;
                        
            return (
              <View>
              <TabBtn iconUrl={iconName} dimension="25%"/> 
              </View>)
        },
        headerShown:false,
        tabBarActiveTintColor:"white",
        tabBarInactiveTintColor:COLORS.lightWhite,
        tabBarLabel: ({  focused}) => {
          return focused
            ? (<Text style={{ fontWeight: 'bold',fontSize: 9.5, color:COLORS.lightWhite,marginLeft:3}} >Home</Text>)
            : (<Text style={{ fontWeight: 'normal', fontSize: 10,color:COLORS.lightWhite,marginLeft:3}} >Home</Text>)
        }
        
      }}
      
      />

      
      <Tabs.Screen
        name="ExpensesScreen"
        options={{
          title: 'Expenses',
          tabBarIcon: ({focused}) => {
            let iconName=focused ? icons.expensesp : icons.expenses;
                        
            return (
              <View>
                        <TabBtn iconUrl={iconName} dimension="25%"/> 
              </View>)
        },
        headerShown:false,
        tabBarActiveTintColor:"white",
        tabBarInactiveTintColor:COLORS.lightWhite,
        
        tabBarLabel: ({  focused}) => {
          return focused
            ? (<Text style={{ fontWeight: 'bold',fontSize: 9.5, color:COLORS.lightWhite,marginLeft:3}} >Expenses</Text>)
            : (<Text style={{ fontWeight: 'normal', fontSize: 10,color:COLORS.lightWhite,marginLeft:3}} >Expenses</Text>)
        }
      }}
      />
      <Tabs.Screen
        name="SavingsScreen"
        options={{
          title: 'Savings',
          tabBarIcon: ({focused}) => {
            let iconName=focused ? icons.savingsp : icons.savings;
                        
            return (
              <View>
              <TabBtn iconUrl={iconName} dimension="30%"/> 
              </View>)
        },
        headerShown:false,
        tabBarActiveTintColor:"white",
        tabBarInactiveTintColor:COLORS.lightWhite,
        tabBarLabel: ({  focused}) => {
          return focused
            ? (<Text style={{ fontWeight: 'bold',fontSize: 9.5, color:COLORS.lightWhite,marginLeft:3}} >Savings</Text>)
            : (<Text style={{ fontWeight: 'normal', fontSize: 10,color:COLORS.lightWhite,marginLeft:3}} >Savings</Text>)
        }
      }}
      
      />
      <Tabs.Screen
        name="ProfileScreen"
        options={{
          title: 'Account',
          tabBarIcon: ({focused}) => {
            let iconName=focused ? icons.accountp : icons.account;
                        
            return (
              <View>
                    <TabBtn iconUrl={iconName} dimension="30%"/> 
              </View>)
        },
        headerShown:false,
        tabBarActiveTintColor:"white",
        tabBarInactiveTintColor:COLORS.lightWhite,
        tabBarLabel: ({  focused}) => {
          return focused
            ? (<Text style={{ fontWeight: 'bold',fontSize: 9.5, color:COLORS.lightWhite,marginLeft:3}} >Account</Text>)
            : (<Text style={{ fontWeight: 'normal', fontSize: 10,color:COLORS.lightWhite,marginLeft:3}} >Account</Text>)
        }
        }}
      />

     
    </Tabs>
  );
}
