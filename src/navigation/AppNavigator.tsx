import { createStackNavigator } from '@react-navigation/stack';
import NewsListScreen from '../screens/NewsListScreen';
import NewsDetail from '../screens/NewsDetail';

const Stack = createStackNavigator();

const AppNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="NewsListScreen"
      component={NewsListScreen}
      options={{ title: 'Latest News' }}
    />
    <Stack.Screen
      name="NewsDetail"
      component={NewsDetail}
      options={{ title: 'Article Details' }}
    />
  </Stack.Navigator>
);

export default AppNavigator;