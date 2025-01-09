import { StyleSheet, StatusBar} from 'react-native';
import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducers from '../../components/reducers/PeopleReducer';

const store = createStore(reducers, applyMiddleware(thunk));

export default HomeScreen(() => {
  return (
    <Provider store={store}>
      <Text>Hello!</Text>
      <StatusBar style="auto" />
    </Provider>
  );
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
