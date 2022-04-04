import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RFValue } from "react-native-responsive-fontsize";
import Ionicons from "react-native-vector-icons/Ionicons";
import Caeser from '../tabs/Caeser'
import RailFence from '../tabs/RailFence'

//In the file that you want to import the tab navigator, type this inside render and return:
//<NavigationContainer independent={true}><BottomTabNavigator/></NavigationContainer>
//If you want to add more screens, refer to the Tab.Screen components, and to add icons for 
//those screens, go right below where it says "let iconName", no quotes in the actual code tho

const Tab = createBottomTabNavigator();

export default class BottomTabNavigator extends Component{
  render(){
    return(
      <Tab.Navigator
        labeled={false}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "Screen 1") {
              iconName = focused ? "wine" : "wine-outline";
            }
            else if (route.name === "Screen 2") {
              iconName = focused ? "train" : "train-outline";
            }
            return (
              <Ionicons
                name={iconName}
                size={RFValue(25)}
                color={color}
                style={styles.icons}
              />
            );
          }
        })}
        activeColor={"#ee8249"}
        inactiveColor={"gray"}
      >
        <Tab.Screen name="Screen1" component={Screen1} options={{headerShown: false}}/>
        <Tab.Screen name="Screen2" component={Screen2} options={{headerShown: false}}/>
      </Tab.Navigator>
    )
  }
}

const styles = StyleSheet.create({
  icons: {
    width: RFValue(30),
    height: RFValue(30)
  }
});
