import { StyleSheet, StatusBar, Text} from 'react-native';
import { Provider } from 'react-redux';
import reducers from '@/components/reducers/PeopleReducer';
import {configureStore} from "@reduxjs/toolkit";

const store = configureStore({
  reducer: reducers
});
const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});

const HomeScreen = () => {
  return (
    <Provider store={store}>
      <Text>Hello!</Text>
      <StatusBar style="auto" />
    </Provider>
  );
};

export default HomeScreen;
