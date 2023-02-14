import { SafeAreaView, StatusBar } from 'react-native';
import Baskets from './src/views/Baskets';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import mock from './src/mocks/basket';
import AppLoading from 'expo-app-loading';

export default function App() {
  const [loadedFont] = useFonts({
    'MontserratRegular': Montserrat_400Regular,
    'MontserratBold': Montserrat_700Bold,
  });

  if (!loadedFont) {
    return <AppLoading />
  }

  return (
    <SafeAreaView>
      <StatusBar />
      <Baskets {...mock} />
    </SafeAreaView>
  );
} 
