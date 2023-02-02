import { SafeAreaView, StatusBar } from 'react-native';
import Baskets from './src/views/Baskets';
import { useFonts, Montserrat_400Regular, Montserrat_400Regular_Italic, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import { View } from 'react-native-web';

export default function App() {
  const [loadedFont] = useFonts({
    'MontserratRegular': Montserrat_400Regular,
    'MontserratBold': Montserrat_700Bold,
  });
  
  if (!loadedFont) {
    return <View />
  }

  return (
    <SafeAreaView>
      <StatusBar />
      <Baskets />
    </SafeAreaView>
  );
} 
