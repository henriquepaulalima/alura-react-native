import { SafeAreaView, StatusBar } from 'react-native';
import Baskets from './src/views/Baskets';

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar />
      <Baskets />
    </SafeAreaView>
  );
} 
