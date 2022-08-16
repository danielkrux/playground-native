import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import routes from "./src/screens/routes";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home">
        {routes.map((r) => (
          <Stack.Screen
            key={r.name}
            name={r.name}
            component={r.component}
            options={{ headerTitle: r.title }}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
