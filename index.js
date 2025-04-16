/**
 * @format
 */

import {AppRegistry, useColorScheme} from 'react-native';
import {name as appName} from './app.json';
import {PaperProvider} from 'react-native-paper';
import AppNavigation from './src/navigation/AppNavigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {MD3DarkTheme, MD3LightTheme} from 'react-native-paper';

export default function Main() {
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? MD3DarkTheme : MD3LightTheme;
  return (
    <SafeAreaProvider>
      <PaperProvider theme={theme}>
        <AppNavigation theme={theme} />
      </PaperProvider>
    </SafeAreaProvider>
  );
}
AppRegistry.registerComponent(appName, () => Main);
