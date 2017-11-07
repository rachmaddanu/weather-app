import React from 'react';
import { View } from 'react-native';
import Header from './src/components/Header';
import WeatherComponent from './src/components/WeatherComponent';

const App = () => {
  return (
    <View>
      <Header title={'Weather Map'} />
      <WeatherComponent />
    </View>
  );
};

export default App;