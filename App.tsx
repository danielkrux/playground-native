import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { HomeScreen } from "./src/screens";
import ChartScreen from "./src/screens/ChartScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Chart">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Chart" component={ChartScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
