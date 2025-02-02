import React from "react";
import Recipes from "./navtabs/Recipes";
import Explore from "./navtabs/Explore";
import UploadReceiptScreen from "./navtabs/HomeMain";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
// import FoodLogo from './assets/foodLogoSVG';
import { createStackNavigator } from '@react-navigation/stack';
import DetailScreen from "./navtabs/DetailScreen";
import RecipeIdeas from "./navtabs/RecipeIdeas";
import DetailRecipeScreen from "./navtabs/DetailRecipeScreen";
import EditFoodScreen from "./navtabs/EditFoodScreen";
import EatSoon from "./navtabs/EatSoon";
import { useFonts, PlusJakartaSans_700Bold, PlusJakartaSans_600SemiBold } from '@expo-google-fonts/plus-jakarta-sans';
import { Text } from 'react-native';

const Tab = createBottomTabNavigator()
const UploadReceiptStack = createStackNavigator();
const RecipesStack = createStackNavigator();

function UploadReceiptStackScreen() {
  return (
    <UploadReceiptStack.Navigator>
      <UploadReceiptStack.Screen name="My Fridge" component={UploadReceiptScreen} options={{ headerShown: false }} />
      <UploadReceiptStack.Screen name="DetailScreen" component={DetailScreen} options={{ headerTitle: '' }} />
      <UploadReceiptStack.Screen name="EditFoodScreen" component={EditFoodScreen} options={{ headerTitle: 'Edit Item' }} />
      <UploadReceiptStack.Screen name="EatSoon" component={EatSoon} options={{ headerTitle: 'Eat Soon' }} />
    </UploadReceiptStack.Navigator>
  );
}

function RecipesStackScreen() {
  return (
    <RecipesStack.Navigator>
      <RecipesStack.Screen name="Recipes" component={Recipes} options={{ headerShown: false }} />
      <RecipesStack.Screen name="RecipeIdeas" component={RecipeIdeas} options={{ headerTitle: 'Recipe Ideas' }} />
      <RecipesStack.Screen name="DetailRecipeScreen" component={DetailRecipeScreen} options={{ headerTitle: '' }} />
    </RecipesStack.Navigator>
  );
}

const Nav = () => {
  let [fontsLoaded] = useFonts({
    PlusJakartaSans_700Bold,
    PlusJakartaSans_600SemiBold,
  });
  
  if (!fontsLoaded) {
    return null;
  }
  return (
    <NavigationContainer>
      {/* <Tab.Navigator 
      screenOptions={{
        tabBarActiveTintColor: '#7CC106',
        tabBarInactiveTintColor: '#808B9F',
        tabBarStyle: {
          backgroundColor: '#ffffff',
        },
        tabBarLabelStyle: {
          fontSize: 14,
          fontFamily: 'PlusJakartaSans_700Bold',
        },
        }}> */}
        <Tab.Navigator 
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: '#7CC106',
          tabBarInactiveTintColor: '#808B9F',
          tabBarStyle: {
            backgroundColor: '#ffffff',
          },
          tabBarLabel: ({ focused, color }) => {
            const label = route.name;
            const fontFamily = focused ? 'PlusJakartaSans_700Bold' : 'PlusJakartaSans_600SemiBold';
            return <Text style={{ color, fontFamily, fontSize: 14 }}>{label}</Text>;
          },
        })}>
          <Tab.Screen name="My Fridge" component={UploadReceiptStackScreen} options={{
            tabBarIcon: ({ focused  }) => (
              <FontAwesome5 name="carrot" color={focused ? '#7CC106' : '#808B9F'} size={25} />
              // <FoodLogo size={24} color={focused ? '#7CC106' : '#808B9F'} />
            ),
            headerShown: false,
          }} />
          <Tab.Screen name="Explore" component={Explore} options={{
            tabBarIcon: ({ focused }) => (
              <MaterialIcons name="explore" color={focused ? '#7CC106' : '#808B9F'} size={25} />
            ),
            headerShown: false,
          }} />
          <Tab.Screen name="Recipes" component={RecipesStackScreen} options={{
            tabBarIcon: ({ focused }) => (
              <MaterialCommunityIcons name="chef-hat" color={focused ? '#7CC106' : '#808B9F'} size={25} />
            ),
            headerShown: false,
          }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Nav;