//navegar entre as telas da TabNavigator e Profile

import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Profile from "../screens/Profile";
import StackNavigator from "./Stack";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator screenOptions={{headerShown:true}}>
      <Drawer.Screen name="Tela Inicial" component={StackNavigator} />
      <Drawer.Screen name="Perfil" component={Profile} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;