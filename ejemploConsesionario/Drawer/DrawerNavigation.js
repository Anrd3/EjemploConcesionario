import "react-native-gesture-handler"
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import AgendarTaller from '../src/components/AgendarTaller';
import React from 'react';

const Drawer = createDrawerNavigator();

 function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="AgendaTaller" component={AgendarTaller} />
      <Drawer.Screen name="Article" component={Article} />
    </Drawer.Navigator>
  );
}

export default MyDrawer