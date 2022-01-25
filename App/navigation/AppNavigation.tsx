import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home} from '@screens/home';

const Stack = createStackNavigator();

export const AppNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Home',
          headerShown: true,
          // header: () => {
          //   return <DefaultLayout />;
          // },
        }}
      />
    </Stack.Navigator>
  );
};
